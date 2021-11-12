import $api from '../../http/';

export const assingTestingCourse = (id, user) => () => {
	const { courses } = user

	let userCoursesArr = Object.keys(courses).map((key) => courses[key].courseId);

	let newOrder = "";

	if (courses.length) {
		if (userCoursesArr.indexOf(id) == -1) {
			newOrder = id
		}
	} else {
		newOrder = id
	}

	if (newOrder === "") {
		window.location.href = "/go/training/"
	} else {
		$api.post(`/testing/course`, { courseId: id }).then(() => {
			window.location.href = `/go/training`
		})
	}
}

export const fetchNullifySaleCourse = (id) => () => {
	$api.post(`/testing/nullify-sale`, { courseId: id }).then(() => {
		window.location.reload()
	})
}