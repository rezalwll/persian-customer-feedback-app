/** derive the optimistic buffer from a numeric series. */
export function deriveFormsOptimisticBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
