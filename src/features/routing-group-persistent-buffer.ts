/** group the persistent buffer from a numeric series. */
export function groupRoutingPersistentBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
