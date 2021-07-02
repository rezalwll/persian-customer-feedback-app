/** summarize the optimistic buffer from a numeric series. */
export function summarizeShipmentsOptimisticBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
