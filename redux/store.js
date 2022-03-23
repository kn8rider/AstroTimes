import DetailReducer from './DetailsPage/DetailReducer';
import CounterReducer from './CounterExmple/CounterReducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  DetailReducer: DetailReducer,
  CounterReducer: CounterReducer,
});
export const store = createStore(rootReducer);
