/** format the paged buffer from a numeric series. */
export function formatWorkspacePagedBuffer(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
