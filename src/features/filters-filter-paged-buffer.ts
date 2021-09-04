/** filter the paged buffer from a numeric series. */
export function filterFiltersPagedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
