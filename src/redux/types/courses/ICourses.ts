import {CourseGood} from "../../../models/ICourseGood";

export interface CoursesStateFilters {
	isParse: boolean

    categories: {[key: string]: string};
    search: string;
    masters: {[key: string]: string};
}

export interface CoursesState {
    isLoadedAllCoursesFirst: boolean;
    isLoadedAllCourses: boolean;
    isFetchAllCourses: boolean;

    items: CourseGood[];

    isLoadedCourseByUrl: boolean;
    itemByUrl: CourseGood;

    totalCount: number;
    page: number;

    isLoadedSectionCourses: boolean;
    itemsSection: {[key: string]: CourseGood};

    filters: CoursesStateFilters;
}

export enum CoursesActionTypes {
    SET_COURSES = "SET_COURSES",
    SET_ADD_PAGINATION_COURSES = "SET_ADD_PAGINATION_COURSES",
    SET_COURSES_SECTION = "SET_COURSES_SECTION",
    SET_COURSE_BY_URL = "SET_COURSE_BY_URL",
    SET_COURSES_FILTERS = "SET_COURSES_FILTERS",
    SET_COURSES_FILTERS_CATEGORIES = "SET_COURSES_FILTERS_CATEGORIES",
    SET_COURSES_FILTERS_SEARCH = "SET_COURSES_FILTERS_SEARCH",
    SET_COURSES_FILTERS_MASTERS = "SET_COURSES_FILTERS_MASTERS",
    SET_LOADED_COURSES_FIRST = "SET_LOADED_COURSES_FIRST",
    SET_LOADED_COURSES = "SET_LOADED_COURSES",
    SET_LOADED_COURSE_BY_URL = "SET_LOADED_COURSE_BY_URL",
    SET_IS_FETCH_ALL_COURSES = "SET_IS_FETCH_ALL_COURSES",
}

interface setCoursesAction {
    type: CoursesActionTypes.SET_COURSES;
    payload: {
        data: CourseGood[];
        headers: any;
    };
}

interface setAddPaginationCoursesAction {
    type: CoursesActionTypes.SET_ADD_PAGINATION_COURSES;
    payload: {
        data: CourseGood[];
    };
}

interface setCoursesSectionAction {
    type: CoursesActionTypes.SET_COURSES_SECTION;
    payload: {
        items: CourseGood[];
        userInfo: any;
        url: string;
    };
}

interface setCourseByUrlAction {
    type: CoursesActionTypes.SET_COURSE_BY_URL;
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

interface setIsFetchAllCoursesAction {
    type: CoursesActionTypes.SET_IS_FETCH_ALL_COURSES;
    payload: boolean;
}

export type CoursesActions =
    | setCoursesAction
    | setAddPaginationCoursesAction
    | setCoursesSectionAction
    | setCourseByUrlAction
    | setCoursesFiltersCategoriesAction
    | setCoursesFiltersSearchAction
    | setCoursesFiltersMastersAction
    | setLoadedCoursesFirstAction
    | setLoadedCoursesAction
    | setLoadedCourseByUrlAction
    | setIsFetchAllCoursesAction
    | setCoursesFiltersAction;
