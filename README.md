# @codewell/action-type-utils

## Installation
```
npm install @codewell/action-type-utils
```

## Basic usage
```JavaScript
import { getActionTypePrefix } from '@codewell/action-type-utils';

getActionTypePrefix('SET_STATE_PROPERTY');
// => 'SET'
```

```JavaScript
import { getStatePropertyFromActionType } from '@codewell/action-type-utils';

getStatePropertyFromActionType('SOME_STATE_PROPERTY');
// => 'stateProperty'
```