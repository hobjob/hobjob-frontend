import { combineReducers } from 'redux';

import courses from './courses';
import cart from './cart';
import statistics from './statistics';
import magazine from './magazine';
import categories from './categories';

const rootReducer = combineReducers({
	courses,
	cart,
	statistics,
	magazine,
	categories
});

export default rootReducer;