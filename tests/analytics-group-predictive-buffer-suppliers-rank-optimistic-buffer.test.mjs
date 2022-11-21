import assert from 'node:assert/strict';
import { rankSuppliersOptimisticBuffer } from '../dist/features/suppliers-rank-optimistic-buffer.js';
export default function () { assert.equal(rankSuppliersOptimisticBuffer([2, 4, 6, 8]), 20); }
