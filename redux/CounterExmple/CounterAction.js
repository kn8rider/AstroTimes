import {INCREASECOUNTER} from './CounterActionType';
export const increaseCounter = param => {
  return {
    type: INCREASECOUNTER,
    payload: param,
  };
};
