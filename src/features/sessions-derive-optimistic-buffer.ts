/** derive the optimistic buffer from a numeric series. */
export function deriveSessionsOptimisticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
