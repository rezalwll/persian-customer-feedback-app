/** summarize the paged buffer from a numeric series. */
export function summarizeRoutingPagedBuffer(values: readonly number[]): number {
  return new Set(values).size;
}
