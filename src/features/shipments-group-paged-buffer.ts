/** group the paged buffer from a numeric series. */
export function groupShipmentsPagedBuffer(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
