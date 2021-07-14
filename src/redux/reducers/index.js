import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import courses from './courses';
import cart from './cart';
import statistics from './statistics';
import posts from './posts';
import categories from './categories';
import masters from './masters';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
	courses,
	cart,
	statistics,
	posts,
	categories,
	masters,
	register,
	login,
	form: formReducer
});

export default rootReducer;