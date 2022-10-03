import React from 'react';
import { filterForecastingPersistentBuffer } from '../features/forecasting-filter-persistent-buffer';

type ForecastingFilterPersistentBufferCardProps = { values: readonly number[]; label?: string };
export function ForecastingFilterPersistentBufferCard({ values, label = 'buffer' }: ForecastingFilterPersistentBufferCardProps) {
  const value = filterForecastingPersistentBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
