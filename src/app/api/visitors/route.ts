import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Simple in-memory fallback for local development if KV is not configured
let localVisitorCount = 0;

const hasKvEnv = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);

export async function GET() {
  try {
    if (!hasKvEnv) {
      return NextResponse.json({ count: localVisitorCount });
    }
    const count = await kv.get('visitor_count');
    return NextResponse.json({ count: count || 0 });
  } catch (error) {
    console.error('Error fetching visitor count from KV:', error);
    return NextResponse.json({ count: localVisitorCount });
  }
}

export async function POST() {
  try {
    if (!hasKvEnv) {
      localVisitorCount += 1;
      return NextResponse.json({ count: localVisitorCount });
    }
    const count = await kv.incr('visitor_count');
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error incrementing visitor count in KV:', error);
    localVisitorCount += 1;
    return NextResponse.json({ count: localVisitorCount });
  }
}
