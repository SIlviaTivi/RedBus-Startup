import { combineReducers } from 'redux';
import banksReducers from './reducer-banks';
import banksActiveReducers from './reducer-activebanck'; 


const rootReducer = combineReducers ({
  banks : banksReducers,
  activebank : banksActiveReducers
  
});

export default rootReducer;