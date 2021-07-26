/** select the optimistic buffer from a numeric series. */
export function selectWorkspaceOptimisticBuffer(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
