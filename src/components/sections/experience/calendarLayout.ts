import type { Experience, ExperienceTag } from '@/data/experiences';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

export type Placed = {
  exp: Experience;
  kind: 'rail' | 'card';
  start: number; // month index, see toMonth
  end: number;   // inclusive
  lane: number;
  span: number;  // lanes a card stretches across
};

export type CalendarLayout = {
  firstYear: number; // bottom line of the axis
  topYear: number;   // top line of the axis
  railLanes: number;
  cardLanes: number;
  items: Placed[];   // same order as the data, newest first
};

// Long-running community roles run down the side as rails unless the entry says otherwise; everything else is a card
export const isRailTag = (tag: ExperienceTag) => tag === 'community';

// Months since year 0, so "May 2022" is 2022 * 12 + 4; "Present" is `now`
export function toMonth(label: string, now: number) {
  if (label === 'Present') return now;
  const [month, year] = label.split(' ');
  return Number(year) * 12 + MONTHS.indexOf(month.slice(0, 3).toLowerCase());
}

export function latestDatedMonth(list: Experience[]) {
  const dates = list.flatMap((exp) => [exp.startDate, exp.endDate]).filter((d) => d !== 'Present');
  return Math.max(...dates.map((d) => toMonth(d, 0)));
}

const occupies = (item: Placed, lane: number) => item.lane <= lane && lane < item.lane + item.span;
const overlaps = (a: Placed, b: Placed) => a.start <= b.end && b.start <= a.end;

// Each item takes the first lane that's free for its whole run; returns how many lanes that needed
function assignLanes(items: Placed[]) {
  const laneEnds: number[] = [];
  [...items]
    .sort((a, b) => a.start - b.start || b.end - a.end)
    .forEach((item) => {
      const free = laneEnds.findIndex((end) => end < item.start);
      item.lane = free === -1 ? laneEnds.length : free;
      laneEnds[item.lane] = item.end;
    });
  return laneEnds.length;
}

// Like a calendar app's day view: a card widens into lanes to its right that stay free for its whole run
function widen(cards: Placed[], lanes: number) {
  cards.forEach((card) => {
    while (
      card.lane + card.span < lanes &&
      !cards.some((other) => other !== card && occupies(other, card.lane + card.span) && overlaps(card, other))
    ) {
      card.span++;
    }
  });
}

export function layoutCalendar(list: Experience[], now: number): CalendarLayout {
  const items: Placed[] = list.map((exp) => ({
    exp,
    kind: exp.display ?? (isRailTag(exp.tag) ? 'rail' : 'card'),
    start: toMonth(exp.startDate, now),
    end: toMonth(exp.endDate, now),
    lane: 0,
    span: 1,
  }));
  const rails = items.filter((item) => item.kind === 'rail');
  const cards = items.filter((item) => item.kind === 'card');
  const railLanes = assignLanes(rails);
  const cardLanes = assignLanes(cards);
  widen(cards, cardLanes);

  return {
    firstYear: Math.floor(Math.min(...items.map((item) => item.start)) / 12),
    topYear: Math.floor(Math.max(...items.map((item) => item.end)) / 12) + 1,
    railLanes,
    cardLanes,
    items,
  };
}

// "may 22"
const shortMonth = (month: number) => `${MONTHS[month % 12]} ${String(Math.floor(month / 12)).slice(2)}`;

export function dateRange(item: Placed) {
  const end = item.exp.endDate === 'Present' ? 'now' : shortMonth(item.end);
  return `${shortMonth(item.start)} — ${end}`;
}

// "1 yr 5 mos"
export function lengthLabel(item: Placed) {
  const months = item.end - item.start + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years && `${years} yr${years > 1 ? 's' : ''}`, rest && `${rest} mo${rest > 1 ? 's' : ''}`]
    .filter(Boolean)
    .join(' ');
}
