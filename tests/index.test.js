const {
  getActionTypePrefix,
  getStatePropertyFromActionType,
} = require('../src');

const TWO_DASH_ES = 'TWO_DASH_ES';
const ONE_DASH = 'ONE_DASH';
const SINGLE = 'SINGLE';

/**
 * Action type prefix
 */
test('single string no underscore', () => {
  expect(getActionTypePrefix(SINGLE)).toBe(SINGLE);
});

test('single string one underscore', () => {
  expect(getActionTypePrefix(ONE_DASH)).toBe('ONE');
});

test('single string two underscore', () => {
  expect(getActionTypePrefix(TWO_DASH_ES)).toBe('TWO');
});

/**
 * Get state prop
 */
test('single string no underscore', () => {
  expect(getStatePropertyFromActionType(SINGLE)).toBe('');
});

test('single string one underscore', () => {
  expect(getStatePropertyFromActionType(ONE_DASH)).toBe('dash');
});

test('single string two underscore', () => {
  expect(getStatePropertyFromActionType(TWO_DASH_ES)).toBe('dashEs');
});