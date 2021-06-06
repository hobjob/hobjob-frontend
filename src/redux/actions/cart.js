export const addCourseCart = (item) => ({
	type: "ADD_COURSE_CART",
	payload: item
})

export const removeCourseCart = (id) => ({
	type: "REMOVE_COURSE_CART",
	payload: id
})