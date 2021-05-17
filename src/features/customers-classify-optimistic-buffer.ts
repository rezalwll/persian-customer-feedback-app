/** classify the optimistic buffer from a numeric series. */
export function classifyCustomersOptimisticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
