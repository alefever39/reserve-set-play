export function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return previous;
}

export function getNextDay(date = new Date()) {
  const next = new Date(date.getTime());
  next.setDate(date.getDate() + 1);

  return next;
}

export function buildYearMonthDay(date = new Date()) {
  const newDate = new Date(date);
  return `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(newDate.getDate()).padStart(2, "0")}`;
}

export function buildDayOfWeekMonthDay(date = new Date()) {
  return String(date).slice(0, 10);
}
