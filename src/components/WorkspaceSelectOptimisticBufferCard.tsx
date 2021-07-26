import React from 'react';
import { selectWorkspaceOptimisticBuffer } from '../features/workspace-select-optimistic-buffer';

type WorkspaceSelectOptimisticBufferCardProps = { values: readonly number[]; label?: string };
export function WorkspaceSelectOptimisticBufferCard({ values, label = 'buffer' }: WorkspaceSelectOptimisticBufferCardProps) {
  const value = selectWorkspaceOptimisticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
