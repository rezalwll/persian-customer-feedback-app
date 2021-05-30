/** normalize the optimistic buffer from a numeric series. */
export function normalizeFulfillmentOptimisticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
