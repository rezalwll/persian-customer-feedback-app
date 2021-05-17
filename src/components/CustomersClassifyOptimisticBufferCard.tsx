import React from 'react';
import { classifyCustomersOptimisticBuffer } from '../features/customers-classify-optimistic-buffer';

type CustomersClassifyOptimisticBufferCardProps = { values: readonly number[]; label?: string };
export function CustomersClassifyOptimisticBufferCard({ values, label = 'buffer' }: CustomersClassifyOptimisticBufferCardProps) {
  const value = classifyCustomersOptimisticBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
