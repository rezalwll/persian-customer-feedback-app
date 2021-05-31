import React from 'react';
import { filterLayoutOptimisticBuffer } from '../features/layout-filter-optimistic-buffer';

type LayoutFilterOptimisticBufferCardProps = { values: readonly number[]; label?: string };
export function LayoutFilterOptimisticBufferCard({ values, label = 'buffer' }: LayoutFilterOptimisticBufferCardProps) {
  const value = filterLayoutOptimisticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
