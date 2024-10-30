import React from 'react';
import { calculateInitialTotal } from '../features/initial-total';

type MetricCardProps = { label: string; values: readonly number[] };
export function MetricCard({ label, values }: MetricCardProps) {
  const metricId = `metric-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  return <section aria-labelledby={metricId}><h2 id={metricId}>{label}</h2><output aria-label={`${label} total`}>{calculateInitialTotal(values)}</output></section>;
}
