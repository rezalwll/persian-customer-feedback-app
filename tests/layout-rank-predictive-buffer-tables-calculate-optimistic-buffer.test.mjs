import assert from 'node:assert/strict';
import { calculateTablesOptimisticBuffer } from '../dist/features/tables-calculate-optimistic-buffer.js';
export default function () { assert.equal(calculateTablesOptimisticBuffer([2, 4, 6, 8]), 4); }
