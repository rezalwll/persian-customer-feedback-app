import assert from 'node:assert/strict';
import { measureShipmentsMemoizedBuffer } from '../dist/features/shipments-measure-memoized-buffer.js';
export default function () { assert.equal(measureShipmentsMemoizedBuffer([2, 4, 6, 8]), 8); }
