/** select the memoized buffer from a numeric series. */
export function selectForecastingMemoizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
