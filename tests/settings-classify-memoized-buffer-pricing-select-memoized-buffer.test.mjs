import assert from 'node:assert/strict';
import { selectPricingMemoizedBuffer } from '../dist/features/pricing-select-memoized-buffer.js';
export default function () { assert.equal(selectPricingMemoizedBuffer([2, 4, 6, 8]), 60); }
