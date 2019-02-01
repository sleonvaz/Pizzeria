import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import { createStore, applyMiddleware } from 'redux';
import { allReducers } from '@Models';

const logger = createLogger({
  collapsed: false,
});

const allMiddlewares = composeWithDevTools(applyMiddleware(logger));
export const Store = createStore(allReducers, {}, allMiddlewares);
