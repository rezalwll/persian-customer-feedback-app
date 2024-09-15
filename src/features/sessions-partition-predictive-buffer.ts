/** partition the predictive buffer from a numeric series. */
export function partitionSessionsPredictiveBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
