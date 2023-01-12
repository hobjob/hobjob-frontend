import { CourseGood } from "../../../models/Course/ICourseGood";

export interface CoursesStateFilters {
	isParse: boolean

	categories: { [key: string]: string };
	search: string;
	masters: { [key: string]: string };
}

export interface CoursesState {
	isLoadedAllCoursesFirst: boolean;
	isLoadedAllCourses: boolean;
	isFetchAllCourses: boolean;

	courses: CourseGood[];

	isLoadedCourseByUrl: boolean;
	courseByUrl: CourseGood;

	isLoadedCourseById: boolean;
	courseById: CourseGood;

	totalCount: number;
	page: number;

	isLoadedSectionCourses: boolean;
	coursesSection: CourseGood[];

	filters: CoursesStateFilters;
}

export enum CoursesActionTypes {
	SET_COURSES = "SET_COURSES",
	SET_ADD_PAGINATION_COURSES = "SET_ADD_PAGINATION_COURSES",
	SET_COURSES_SECTION = "SET_COURSES_SECTION",
	SET_COURSE_BY_URL = "SET_COURSE_BY_URL",
	SET_COURSE_BY_ID = "SET_COURSE_BY_ID",
	SET_COURSES_FILTERS = "SET_COURSES_FILTERS",
	SET_COURSES_FILTERS_CATEGORIES = "SET_COURSES_FILTERS_CATEGORIES",
	SET_COURSES_FILTERS_SEARCH = "SET_COURSES_FILTERS_SEARCH",
	SET_COURSES_FILTERS_MASTERS = "SET_COURSES_FILTERS_MASTERS",
	SET_LOADED_COURSES_FIRST = "SET_LOADED_COURSES_FIRST",
	SET_LOADED_COURSES = "SET_LOADED_COURSES",
	SET_LOADED_COURSE_BY_URL = "SET_LOADED_COURSE_BY_URL",
	SET_LOADED_COURSE_BY_ID = "SET_LOADED_COURSE_BY_ID",
	SET_IS_FETCH_ALL_COURSES = "SET_IS_FETCH_ALL_COURSES",
}

interface setCoursesAction {
	type: CoursesActionTypes.SET_COURSES;
	payload: {
		courses: CourseGood[];
		totalCount: number;
	};
}

interface setAddPaginationCoursesAction {
	type: CoursesActionTypes.SET_ADD_PAGINATION_COURSES;
	payload: CourseGood[];
}

interface setCoursesSectionAction {
	type: CoursesActionTypes.SET_COURSES_SECTION;
	payload: CourseGood[]
}

interface setCourseByUrlAction {
	type: CoursesActionTypes.SET_COURSE_BY_URL;
	payload: CourseGood;
}

interface setCourseByIdAction {
	type: CoursesActionTypes.SET_COURSE_BY_ID;
	payload: CourseGood;
}

interface setCoursesFiltersAction {
	type: CoursesActionTypes.SET_COURSES_FILTERS;
	payload: CoursesStateFilters;
}

interface setCoursesFiltersCategoriesAction {
	type: CoursesActionTypes.SET_COURSES_FILTERS_CATEGORIES;
	payload: string;
}

interface setCoursesFiltersSearchAction {
	type: CoursesActionTypes.SET_COURSES_FILTERS_SEARCH;
	payload: string;
}

interface setCoursesFiltersMastersAction {
	type: CoursesActionTypes.SET_COURSES_FILTERS_MASTERS;
	payload: string;
}

interface setLoadedCoursesFirstAction {
	type: CoursesActionTypes.SET_LOADED_COURSES_FIRST;
	payload: boolean;
}

interface setLoadedCoursesAction {
	type: CoursesActionTypes.SET_LOADED_COURSES;
	payload: boolean;
}

interface setLoadedCourseByUrlAction {
	type: CoursesActionTypes.SET_LOADED_COURSE_BY_URL;
	payload: boolean;
}

interface setLoadedCourseByIdAction {
	type: CoursesActionTypes.SET_LOADED_COURSE_BY_ID;
	payload: boolean;
}

interface setIsFetchAllCoursesAction {
	type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES;
	payload: boolean;
}

export type CoursesActions =
	| setCoursesAction
	| setAddPaginationCoursesAction
	| setCoursesSectionAction
	| setCourseByUrlAction
	| setCourseByIdAction
	| setCoursesFiltersCategoriesAction
	| setCoursesFiltersSearchAction
	| setCoursesFiltersMastersAction
	| setLoadedCoursesFirstAction
	| setLoadedCoursesAction
	| setLoadedCourseByUrlAction
	| setLoadedCourseByIdAction
	| setIsFetchAllCoursesAction
	| setCoursesFiltersAction;
