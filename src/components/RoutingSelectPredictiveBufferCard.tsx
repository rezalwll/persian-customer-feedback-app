import React from 'react';
import { selectRoutingPredictiveBuffer } from '../features/routing-select-predictive-buffer';

type RoutingSelectPredictiveBufferCardProps = { values: readonly number[]; label?: string };
export function RoutingSelectPredictiveBufferCard({ values, label = 'buffer' }: RoutingSelectPredictiveBufferCardProps) {
  const value = selectRoutingPredictiveBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
