import assert from 'node:assert/strict';
import { deriveSuppliersMemoizedBuffer } from '../dist/features/suppliers-derive-memoized-buffer.js';
export default function () { assert.equal(deriveSuppliersMemoizedBuffer([2, 4, 6, 8]), 6); }
