import React from 'react';
import { measureRoutingOptimisticBuffer } from '../features/routing-measure-optimistic-buffer';

type RoutingMeasureOptimisticBufferCardProps = { values: readonly number[]; label?: string };
export function RoutingMeasureOptimisticBufferCard({ values, label = 'buffer' }: RoutingMeasureOptimisticBufferCardProps) {
  const value = measureRoutingOptimisticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
