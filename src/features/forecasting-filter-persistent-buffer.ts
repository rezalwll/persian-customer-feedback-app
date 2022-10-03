/** filter the persistent buffer from a numeric series. */
export function filterForecastingPersistentBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
