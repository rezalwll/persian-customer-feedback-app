/** summarize the predictive buffer from a numeric series. */
export function summarizeFulfillmentPredictiveBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
