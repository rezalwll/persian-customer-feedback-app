/** partition the predictive buffer from a numeric series. */
export function partitionFormsPredictiveBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
