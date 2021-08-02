import assert from 'node:assert/strict';
import { selectForecastingMemoizedBuffer } from '../dist/features/forecasting-select-memoized-buffer.js';
export default function () { assert.equal(selectForecastingMemoizedBuffer([2, 4, 6, 8]), 6); }
