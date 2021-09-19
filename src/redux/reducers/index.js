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
import password_recovery from './password_recovery';
import repeat_email from './repeat_email';
import user from './user';
import passing from './passing';
import payment from './payment';
import payment_output from './payment_output';

const rootReducer = combineReducers({
	courses,
	cart,
	statistics,
	posts,
	categories,
	masters,
	register,
	login,
	password_recovery,
	repeat_email,
	user,
	passing,
	payment,
	payment_output,
	form: formReducer
});

export default rootReducer;