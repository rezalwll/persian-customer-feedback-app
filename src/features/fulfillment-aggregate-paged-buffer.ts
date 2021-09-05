/** aggregate the paged buffer from a numeric series. */
export function aggregateFulfillmentPagedBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
