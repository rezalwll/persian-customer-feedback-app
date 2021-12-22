/** select the persistent buffer from a numeric series. */
export function selectAnalyticsPersistentBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
