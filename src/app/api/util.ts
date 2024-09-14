export function getDateAfterSec(sec: number): Date {
  return new Date(new Date().getTime() + sec * 1000);
}
