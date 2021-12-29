/** group the persistent buffer from a numeric series. */
export function groupDeliveryPersistentBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
