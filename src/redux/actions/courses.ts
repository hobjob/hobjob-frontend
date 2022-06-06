import {Dispatch} from "redux";

import $api from "../../http/";

import {CoursesActions, CoursesActionTypes} from "../types/courses/ICourses";

import {CourseGood} from "../../models/ICourseGood";
import {UserInfoState} from "../../models/IUserInfo";

export const fetchCourses = (query?: string, page?: number) => {
    return async (dispatch: Dispatch<CoursesActions>) => {
        dispatch({
            type: CoursesActionTypes.SET_LOADED_COURSES_FIRST,
            payload: false,
        });

        dispatch({
            type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
            payload: true,
        });

        const response = await $api.get<CourseGood[]>(
            `/courses?limit=8${page ? `&page=${page}` : ""}&${
                query !== null ? query : ""
            }`
        );

        dispatch({
            type: CoursesActionTypes.SET_COURSES,
            payload: response,
        });

        dispatch({
            type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
            payload: false,
        });
    };
};

export const fetchAddPaginationCourses = (query?: string, page?: number) => {
    return async (dispatch: Dispatch<CoursesActions>) => {
        dispatch({
            type: CoursesActionTypes.SET_LOADED_COURSES,
            payload: false,
        });

        dispatch({
            type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
            payload: true,
        });

        const response = await $api.get<CourseGood[]>(
            `/courses?limit=8&page=${page}&${query !== null ? query : ""}`
        );

        dispatch({
            type: CoursesActionTypes.SET_ADD_PAGINATION_COURSES,
            payload: response,
        });

        dispatch({
            type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES,
            payload: false,
        });
    };
};

export const fetchCoursesSection = (
    userInfo: UserInfoState | {} | null,
    url: string
) => {
    return async (dispatch: Dispatch<CoursesActions>) => {
        const response = await $api.get<CourseGood[]>(`/courses`);

        dispatch({
            type: CoursesActionTypes.SET_COURSES_SECTION,
            payload: {items: response.data, userInfo, url},
        });
    };
};

export const fetchCourseById = (id: string) => {
    return async (dispatch: Dispatch<CoursesActions>) => {
        dispatch({
            type: CoursesActionTypes.SET_LOADED_COURSE_BY_ID,
            payload: false,
        });

        const response = await $api.get<CourseGood>(`/courses/${id}`);

        dispatch({
            type: CoursesActionTypes.SET_COURSE_BY_ID,
            payload: response.data,
        });
    };
};

export const fetchCourseByUrl = (url: string) => {
    return async (dispatch: Dispatch<CoursesActions>) => {
        dispatch({
            type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
            payload: false,
        });

        const response = await $api.get<CourseGood[]>(`/courses?url=${url}`);

        if (response.data[0]) {
            dispatch({
                type: CoursesActionTypes.SET_COURSE_BY_URL,
                payload: response.data[0],
            });
        } else {
            dispatch({
                type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL,
                payload: true,
            });
        }
    };
};

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
