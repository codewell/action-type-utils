/**
 * Get the prefix of an actionType
 * @param {string} actionType - E.g. 'SET_SOME_PROPERTY'
 * @returns {string} - Prefix: 'SET'
 */
const getActionTypePrefix = actionType => actionType.split('_')[0];

module.exports = getActionTypePrefix;
