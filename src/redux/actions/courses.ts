import { Dispatch } from "redux";

import $api from "../../http/";

import {
	CoursesStateFilters,
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";

import { CourseGood } from "../../models/Course/ICourseGood";
import { UserInfoState } from "../../models/User/IUserInfo";

export const fetchCourses = (
	params?: {
		page?: number;
		limit?: number;
		categories?: string[];
		masters?: string[];
		q: string[];
	}
) => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		dispatch({
			type: CoursesActionTypes.SET_LOADED_COURSES_FIRST,
			payload: false,
		});

		dispatch({
			type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
			payload: true,
		});

		const { data, headers } = await $api.get<CourseGood[]>("/courses", {
			params,
		});

		dispatch({
			type: CoursesActionTypes.SET_COURSES,
			payload: {
				courses: data,
				totalCount: headers["x-total-count"]
			},
		});

		dispatch({
			type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
			payload: false,
		});
	};
};

export const fetchAddPaginationCourses = (
	params?: {
		page?: number;
		limit?: number;
		categories?: string[];
		masters?: string[];
		q: string[];
	}
) => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		dispatch({
			type: CoursesActionTypes.SET_LOADED_COURSES,
			payload: false,
		});

		dispatch({
			type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
			payload: true,
		});

		const { data } = await $api.get<CourseGood[]>("/courses", {
			params,
		});

		dispatch({
			type: CoursesActionTypes.SET_ADD_PAGINATION_COURSES,
			payload: data,
		});

		dispatch({
			type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
			payload: false,
		});
	};
};

export const fetchCoursesSection = (
	excludeCoursesId: string[]
) => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		const { data } = await $api.get<CourseGood[]>(`/courses`);

		const newCourses = data

		newCourses.map((course, index) => {
			excludeCoursesId.map((courseId) => {
				if (course._id === courseId) {
					newCourses.splice(index, 1)
				}
			})
		})

		dispatch({
			type: CoursesActionTypes.SET_COURSES_SECTION,
			payload: newCourses,
		});
	};
};

export const fetchCourseByUrl = (url: string) => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		dispatch({
			type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
			payload: false,
		});

		try {
			const response = await $api.get<CourseGood[]>("/courses", {
				params: { url },
			});

			if (response.data[0]) {
				dispatch({
					type: CoursesActionTypes.SET_COURSE_BY_URL,
					payload: response.data[0],
				});
			} else {
				throw new Error();
			}
		} catch (e) {
			dispatch({
				type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
				payload: true,
			});
		}
	};
};

export const fetchCourseById = (id: string) => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		dispatch({
			type: CoursesActionTypes.SET_LOADED_COURSE_BY_ID,
			payload: false,
		});

		try {
			const { data } = await $api.get<CourseGood>(`/courses/${id}`);

			dispatch({
				type: CoursesActionTypes.SET_COURSE_BY_ID,
				payload: data,
			});
		} catch (e) {
			dispatch({
				type: CoursesActionTypes.SET_LOADED_COURSE_BY_ID,
				payload: true,
			});
		}
	};
};

export const setCoursesFilters = (filters: CoursesStateFilters) => ({
	type: CoursesActionTypes.SET_COURSES_FILTERS,
	payload: filters,
});

export const setCoursesFiltersCategories = (category: string) => ({
	type: CoursesActionTypes.SET_COURSES_FILTERS_CATEGORIES,
	payload: category,
});

export const setCoursesFiltersSearch = (q: string) => ({
	type: CoursesActionTypes.SET_COURSES_FILTERS_SEARCH,
	payload: q,
});

export const setCoursesFiltersMasters = (masterId: string) => ({
	type: CoursesActionTypes.SET_COURSES_FILTERS_MASTERS,
	payload: masterId,
});

export const setLoadedCourseByUrl = (status: boolean) => ({
	type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
	payload: status,
});
