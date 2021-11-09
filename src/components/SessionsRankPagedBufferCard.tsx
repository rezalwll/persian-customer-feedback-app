import React from 'react';
import { rankSessionsPagedBuffer } from '../features/sessions-rank-paged-buffer';

type SessionsRankPagedBufferCardProps = { values: readonly number[]; label?: string };
export function SessionsRankPagedBufferCard({ values, label = 'buffer' }: SessionsRankPagedBufferCardProps) {
  const value = rankSessionsPagedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
