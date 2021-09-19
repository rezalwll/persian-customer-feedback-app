import assert from 'node:assert/strict';
import { formatCatalogOptimisticBuffer } from '../dist/features/catalog-format-optimistic-buffer.js';
export default function () { assert.equal(formatCatalogOptimisticBuffer([2, 4, 6, 8]), 20); }
