const snakeCaseToCamelCase = require('@codewell/snake-case-to-camel-case');

/**
 * Gets a state property from an action string
 * @param {string} actionType - 'SET_STATE_PROPERTY'
 * @returns {string} - 'stateProperty'
 */
const getStatePropertyFromActionType = actionType => snakeCaseToCamelCase(
  actionType
    .split('_')
    .slice(1)
    .join('_')
);

module.exports = getStatePropertyFromActionType;
