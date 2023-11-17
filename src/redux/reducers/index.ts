import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import courses from './courses';
import coursePage from './coursePage';
import posts from './posts';
import categories from './categories';
import masters from './masters';
import register from './register';
import login from './login';
import passwordRecovery from './passwordRecovery';
import user from './user';
import passing from './passing';
import videoPlayer from './videoPlayer';
import cabinetSubscribeDisable from './cabinetSubscribeDisable';
import paymentSubscribe from './payment/paymentSubscribe';
import paymentCourse from './payment/paymentCourse';

export const rootReducer = combineReducers({
	courses,
	coursePage,
	posts,
	categories,
	masters,
	register,
	login,
	passwordRecovery,
	user,
	passing,
	videoPlayer,
	cabinetSubscribeDisable,
	paymentSubscribe,
	paymentCourse,
	form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>