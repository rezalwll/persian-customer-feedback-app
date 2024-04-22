/** group the predictive buffer from a numeric series. */
export function groupOrdersPredictiveBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
