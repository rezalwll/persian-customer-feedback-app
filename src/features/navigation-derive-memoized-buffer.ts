/** derive the memoized buffer from a numeric series. */
export function deriveNavigationMemoizedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
