'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

// The intro file stacks the colour frame on top of a grey transparency mask.
// WebGL recombines them every frame so the waving avatar is see-through in every
// browser; until the first frame is drawn (or if anything fails) the poster shows.
const VERTEX_SHADER =
  'attribute vec2 p; varying vec2 uv; void main(){ uv = vec2((p.x + 1.0) * 0.5, (1.0 - p.y) * 0.5); gl_Position = vec4(p, 0.0, 1.0); }';
const FRAGMENT_SHADER =
  'precision mediump float; varying vec2 uv; uniform sampler2D t; void main(){ vec3 cw = texture2D(t, vec2(uv.x, uv.y * 0.5)).rgb; float a = texture2D(t, vec2(uv.x, 0.5 + uv.y * 0.5)).r; a = clamp((a - 0.02) / 0.96, 0.0, 1.0); vec3 pm = clamp(cw - (1.0 - a), 0.0, a); gl_FragColor = vec4(pm, a); }';

export default function IntroAvatar({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    if (reduceMotion) {
      video.pause();
      return;
    }

    let context: WebGLRenderingContext | null = null;
    try {
      context = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true });
    } catch {
      context = null;
    }
    if (!context) return;
    const gl = context;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SHADER));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    let raf = 0;
    let stopped = false;
    let visible = true;
    let drawn = false;

    const draw = () => {
      if (stopped) return;
      if (visible && video.readyState >= 2) {
        try {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
        } catch {
          return;
        }
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        if (!drawn) {
          drawn = true;
          setReady(true);
        }
      }
      raf = requestAnimationFrame(draw);
    };

    // Don't decode or draw while the hero is scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(canvas);

    video.muted = true;
    video.play().catch(() => {});
    raf = requestAnimationFrame(draw);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      video.pause();
    };
  }, [reduceMotion]);

  return (
    <div className={cn('relative', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element -- tiny transparent poster that must sit exactly under the canvas */}
      <img
        src="/images/isabel-intro-poster.webp"
        alt="Animated Isabel waving and saying hi"
        width={534}
        height={960}
        className={cn(
          'absolute inset-0 size-full object-contain object-bottom transition-opacity duration-200',
          ready ? 'opacity-0' : 'opacity-100'
        )}
      />
      <canvas ref={canvasRef} width={534} height={960} aria-hidden="true" className="absolute inset-0 size-full" />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full opacity-0"
      >
        <source src="/videos/isabel-intro.mp4" type="video/mp4" />
        <source src="/videos/isabel-intro.webm" type="video/webm" />
      </video>
    </div>
  );
}
