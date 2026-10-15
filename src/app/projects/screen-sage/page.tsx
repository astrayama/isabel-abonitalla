import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import OSWindow from '@/components/ui/OSWindow';
import { Eyebrow, HandAccent } from '@/components/ui/SectionHeading';
import type { Tint } from '@/data/profile';
import { cn } from '@/lib/utils';
import {
  CaseStudyFigure,
  CaseStudySection,
  CaseStudySubheading,
  CaseStudyTable,
  CaseStudyWindow,
  FactList,
  Swatch,
} from '@/components/case-study/CaseStudyBlocks';

const LIVE_URL = 'https://screenseiji.vercel.app/';
const IMG = '/images/case-studies/screen-sage';

const description =
  'Screen Sage Studios is a one-person studio that sells tarot readings, ships seven indie apps and takes on client websites. A case study of screenseiji.vercel.app, the front door for all of it.';

export const metadata: Metadata = {
  title: 'Screen Sage Studios · Case Study | Isabel Abonitalla',
  description,
  openGraph: {
    title: 'Screen Sage Studios · Case Study',
    description,
    url: '/projects/screen-sage',
    siteName: 'Isabel Abonitalla Portfolio',
    type: 'article',
    images: [{ url: `${IMG}/01-hero.jpg`, width: 2400, height: 1500, alt: 'Screen Sage Studios case study cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Sage Studios · Case Study',
    description,
    images: [`${IMG}/01-hero.jpg`],
  },
};

const pill = 'inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 font-extrabold whitespace-nowrap no-underline';
const primaryPill = cn(pill, 'bg-ink text-on-ink shadow-accent');
const secondaryPill = cn(pill, 'border-2 border-edge-soft bg-window text-ink transition-colors hover:border-edge');
const textLink =
  'font-extrabold text-[hsl(270,45%,40%)] underline underline-offset-4 hover:text-accent dark:text-[hsl(270,60%,82%)]';

const chips: { label: string; tint: Tint }[] = [
  { label: 'solo founder', tint: 'lilac' },
  { label: 'Next.js on Vercel', tint: 'pink' },
  { label: 'Stripe Checkout', tint: 'blue' },
  { label: 'native booking calendar', tint: 'yellow' },
];

const sections = [
  { id: 'at-a-glance', label: 'glance.txt' },
  { id: 'brief', label: 'brief.txt' },
  { id: 'four-doors', label: 'four-doors/' },
  { id: 'design-system', label: 'design.sys' },
  { id: 'deep-dives', label: 'features/' },
  { id: 'thought-process', label: 'decisions.log' },
  { id: 'under-the-hood', label: 'stack.json' },
  { id: 'outcomes', label: 'next.md' },
];

const dayPalette = [
  { label: 'Plum', color: '#3F2A58' },
  { label: 'Violet', color: '#593D75' },
  { label: 'Lilac', color: '#6A4D86' },
  { label: 'Blush', color: '#F6CDE3' },
  { label: 'Paper', color: '#F8F0F6' },
];

const nightPalette = [
  { label: 'Void', color: '#0D0B13' },
  { label: 'Deep plum', color: '#2A1E3F' },
  { label: 'Lavender glow', color: '#C9A7F0' },
  { label: 'Gilt', color: '#E8C76B' },
];

const facts: [string, ReactNode][] = [
  ['ROLE', 'Founder, product, design, engineering, copy (solo)'],
  [
    'LIVE',
    <a key="live" href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
      screenseiji.vercel.app ↗
    </a>,
  ],
  ['STACK', 'Next.js (App Router) on Vercel, Stripe Checkout, custom booking calendar, email-backed forms, Google Analytics'],
  ['AUDIENCES', 'Viewers (video essays), seekers (apps), clients of readings (tarot), small businesses (websites)'],
  ['PAGES', 'Home, Tarot, Apps, Apps/Arcana, Apps/Anicca, Websites, Side Quests, About, Privacy, Sanctum'],
  ['TYPE', 'Cormorant Garamond, Nunito Sans, Josefin Sans'],
  [
    'PALETTE',
    <span key="palette" className="flex flex-wrap gap-x-4 gap-y-2">
      {dayPalette.map((swatch) => (
        <Swatch key={swatch.color} {...swatch} />
      ))}
    </span>,
  ],
];

const visitorRows = [
  ['A viewer from YouTube or TikTok', 'More of the philosophy and anime essays', 'A subscribe, a podcast link, a mailing list signup'],
  ['A seeker curious about the apps', 'Something to try today', 'A TestFlight or WebXR link, or a waitlist spot'],
  ['Someone who wants a reading', 'A clear price and a way to book', 'A Stripe checkout or a confirmed live slot'],
  ['A small business owner', 'Proof this person can build a site', 'A two-minute project form and a quote in reply'],
];

const doorRows = [
  ['Watch', "The latest from the channel: YouTube embed, Seeker's Soliloquy podcast card, TikTok link", 'none (external)', 'Free, audience building'],
  ['Practice', 'Apps for seekers: four live apps, three in the lab', '/apps, /apps/arcana, /apps/anicca', 'Beta today, App Store and waitlists next'],
  ['Reflect', 'Tarot as a mirror: three price cards and a booking CTA', '/tarot', '$10 to $50 per reading via Stripe'],
  ['Build', 'Websites for small businesses: two portfolio tiles and a project form', '/websites', 'Quoted client work, under $1,000 to $5,000+'],
];

const typeRows = [
  [
    'Cormorant Garamond (500, italic 500)',
    'Headlines, prices, taglines like “You belong here, fellow seeker.”',
    'An old-style serif gives tarot and philosophy their gravity, and the oldstyle numerals make $10 and $25–50 feel hand-lettered',
  ],
  ['Nunito Sans (400 to 700)', 'Body, nav, buttons, forms', 'Rounded terminals keep the serif from feeling austere; very legible at 13 to 17 px'],
  [
    'Josefin Sans (600, 0.3em tracking, caps)',
    'Eyebrows and labels: WATCH, REFLECT, HOW IT WORKS',
    'A geometric label face creates a third voice for wayfinding without adding color',
  ],
];

const decisions = [
  {
    title: 'Sort by intent, not by content type.',
    body: 'An earlier framing of the site led with the philosophy (0 = 1 = ∞) and listed media, tarot, software and gaming as four vehicles for the same idea. That is true, but it makes a first-time visitor read an essay before they find the thing they came for. The live site keeps the philosophy (it is still on the About page, with the three expandable glyphs for Nothingness, the Self and Everything) and moves the verbs to the top. Watch, Practice, Reflect, Build are things a person does, so they self-sort in one glance.',
  },
  {
    title: 'Price everything.',
    body: 'Tarot is a market full of “DM me for rates.” Putting $10, $18 and $25–50 on the page in a 52 px serif was a deliberate trust move, and the same instinct shows up in the project form’s budget dropdown. Nobody has to ask what it costs.',
  },
  {
    title: 'Build the booking flow instead of embedding one.',
    body: 'A Calendly or Acuity embed would have taken an afternoon. Building it took longer but keeps the whole flow inside the brand, lets the owner confirm by email rather than auto-booking, supports a VR format no scheduling tool knows about, and becomes a feature to sell to website clients. The site itself is the demo.',
  },
  {
    title: 'Show status honestly.',
    body: 'Three of the seven apps are “in the lab.” They are listed anyway, with no fake links. The quest log goes further and publishes next milestones and dated logs. For a solo builder, building in public is both marketing and accountability.',
  },
  {
    title: 'One system, two moods.',
    body: 'Rather than a single dark “mystical” theme, the main site is light and soft so that payments and client work feel safe, while app pages like Arcana go dark where the product itself is a night-time ritual. Shared type and spacing keep them related.',
  },
  {
    title: 'Accessibility as a visible feature, not a footnote.',
    body: 'The motion toggle and text sizing live in a button on every page. Focus states are obvious. The Websites page lists accessibility as something every client site includes, so the main site has to prove it.',
  },
  {
    title: 'Trade-offs accepted.',
    body: 'The YouTube section renders a placeholder until the embed loads, which is a small cost for avoiding a heavy third-party script on first paint. Scroll-reveal animation looks lovely but needs the motion toggle to be honest. The hamburger menu on mobile is a full sheet rather than a compact dropdown, trading density for touch targets.',
  },
];

const layerRows = [
  ['Framework and hosting', 'Next.js App Router on Vercel, next/font for self-hosted type, next/image for the mark and card art', '/_next/image and font CSS variable classes on the root element; theme-color meta per route'],
  ['Payments', 'Stripe Checkout links for written and video readings', '“Pay via secure Stripe link” in the tarot flow and FAQ'],
  ['Scheduling', 'Custom booking panel: format, length, day chips, 30-minute slot grid, timezone detection, 24-hour lead time, 3-week window', 'Visible in the Book a live reading modal'],
  ['Forms', 'Contact, mailing list, tarot intake, live booking, project inquiry, all email-backed; honeypot field for spam', '“Website” field hidden in every form'],
  [
    'SEO',
    'Per-route titles and descriptions, canonical URLs, Open Graph and Twitter cards with generated 1200×630 images, Google site verification, robots and googlebot directives, sitemap and structured data promised to clients',
    'Route metadata on /, /tarot, /apps, /websites, /side-quests, /about, /apps/arcana',
  ],
  ['Accessibility', 'Motion toggle, text sizing, visible focus rings, semantic headings, labelled form fields', 'Floating accessibility button on every page'],
  ['Analytics and support', 'Google Analytics, Ko-fi widget, Discord community link', 'Footer and widget overlay'],
  [
    'Content',
    'Quest log and build calendar driven by dated entries per project; app registry shared between home, /apps and Side Quests',
    'The same seven apps appear with consistent names, taglines and status across three surfaces',
  ],
];

export default function ScreenSageCaseStudy() {
  return (
    <main className="relative z-10 min-h-screen w-full pb-12">
      <article className="mx-auto flex w-full max-w-[1008px] flex-col gap-[72px] px-4 pt-6 pb-[72px] sm:px-6 lg:pt-11">
        {/* Header */}
        <header className="flex flex-col gap-7">
          <Link
            href="/#projects"
            className="self-start font-mono text-[13px] tracking-[0.1em] text-muted no-underline hover:text-accent"
          >
            ← back to projects/
          </Link>

          <OSWindow title="screen-sage.case" size="lg">
            <div className="dot-grid flex flex-col gap-5 px-5 py-7 sm:px-9 sm:py-9">
              <p className="m-0 font-mono text-[13px] tracking-[0.3em] text-muted">CASE STUDY · 2026</p>
              <h1 className="m-0 font-mono text-[clamp(38px,5.6vw,72px)] leading-[0.98] font-normal">
                Screen Sage <HandAccent>Studios</HandAccent>
              </h1>
              <p className="m-0 font-mono text-[clamp(20px,2.3vw,28px)] leading-snug text-accent">
                where spirituality, science and story collide.
              </p>
              <p className="m-0 max-w-[62ch] text-lg leading-[1.65] text-ink-soft">
                A one-person studio site that sells readings, ships apps and takes client work from a single pink,
                cloud-soft front door.
              </p>
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="rounded-full border-2 bg-window px-3 py-[5px] text-[13px] font-extrabold"
                    style={{ borderColor: `var(--tint-${chip.tint})` }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={primaryPill}>
                  visit live site ↗
                </a>
                <Link href="/#projects" className={secondaryPill}>
                  all projects
                </Link>
              </div>
            </div>
          </OSWindow>

          <CaseStudyFigure
            src={`${IMG}/01-hero.jpg`}
            file="01-hero.png"
            preload
            alt="Case study cover: the Screen Sage home page in a browser frame, with the flower-of-life hero, the tagline “You belong here, fellow seeker.” and four cards for Watch, Practice, Reflect and Build, beside notes on the stack and the hero concept."
            caption="Screen Sage Studios: where spirituality, science and story collide. One front door for readings, apps and client work."
          />

          <nav aria-label="Case study sections" className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex min-h-10 items-center rounded-full border-2 border-edge-soft bg-window px-3.5 font-mono text-[13px] text-ink no-underline shadow-[0_2px_0_hsla(240,30%,20%,0.12)] transition-colors hover:border-edge"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </header>

        {/* At a glance */}
        <CaseStudySection id="at-a-glance" eyebrow="GLANCE.TXT" title="at a" accent="glance">
          <CaseStudyWindow file="glance.txt">
            <p className="m-0">
              Screen Sage Studios is a one-person studio that sells tarot readings, ships seven indie apps and takes on
              client websites.{' '}
              <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
                screenseiji.vercel.app
              </a>{' '}
              is the front door for all of it: one pink, cloud-soft page that sorts four very different audiences in a
              single glance, then hands each one a real product with a real price.
            </p>
            <p className="m-0">
              The site is also the studio’s own proof of work. The Websites page lists “The site you’re on” as a
              portfolio piece, pointing at the native booking calendar, Stripe checkout and email forms a client could
              buy.
            </p>
          </CaseStudyWindow>
        </CaseStudySection>

        {/* The brief */}
        <CaseStudySection id="brief" eyebrow="BRIEF.TXT" title="the" accent="brief">
          <div className="flex flex-wrap items-start gap-6">
            <div className="min-w-0 flex-[1_1_420px]">
              <CaseStudyWindow file="brief.txt">
                <p className="m-0">
                  One person, four businesses, one URL. Screen Sage grew out of an earlier channel (Omniversal Seeker
                  and the Seeker’s Soliloquy podcast) into a studio with video essays, paid tarot readings, a growing
                  constellation of apps and a web design practice for small businesses. Each of those has a different
                  visitor with a different question.
                </p>
                <p className="m-0">
                  The constraints were the interesting part. No team, so every feature has to be maintainable by one
                  person late at night. No budget for SaaS booking or e-commerce tools, so payments and scheduling had
                  to be built in rather than embedded. And the brand sits at an unusual crossroads (tarot, anime,
                  Buddhism, quantum physics, VR) that could easily read as either too mystical to trust with money or
                  too technical to feel like a sanctuary. The site had to be warm and credible at the same time.
                </p>
              </CaseStudyWindow>
            </div>
            <div className="min-w-0 flex-[1_1_320px]">
              <OSWindow title="studio.ini" variant="pink" bodyClassName="px-5 pt-2 pb-4">
                <FactList facts={facts} />
              </OSWindow>
            </div>
          </div>
        </CaseStudySection>

        {/* Information architecture */}
        <CaseStudySection id="four-doors" eyebrow="INFORMATION ARCHITECTURE" title="four doors, one" accent="visitor">
          <CaseStudyWindow file="four-doors.md">
            <p className="m-0">
              The whole site is organized around four verbs that sit directly under the hero: Watch, Practice, Reflect,
              Build. Each card carries a tiny badge that is really the pricing model (Free, In beta, From $10, For
              business), so a visitor knows what kind of transaction they are walking into before they click.
            </p>
            <CaseStudyTable
              caption="What each kind of visitor arrives wanting and has to leave with"
              headers={['Visitor', 'Arrives wanting', 'Has to leave with']}
              rows={visitorRows}
            />
          </CaseStudyWindow>

          <CaseStudyFigure
            src={`${IMG}/02-four-doors.jpg`}
            file="02-four-doors.png"
            alt="Close-up of the four home page cards, Watch (free), Practice (in beta), Reflect (from $10) and Build (for business), with a note under each on its audience and business model."
            caption="Four doors, one visitor. Watch, Practice, Reflect, Build, each badged with its pricing model."
          />

          <CaseStudyWindow file="doors.md">
            <CaseStudyTable
              caption="The four doors: home section, dedicated page and business model"
              headers={['Door', 'Section on home', 'Dedicated page', 'Business model']}
              rows={doorRows}
            />
            <p className="m-0">
              Below the four doors, the home page keeps a strict rhythm: Watch, Practice, Reflect, Build, Meet Isa,
              mailing list, contact, footer. Every section uses the same pattern (tracked-caps eyebrow, Cormorant
              headline, one sentence, cards, one primary and one secondary action), so the page reads as one voice even
              though it is selling four things.
            </p>
            <p className="m-0">
              Two supporting surfaces sit off the main path. Side Quests is a public quest log for work in progress,
              which doubles as the “now building” teaser on the home page. The Sanctum is a key-gated door in the footer
              for developer links and private resources, a small wink that fits the brand without cluttering navigation.
            </p>
          </CaseStudyWindow>
        </CaseStudySection>

        {/* Design system */}
        <CaseStudySection id="design-system" eyebrow="DESIGN SYSTEM" title="one system, two" accent="moods">
          <CaseStudyWindow file="design.sys">
            <p className="m-0">
              The visual language is a sanctuary first and a storefront second. A blush-to-lilac gradient, a faint
              flower-of-life lattice behind the hero, floating hearts, sparkles and soft cloud banks at the bottom of
              each page all say “you can rest here.” The dark plum buttons and crisp white cards say “and this is a real
              business.”
            </p>

            <CaseStudySubheading>Typography</CaseStudySubheading>
            <CaseStudyTable caption="Typefaces, where they are used and why" headers={['Face', 'Used for', 'Why']} rows={typeRows} />

            <CaseStudySubheading>Color</CaseStudySubheading>
            <p className="m-0">
              The day palette runs from Plum #3F2A58 (text, primary buttons) through Violet #593D75 and Lilac #6A4D86
              (secondary text, eyebrows) to Blush pink #F6CDE3 and Paper #F8F0F6 (backgrounds). Cards are near-white at
              95 percent opacity with a 1 px white border and 22 px radius, so they float over the gradient instead of
              cutting it.
            </p>
            <p className="m-0">
              App sub-brands flip to a night palette. The Arcana page at /apps/arcana uses a void of #0D0B13, a
              starfield, deep plum glows, lavender text and gilt accents, with Rider-Waite-Smith card art. The two moods
              share the same type stack and spacing, which is what keeps them reading as one studio.
            </p>
            <div className="grid grid-cols-1 gap-5 rounded-xl border-2 border-window-line bg-window-alt p-5 text-sm font-extrabold sm:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                <p className="m-0 font-mono text-xs font-normal tracking-[0.1em] text-muted">DAY PALETTE</p>
                {dayPalette.map((swatch) => (
                  <Swatch key={swatch.color} {...swatch} />
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="m-0 font-mono text-xs font-normal tracking-[0.1em] text-muted">NIGHT PALETTE · ARCANA</p>
                {nightPalette.map((swatch) => (
                  <Swatch key={swatch.color} {...swatch} />
                ))}
              </div>
            </div>

            <CaseStudySubheading>Motion and sections</CaseStudySubheading>
            <p className="m-0">
              Sections fade and lift into view on scroll. A persistent accessibility button lets any visitor switch
              motion off and step text size up or down, and every control carries a visible focus ring (the double ring
              on “Book a live reading” in the screenshots is the real keyboard focus state).
            </p>

            <CaseStudySubheading>Components</CaseStudySubheading>
            <p className="m-0">
              Pill buttons (dark fill for primary, 1.5 px outline for secondary), status pills (In beta, From $10,
              WebXR), eyebrow labels, numbered “How it works” steps, pricing cards with a check-list, and a single modal
              shell used for both booking and the project form.
            </p>
          </CaseStudyWindow>

          <CaseStudyFigure
            src={`${IMG}/08-design-system.jpg`}
            file="08-design-system.png"
            alt="Design system board: Cormorant Garamond, Nunito Sans and Josefin Sans specimens, day and night color palettes with hex codes, button and pill components, the dark Arcana page and the accessibility panel."
            caption="One system, two moods: type, day and night palettes, components, accessibility panel."
          />
          <CaseStudyFigure
            src={`${IMG}/07-mobile.jpg`}
            file="07-mobile.png"
            alt="Three phone screens: the home hero with the four doors in a 2×2 grid, stacked tarot pricing cards, and the open menu sheet over the Arcana app card."
            caption="Mobile-first: the 2×2 hero grid, stacked pricing cards and the menu sheet."
          />
        </CaseStudySection>

        {/* Feature deep dives */}
        <CaseStudySection id="deep-dives" eyebrow="FEATURE DEEP DIVES" title="built, not bolted" accent="on">
          <CaseStudyWindow file="tarot.md">
            <CaseStudySubheading>Tarot commerce and the native booking calendar</CaseStudySubheading>
            <p className="m-0">
              The tarot page turns a fuzzy service into three products. Written reading, $10 per spread of 3 to 7
              cards, delivered within 48 hours. Recorded video reading, $18, about five minutes of video, same
              turnaround. Live reading, $25 for 15 minutes, $35 for 30, $50 for 45 or more, by voice call, video call or
              VR.
            </p>
            <p className="m-0">
              Async orders open an intake form (name, email, question, anything Isa should know) and then redirect to
              Stripe Checkout. Live readings open a booking panel built from scratch: pick a format, pick a length, and a
              strip of day chips plus a grid of 30-minute slots appears, rendered in the visitor’s own timezone with the
              zone named on screen. Slots open at least 24 hours ahead and up to three weeks out. The owner confirms each
              request by email, which keeps a human in the loop without a calendar integration to babysit. A hidden
              “Website” field acts as a honeypot against form spam.
            </p>
            <p className="m-0">
              The VR option is not a gimmick. It links the service to Carta Luna, the studio’s own WebXR tarot table, and
              the FAQ on the page explains the difference between a live VR reading with Isa and reading for yourself in
              Carta Luna.
            </p>
          </CaseStudyWindow>

          <CaseStudyFigure
            src={`${IMG}/03-tarot-commerce.jpg`}
            file="03-tarot-commerce.png"
            alt="The tarot page with three pricing cards for written ($10), recorded video ($18) and live ($25–50) readings, next to the open Book a live reading panel."
            caption="Three priced tarot products, with the live booking panel one click away."
          />
          <CaseStudyFigure
            src={`${IMG}/04-booking-flow.jpg`}
            file="04-booking-flow.png"
            alt="The Book a live reading panel: format buttons for voice call, video call and VR, length options priced $25, $35 and $50, day chips, a grid of 30-minute slots in the visitor’s timezone, and name and email fields."
            caption="A native booking calendar: format, length, timezone-aware slots, owner confirmation, honeypot anti-spam."
          />

          <CaseStudyWindow file="apps.md">
            <CaseStudySubheading>The App Universe</CaseStudySubheading>
            <p className="m-0">
              Seven apps, each named for the concept it embodies, each tagged with a real platform and a real stage.
              Yggdrasil (Norse world tree, AI journaling, web, beta with waitlist). Arcana (the mysteries, iOS tarot
              journal, public TestFlight). Carta Luna (card of the moon, mixed-reality tarot, WebXR and Meta Quest).
              Lumenwright (maker of light, hand-tracked VR and AR). Anicca, Kairos and Sunya are marked “in the lab”
              rather than hidden, which sets expectations and still shows range. Arcana gets a full product page with
              App Store style feature sections, support and privacy routes, and its own dark theme.
            </p>
          </CaseStudyWindow>

          <CaseStudyFigure
            src={`${IMG}/05-app-universe.jpg`}
            file="05-app-universe.png"
            alt="The Practice section with four app cards, Yggdrasil, Arcana, Carta Luna and Lumenwright, each with a platform badge and a call to action, above a See all seven apps button."
            caption="Seven tools, one philosophy. Honest platform and stage badges on every app."
          />

          <CaseStudyWindow file="side-quests.md">
            <CaseStudySubheading>Side Quests and the build-log calendar</CaseStudySubheading>
            <p className="m-0">
              A public quest log reframes work in progress as a game. A main quest (Graduation Sprint, target Nov 3,
              2026) sits on top with a countdown and next milestone. Nine quests below filter by Self (2) or Dev (7),
              each framed as a question (“Can willpower be a game mechanic?”), with a dated latest log and a next
              milestone. A Log tab flips the same data into a month calendar where every dated entry becomes a
              colour-coded tile per project, so the owner’s real cadence across seven projects is visible without a
              status meeting.
            </p>
          </CaseStudyWindow>

          <CaseStudyFigure
            src={`${IMG}/06-quest-log.jpg`}
            file="06-quest-log.png"
            alt="Two browser windows of the Side Quests page: quest cards for Lumenwright, Carta Luna, Heed and Arcana with latest logs and next milestones, and the Log tab’s October 2026 calendar filled with colour-coded project tiles."
            caption="The quest log and its build-log calendar: building in public across seven projects."
          />

          <CaseStudyWindow file="websites.md">
            <CaseStudySubheading>The websites studio and project form</CaseStudySubheading>
            <p className="m-0">
              The Build door sells three tiers (landing page, business website, custom features) and a flat promise that
              every site includes mobile-first design, SEO, accessibility, fast hosting, forms that email you and
              analytics. The project form asks for name, email, optional business and current site, then project type,
              budget range (under $1,000 to $5,000+) and timeline from dropdowns, and a free-text brief. Two minutes, no
              commitment, and a quote comes back by email. The FAQ answers price, SEO and redesign questions before they
              are asked.
            </p>

            <CaseStudySubheading>Contact, mailing list and the social graph</CaseStudySubheading>
            <p className="m-0">
              A single contact form with a topic dropdown (general, tarot inquiry, collaboration, client project) routes
              every kind of message through one place. A mailing list block (“Join the journey”) sits between Meet Isa
              and Contact. The footer and the Find Me section link every channel under one handle, @screenseiji, across
              YouTube, TikTok, Instagram, Threads, X, Discord, Spotify, Apple Podcasts, Gumroad and Ko-fi.
            </p>
          </CaseStudyWindow>
        </CaseStudySection>

        {/* Thought process */}
        <CaseStudySection id="thought-process" eyebrow="THOUGHT PROCESS" title="the decisions that" accent="shaped it">
          <CaseStudyWindow file="decisions.log">
            <ol className="m-0 flex list-none flex-col gap-5 p-0">
              {decisions.map((decision, i) => (
                <li
                  key={decision.title}
                  className="flex gap-4 border-b border-dashed border-tint-lilac pb-5 last:border-b-0 last:pb-0"
                >
                  <span aria-hidden="true" className="w-7 flex-none pt-0.5 font-mono text-[15px] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="m-0">
                    <strong className="font-extrabold text-ink">{decision.title}</strong> {decision.body}
                  </p>
                </li>
              ))}
            </ol>
          </CaseStudyWindow>
        </CaseStudySection>

        {/* Under the hood */}
        <CaseStudySection id="under-the-hood" eyebrow="UNDER THE HOOD" title="how it's" accent="built">
          <CaseStudyWindow file="stack.json">
            <CaseStudyTable
              caption="Each layer of the site, what is there and the evidence on the live site"
              headers={['Layer', 'What is there', 'Evidence on the live site']}
              rows={layerRows}
            />
            <p className="m-0">
              A note on the booking logic for anyone implementing something similar: generating slots client-side from a
              fixed availability window and a lead-time rule, then sending a request for the owner to confirm, is far
              simpler than two-way calendar sync and fails gracefully. The cost is one manual confirmation per booking,
              which at this volume is the right trade.
            </p>
          </CaseStudyWindow>
        </CaseStudySection>

        {/* Outcomes */}
        <CaseStudySection id="outcomes" eyebrow="OUTCOMES" title="what's" accent="next">
          <CaseStudyWindow file="next.md">
            <p className="m-0">
              What the site has already done is visible on the site itself. Arcana went to public TestFlight on Oct 6,
              2026 with the App Store launch as the next milestone. Carta Luna shipped a new welcome flow on Oct 11 and is
              gathering first beta feedback. Lumenwright added a mixed-reality room mode on Oct 12. Heed has a first
              standalone build running. The Formless Guide shipped as the first client site. Every one of those is
              logged publicly in Side Quests, which is the point: the site is a working studio, not a brochure.
            </p>
            <p className="m-0">
              Next on the roadmap, as the site states it: Yggdrasil beta opens to the waitlist, Arcana launches on the
              App Store, the Gumroad store adds the Tarot Spread Reference Guide and a wallpaper pack, and the print shop
              reopens.
            </p>
          </CaseStudyWindow>
        </CaseStudySection>

        {/* Footer CTA */}
        <footer className="flex flex-col items-center gap-4 text-center">
          <Eyebrow className="mb-0">END OF FILE</Eyebrow>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className={primaryPill}>
              visit screenseiji.vercel.app ↗
            </a>
            <Link href="/#projects" className={secondaryPill}>
              ← back to projects
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
