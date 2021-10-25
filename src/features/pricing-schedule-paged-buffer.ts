/** schedule the paged buffer from a numeric series. */
export function schedulePricingPagedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
