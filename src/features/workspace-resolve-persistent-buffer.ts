/** resolve the persistent buffer from a numeric series. */
export function resolveWorkspacePersistentBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
