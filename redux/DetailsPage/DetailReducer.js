import {updateData} from './DetailActionType';
const initialState = {itemArr: []};
export default DetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateData:
      return {
        ...state,
        itemArr: action.payload,
      };
    default: {
      return state;
    }
  }
};
