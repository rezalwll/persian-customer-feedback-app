import assert from 'node:assert/strict';
import { reduceProductsOptimisticBuffer } from '../dist/features/products-reduce-optimistic-buffer.js';
export default function () { assert.equal(reduceProductsOptimisticBuffer([2, 4, 6, 8]), 20); }
