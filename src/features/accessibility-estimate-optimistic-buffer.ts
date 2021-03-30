/** estimate the optimistic buffer from a numeric series. */
export function estimateAccessibilityOptimisticBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
