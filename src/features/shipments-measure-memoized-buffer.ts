/** measure the memoized buffer from a numeric series. */
export function measureShipmentsMemoizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
