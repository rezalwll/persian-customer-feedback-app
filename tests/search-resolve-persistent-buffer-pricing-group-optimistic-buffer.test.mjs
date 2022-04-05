import assert from 'node:assert/strict';
import { groupPricingOptimisticBuffer } from '../dist/features/pricing-group-optimistic-buffer.js';
export default function () { assert.equal(groupPricingOptimisticBuffer([2, 4, 6, 8]), 4); }
