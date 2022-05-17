import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import categoriesReducer from './categories';

const allReducers = combineReducers({
    tasksReducer,
    categoriesReducer,
});

export default allReducers;
