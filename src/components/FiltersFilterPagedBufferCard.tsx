import React from 'react';
import { filterFiltersPagedBuffer } from '../features/filters-filter-paged-buffer';

type FiltersFilterPagedBufferCardProps = { values: readonly number[]; label?: string };
export function FiltersFilterPagedBufferCard({ values, label = 'buffer' }: FiltersFilterPagedBufferCardProps) {
  const value = filterFiltersPagedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
