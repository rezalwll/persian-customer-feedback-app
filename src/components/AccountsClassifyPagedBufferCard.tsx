import React from 'react';
import { classifyAccountsPagedBuffer } from '../features/accounts-classify-paged-buffer';

type AccountsClassifyPagedBufferCardProps = { values: readonly number[]; label?: string };
export function AccountsClassifyPagedBufferCard({ values, label = 'buffer' }: AccountsClassifyPagedBufferCardProps) {
  const value = classifyAccountsPagedBuffer(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
