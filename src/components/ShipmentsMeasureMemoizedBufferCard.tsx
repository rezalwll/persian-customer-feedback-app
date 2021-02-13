import React from 'react';
import { measureShipmentsMemoizedBuffer } from '../features/shipments-measure-memoized-buffer';

type ShipmentsMeasureMemoizedBufferCardProps = { values: readonly number[]; label?: string };
export function ShipmentsMeasureMemoizedBufferCard({ values, label = 'buffer' }: ShipmentsMeasureMemoizedBufferCardProps) {
  const value = measureShipmentsMemoizedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
