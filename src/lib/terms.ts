/** Termíny kurzů: jen budoucí, seřazené od nejbližšího, s českým formátem data. */
export interface Term {
  date: Date;
  end?: Date;
  time?: string;
  city: string;
  venue?: string;
  status: 'volno' | 'posledni' | 'obsazeno';
}

export function upcoming(terms: Term[]): Term[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return terms.filter((t) => (t.end ?? t.date) >= today).sort((a, b) => +a.date - +b.date);
}

const d = (x: Date) => `${x.getDate()}. ${x.getMonth() + 1}.`;

export function termDate(t: Term): string {
  if (t.end && +t.end !== +t.date) return `${d(t.date)} – ${d(t.end)} ${t.end.getFullYear()}`;
  return `${d(t.date)} ${t.date.getFullYear()}`;
}

const days = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
export const weekday = (t: Term) => days[t.date.getDay()];

/** Text termínu do objednávky a jako hodnota ve výběru. */
export const termLabel = (t: Term) => `${termDate(t)}${t.time ? `, ${t.time}` : ''} – ${t.city}`;

export const statusLabel: Record<Term['status'], string> = { volno: 'Volná místa', posledni: 'Poslední místa', obsazeno: 'Obsazeno' };
