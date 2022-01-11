import React from 'react';
import { measureFulfillmentPersistentBuffer } from '../features/fulfillment-measure-persistent-buffer';

type FulfillmentMeasurePersistentBufferCardProps = { values: readonly number[]; label?: string };
export function FulfillmentMeasurePersistentBufferCard({ values, label = 'buffer' }: FulfillmentMeasurePersistentBufferCardProps) {
  const value = measureFulfillmentPersistentBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
