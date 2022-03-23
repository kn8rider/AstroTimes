import {updateData} from './DetailActionType';

export const updateDataFunction = param => {
  return {
    type: updateData,
    payload: param,
  };
};
