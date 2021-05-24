/** resolve the optimistic buffer from a numeric series. */
export function resolveFiltersOptimisticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
