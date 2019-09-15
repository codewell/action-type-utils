/**
 * Get the prefix of an actionType
 * @param {string} actionType - E.g. 'SET_SOME_FIELD'
 * @returns {string} - Prefix: 'SET'
 */
const getActionPrefix = actionType => actionType.split('_')[0];

module.exports = getActionPrefix;
