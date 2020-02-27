import { combineReducers } from 'redux';

import reserve from './reserve/reducer';
import params from './params/reducer';

export default combineReducers({
  reserve,
  params
})