import $api from '../../http/';

import { saveAs } from "file-saver";

export const fetchPassingCourseLessonVideo = (courseId, lessonNum) => (dispatch) => {
	dispatch(setVideoUrlCourseLesson(""))

	dispatch({
		type: "SET_PERCENT_LOADED_VIDEO_COURSE_LESSON",
		payload: 0
	})

	$api.get(`/courses/${courseId}/video/${lessonNum}`, {
		responseType: "blob",
		onDownloadProgress: function (progressEvent) {
			let percentLoading = Math.round((progressEvent.loaded * 100) / progressEvent.total);

			dispatch({
				type: "SET_PERCENT_LOADED_VIDEO_COURSE_LESSON",
				payload: percentLoading
			})
		}
	}).then((response) => {
		let myUrl = window.URL.createObjectURL(response.data);

		dispatch(setVideoUrlCourseLesson(myUrl))
	});
}

export const fetchPassingCourseLessonMaterial = (courseId, lessonNum, materialNum, title) => (dispatch) => {
	dispatch({
		type: "PUSH_STATE_MATERIALS_DOWNLOADING",
		payload: {
			state: true,
			materialNum: parseFloat(materialNum - 1)
		}
	})

	$api.get(`/courses/${courseId}/materials/${lessonNum}/${materialNum}`, {
		responseType: "blob",
	}).then((response) => {
		let myUrl = window.URL.createObjectURL(response.data);

		saveAs(myUrl, title)

		dispatch({
			type: "DELETE_STATE_MATERIALS_DOWNLOADING",
			payload: parseFloat(materialNum - 1)
		})
	});
}

export const fetchCompletePassingCourseLesson = (courseId, lessonNum) => (dispatch) => {
	$api.get(`/complete/${courseId}/${lessonNum}`).then(() => {
		return true
	});
}

const setVideoUrlCourseLesson = (url) => ({
	type: "SET_VIDEO_URL_COURSE_LESSON",
	payload: url
})