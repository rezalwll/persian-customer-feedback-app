/** reduce the predictive buffer from a numeric series. */
export function reduceCatalogPredictiveBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
