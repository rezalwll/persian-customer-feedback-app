import React from 'react';
import { selectTeamsPagedBuffer } from '../features/teams-select-paged-buffer';

type TeamsSelectPagedBufferCardProps = { values: readonly number[]; label?: string };
export function TeamsSelectPagedBufferCard({ values, label = 'buffer' }: TeamsSelectPagedBufferCardProps) {
  const value = selectTeamsPagedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
