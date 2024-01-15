/** schedule the predictive buffer from a numeric series. */
export function scheduleDeliveryPredictiveBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
