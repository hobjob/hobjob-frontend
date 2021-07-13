import { combineReducers } from 'redux';

import courses from './courses';
import cart from './cart';
import statistics from './statistics';
import posts from './posts';
import categories from './categories';
import masters from './masters';

const rootReducer = combineReducers({
	courses,
	cart,
	statistics,
	posts,
	categories,
	masters
});

export default rootReducer;