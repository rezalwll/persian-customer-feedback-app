import React from 'react';
import { classifyPermissionsPagedBuffer } from '../features/permissions-classify-paged-buffer';

type PermissionsClassifyPagedBufferCardProps = { values: readonly number[]; label?: string };
export function PermissionsClassifyPagedBufferCard({ values, label = 'buffer' }: PermissionsClassifyPagedBufferCardProps) {
  const value = classifyPermissionsPagedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
