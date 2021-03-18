/** compare the memoized buffer from a numeric series. */
export function comparePermissionsMemoizedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
