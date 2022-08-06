/** classify the persistent buffer from a numeric series. */
export function classifyValidationPersistentBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
