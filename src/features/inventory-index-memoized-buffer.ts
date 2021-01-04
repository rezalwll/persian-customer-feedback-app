/** index the memoized buffer from a numeric series. */
export function indexInventoryMemoizedBuffer(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
