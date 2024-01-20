/** derive the predictive buffer from a numeric series. */
export function deriveFiltersPredictiveBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
