import { UserInfoCourse } from '../models/User/IUserInfo'

export const checkIsAddCourse = (courses: UserInfoCourse, courseId: string) => {
	let isAdd: boolean = false

	courses.buy.map((course) => {
		if (course.courseId === courseId) {
			isAdd = true
		}
	})

	courses.subscribe.map((course) => {
		if (course.courseId === courseId) {
			isAdd = true
		}
	})

	return isAdd
}