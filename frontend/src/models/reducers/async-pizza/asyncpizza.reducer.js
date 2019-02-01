import { initialAsyncPizzaState as initial } from './async-pizza.state';

export function asyncPizzaReducer(state = initial, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
}
