import React from 'react';
import { measureCustomersPredictiveBuffer } from '../features/customers-measure-predictive-buffer';

type CustomersMeasurePredictiveBufferCardProps = { values: readonly number[]; label?: string };
export function CustomersMeasurePredictiveBufferCard({ values, label = 'buffer' }: CustomersMeasurePredictiveBufferCardProps) {
  const value = measureCustomersPredictiveBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
