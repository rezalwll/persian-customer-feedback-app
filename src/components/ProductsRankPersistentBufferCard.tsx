import React from 'react';
import { rankProductsPersistentBuffer } from '../features/products-rank-persistent-buffer';

type ProductsRankPersistentBufferCardProps = { values: readonly number[]; label?: string };
export function ProductsRankPersistentBufferCard({ values, label = 'buffer' }: ProductsRankPersistentBufferCardProps) {
  const value = rankProductsPersistentBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
