import $api from '../../http/';

import { saveAs } from "file-saver";

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

export const fetchPassingCourseLessonVideo = (courseId, lessonNum) => (dispatch) => {
	$api.get(`/courses/${courseId}/video/${lessonNum}`, {
		responseType: 'blob'
	}).then((response) => {
		let myUrl = (window.URL || window.webkitURL).createObjectURL(response.data); // response.data.data

		var myVid = document.getElementById('vidObj');
		myVid.setAttribute("src", myUrl);
		myVid.play(); //# test playback

		// dispatch(setVideoUrlCourseLesson(myUrl))
	});
}

export const fetchCertificateCourse = (courseId, title) => (dispatch) => {
	$api.get(`/certificate/${courseId}`).then(({ data }) => {
		saveAs(data.url, title)
	});
}

const setVideoUrlCourseLesson = (url) => ({
	type: "SET_VIDEO_URL_COURSE_LESSON",
	payload: url
})