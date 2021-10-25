import assert from 'node:assert/strict';
import { classifyCustomersOptimisticBuffer } from '../dist/features/customers-classify-optimistic-buffer.js';
export default function () { assert.equal(classifyCustomersOptimisticBuffer([2, 4, 6, 8]), 20); }
