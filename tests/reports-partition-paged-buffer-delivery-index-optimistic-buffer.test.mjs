import assert from 'node:assert/strict';
import { indexDeliveryOptimisticBuffer } from '../dist/features/delivery-index-optimistic-buffer.js';
export default function () { assert.equal(indexDeliveryOptimisticBuffer([2, 4, 6, 8]), 5); }
