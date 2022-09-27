/** select the persistent buffer from a numeric series. */
export function selectReturnsPersistentBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
