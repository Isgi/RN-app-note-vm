import { combineReducers } from 'redux';

import Navigation from './Navigation';
import Vm from './Vm';
const AppReducer = combineReducers({
  nav: Navigation,
  vm: Vm
});

export default AppReducer;
