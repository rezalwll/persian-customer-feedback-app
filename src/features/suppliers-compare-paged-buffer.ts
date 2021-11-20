/** compare the paged buffer from a numeric series. */
export function compareSuppliersPagedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
