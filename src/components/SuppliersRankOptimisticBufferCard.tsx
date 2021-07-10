import React from 'react';
import { rankSuppliersOptimisticBuffer } from '../features/suppliers-rank-optimistic-buffer';

type SuppliersRankOptimisticBufferCardProps = { values: readonly number[]; label?: string };
export function SuppliersRankOptimisticBufferCard({ values, label = 'buffer' }: SuppliersRankOptimisticBufferCardProps) {
  const value = rankSuppliersOptimisticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
