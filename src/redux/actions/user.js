import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const fetchUserInfo = () => (dispatch) => {
	$api.get("/my/info").then(({ data }) => {
		dispatch(setUserInfo(data))
	})
}

export const fetchUserCourses = () => (dispatch) => {
	$api.get("/my/courses").then(({ data }) => {
		dispatch(setUserCourses(data))
	})
}

export const fetchUserReferrals = () => (dispatch) => {
	$api.get("/my/referrals").then(({ data }) => {
		dispatch(setUserReferrals(data))
	})
}

export const fetchUserMasterCourses = () => (dispatch) => {
	$api.get("/my/master-courses").then(({ data }) => {
		dispatch(setUserMasterCourses(data))
	})
}

export const fetchUpdateUser = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_USER_INFO",
		payload: true
	})

	$api.put("/my/info", data).then(({ data }) => {
		dispatch({
			type: "SET_SEND_UPDATE_USER_INFO",
			payload: false
		})

		dispatch(setUserInfo(data))
	})
}

export const fetchUpdateUserPassword = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_USER_PASSWORD",
		payload: true
	})

	return $api.put("/my/password", data).then(() => {
		window.location.reload()
	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_UPDATE_USER_PASSWORD",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}

export const addUserCourse = (courseId, redirect) => () => {
	$api.put("/my/courses", { courseId }).then(() => {
		if (redirect) {
			window.location.href = redirect
		} else {
			window.location.href = "/go/training"
		}
	})
}

export const hiddenUserCourse = (courseId) => (dispatch) => {
	$api.delete(`/my/courses/${courseId}`).then(() => {
		window.location.href = "/go/training"
	})
}

export const updateCountViewingDuration = (courseId, lessonIndex, seconds) => (dispatch) => {
	$api.put("/my/courses/lesson/duration", { courseId, lessonIndex, seconds })
}

const setUserInfo = (info) => ({
	type: "SET_USER_INFO",
	payload: info
})

const setUserCourses = (courses) => ({
	type: "SET_USER_COURSES",
	payload: courses
})

const setUserReferrals = (referrals) => ({
	type: "SET_USER_REFERRALS",
	payload: referrals
})

const setUserMasterCourses = (courses) => ({
	type: "SET_USER_MASTER_COURSES",
	payload: courses
})
