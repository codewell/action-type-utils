const getActionPrefix = require('../src');

/**
 * 
 */
test('single string no underscore', () => {
  expect(getActionPrefix('prefix')).toBe('prefix');
});

test('single string one underscore', () => {
  expect(getActionPrefix('prefix_something')).toBe('prefix');
});

test('single string two underscore', () => {
  expect(getActionPrefix('prefix_something_something')).toBe('prefix');
});