/** measure the paged buffer from a numeric series. */
export function measureTablesPagedBuffer(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
