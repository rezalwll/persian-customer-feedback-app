/** classify the persistent buffer from a numeric series. */
export function classifyFormsPersistentBuffer(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
