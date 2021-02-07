/** reduce the memoized buffer from a numeric series. */
export function reduceSessionsMemoizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
