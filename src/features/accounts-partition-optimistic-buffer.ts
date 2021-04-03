/** partition the optimistic buffer from a numeric series. */
export function partitionAccountsOptimisticBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
