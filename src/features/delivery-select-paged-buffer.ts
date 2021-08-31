/** select the paged buffer from a numeric series. */
export function selectDeliveryPagedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
