import { asyncPizzaReducer } from './async-pizza/asyncpizza.reducer';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
  asyncPizzaReducer,
});

export * from './async-pizza/async-pizza.state';
