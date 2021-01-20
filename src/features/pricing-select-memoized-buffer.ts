/** select the memoized buffer from a numeric series. */
export function selectPricingMemoizedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
