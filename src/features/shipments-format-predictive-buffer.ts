/** format the predictive buffer from a numeric series. */
export function formatShipmentsPredictiveBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
