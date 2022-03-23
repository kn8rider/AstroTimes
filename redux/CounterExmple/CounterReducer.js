import {INCREASECOUNTER} from './CounterActionType';
const initialState = {data: 0};

export default CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASECOUNTER:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
