import { combineReducers } from 'redux';
import itemsReducer from './reducer';

const rootReducer = combineReducers({
    itemsReducer,
  });
  

  export default rootReducer