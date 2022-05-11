import React from 'react';
import { selectShipmentsPersistentBuffer } from '../features/shipments-select-persistent-buffer';

type ShipmentsSelectPersistentBufferCardProps = { values: readonly number[]; label?: string };
export function ShipmentsSelectPersistentBufferCard({ values, label = 'buffer' }: ShipmentsSelectPersistentBufferCardProps) {
  const value = selectShipmentsPersistentBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
