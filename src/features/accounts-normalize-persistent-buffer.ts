/** normalize the persistent buffer from a numeric series. */
export function normalizeAccountsPersistentBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
