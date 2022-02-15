/** summarize the persistent buffer from a numeric series. */
export function summarizeOrdersPersistentBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
