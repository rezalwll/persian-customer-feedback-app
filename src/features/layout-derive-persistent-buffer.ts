/** derive the persistent buffer from a numeric series. */
export function deriveLayoutPersistentBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
