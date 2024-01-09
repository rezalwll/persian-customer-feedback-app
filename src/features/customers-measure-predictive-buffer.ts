/** measure the predictive buffer from a numeric series. */
export function measureCustomersPredictiveBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
