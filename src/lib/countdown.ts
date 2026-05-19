export type CountdownState =
  | { status: "before"; days: number; hours: number; minutes: number; seconds: number }
  | { status: "expired" };

export function computeCountdown(deadlineISO: string, now = new Date()): CountdownState {
  const deadline = new Date(deadlineISO).getTime();
  const diff = deadline - now.getTime();

  if (diff <= 0) return { status: "expired" };

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  return { status: "before", days, hours, minutes, seconds };
}

export function formatCountdownShort(state: CountdownState): string {
  if (state.status === "expired") return "— ENCERRADAS";
  if (state.days > 0) return `— ${state.days}d ${state.hours}h restantes`;
  return `— ${state.hours}h ${state.minutes}m restantes`;
}
