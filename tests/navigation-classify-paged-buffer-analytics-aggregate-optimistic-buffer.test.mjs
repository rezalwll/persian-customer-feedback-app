import assert from 'node:assert/strict';
import { aggregateAnalyticsOptimisticBuffer } from '../dist/features/analytics-aggregate-optimistic-buffer.js';
export default function () { assert.equal(aggregateAnalyticsOptimisticBuffer([2, 4, 6, 8]), 6); }
