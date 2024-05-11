import assert from 'node:assert/strict';
import { resolveTelemetryOptimisticBuffer } from '../dist/features/telemetry-resolve-optimistic-buffer.js';
export default function () { assert.equal(resolveTelemetryOptimisticBuffer([2, 4, 6, 8]), 5); }
