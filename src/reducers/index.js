//combineReducersがreducerを結合するための関数
import {combineReducers} from 'redux';

import count from './count';
//combineReducersの引数にreducersを噛ませていく
export default combineReducers({count});

