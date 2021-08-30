export const addCourseCart = (id) => ({
	type: "ADD_COURSE_CART",
	payload: id
})

export const removeCourseCart = (id) => ({
	type: "REMOVE_COURSE_CART",
	payload: id
})