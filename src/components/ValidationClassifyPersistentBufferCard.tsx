import React from 'react';
import { classifyValidationPersistentBuffer } from '../features/validation-classify-persistent-buffer';

type ValidationClassifyPersistentBufferCardProps = { values: readonly number[]; label?: string };
export function ValidationClassifyPersistentBufferCard({ values, label = 'buffer' }: ValidationClassifyPersistentBufferCardProps) {
  const value = classifyValidationPersistentBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
