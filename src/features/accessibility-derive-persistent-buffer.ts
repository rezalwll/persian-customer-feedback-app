/** derive the persistent buffer from a numeric series. */
export function deriveAccessibilityPersistentBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
