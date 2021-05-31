/** filter the optimistic buffer from a numeric series. */
export function filterLayoutOptimisticBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
