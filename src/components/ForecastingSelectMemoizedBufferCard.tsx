import React from 'react';
import { selectForecastingMemoizedBuffer } from '../features/forecasting-select-memoized-buffer';

type ForecastingSelectMemoizedBufferCardProps = { values: readonly number[]; label?: string };
export function ForecastingSelectMemoizedBufferCard({ values, label = 'buffer' }: ForecastingSelectMemoizedBufferCardProps) {
  const value = selectForecastingMemoizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
