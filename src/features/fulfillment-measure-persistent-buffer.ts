/** measure the persistent buffer from a numeric series. */
export function measureFulfillmentPersistentBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
