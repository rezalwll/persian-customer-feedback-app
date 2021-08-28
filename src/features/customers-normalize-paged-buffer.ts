/** normalize the paged buffer from a numeric series. */
export function normalizeCustomersPagedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
