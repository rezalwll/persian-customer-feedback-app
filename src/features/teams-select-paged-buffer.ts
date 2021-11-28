/** select the paged buffer from a numeric series. */
export function selectTeamsPagedBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
