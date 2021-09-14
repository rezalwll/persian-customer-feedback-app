/** reduce the paged buffer from a numeric series. */
export function reduceLayoutPagedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
