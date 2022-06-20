import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import courses from './courses';
import posts from './posts';
import categories from './categories';
import masters from './masters';
import register from './register';
import login from './login';
import password_recovery from './password_recovery';
import user from './user';
// import passing from './passing';
import payment from './payment';

export const rootReducer = combineReducers({
	courses,
	posts,
	categories,
	masters,
	register,
	login,
	password_recovery,
	user,
	// passing,
	payment,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>