import {createStore, combineReducers} from 'redux';
import dataReducer from './reducer';
const rootReducer = combineReducers({data: dataReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
