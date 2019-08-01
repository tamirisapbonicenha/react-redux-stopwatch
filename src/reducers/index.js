import { timer } from './timer';
// import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
	timer: timer,
	//   otherState: otherReducer
});