/** group the optimistic buffer from a numeric series. */
export function groupPricingOptimisticBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
