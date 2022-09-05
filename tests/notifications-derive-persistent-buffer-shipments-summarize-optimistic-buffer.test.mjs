import assert from 'node:assert/strict';
import { summarizeShipmentsOptimisticBuffer } from '../dist/features/shipments-summarize-optimistic-buffer.js';
export default function () { assert.equal(summarizeShipmentsOptimisticBuffer([2, 4, 6, 8]), 4); }
