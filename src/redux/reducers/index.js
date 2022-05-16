import { combineReducers } from 'redux';
import tasksReducer from './tasks';

const allReducers = combineReducers({
    tasksReducer,
});

export default allReducers;
