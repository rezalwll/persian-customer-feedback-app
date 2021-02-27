/** summarize the memoized buffer from a numeric series. */
export function summarizeTeamsMemoizedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
