/** partition the persistent buffer from a numeric series. */
export function partitionSuppliersPersistentBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
