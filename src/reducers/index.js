import { combineReducers } from 'redux';
import banksReducers from './reducer-banks';
import banksReducers2 from './reducer-banks2';
import banksActiveReducers from './reducer-activebanck'; 


const rootReducer = combineReducers ({
  banks : banksReducers,
  banks2 : banksReducers2,
  activebank : banksActiveReducers
  
});

export default rootReducer;