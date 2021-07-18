/** group the optimistic buffer from a numeric series. */
export function groupTeamsOptimisticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
