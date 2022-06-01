import {CourseGood} from "../../../models/ICourseGood";

interface CoursesStateFilters {
    categories: {[key: string]: string};
    search: string | string[];
    masters: {[key: string]: string};
}

export interface CoursesState {
    isLoadedAllCoursesFirst: boolean;
    isLoadedAllCourses: boolean;
    isFetchAllCourses: boolean;

    items: CourseGood[];

    isLoadedCourseById: boolean;
    itemById: CourseGood | {};

    isLoadedCourseByUrl: boolean;
    itemByUrl: CourseGood | {};

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
    SET_COURSE_BY_ID = "SET_COURSE_BY_ID",
    SET_COURSE_BY_URL = "SET_COURSE_BY_URL",
    SET_COURSES_FILTERS_CATEGORIES = "SET_COURSES_FILTERS_CATEGORIES",
    SET_COURSES_FILTERS_SEARCH = "SET_COURSES_FILTERS_SEARCH",
    SET_COURSES_FILTERS_MASTERS = "SET_COURSES_FILTERS_MASTERS",
    SET_LOADED_COURSES_FIRST = "SET_LOADED_COURSES_FIRST",
    SET_LOADED_COURSES = "SET_LOADED_COURSES",
    SET_LOADED_COURSE_BY_ID = "SET_LOADED_COURSE_BY_ID",
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

interface setCourseByIdAction {
    type: CoursesActionTypes.SET_COURSE_BY_ID;
    payload: CourseGood | {};
}

interface setCourseByUrlAction {
    type: CoursesActionTypes.SET_COURSE_BY_URL;
    payload: CourseGood | {};
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

interface setLoadedCoursesFitstAction {
    type: CoursesActionTypes.SET_LOADED_COURSES_FIRST;
    payload: boolean;
}

interface setLoadedCoursesAction {
    type: CoursesActionTypes.SET_LOADED_COURSES;
    payload: boolean;
}

interface setLoadedCourseByIdAction {
    type: CoursesActionTypes.SET_LOADED_COURSE_BY_ID;
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
    | setCourseByIdAction
    | setCourseByUrlAction
    | setCoursesFiltersCategoriesAction
    | setCoursesFiltersSearchAction
    | setCoursesFiltersMastersAction
    | setLoadedCoursesFitstAction
    | setLoadedCoursesAction
    | setLoadedCourseByIdAction
    | setLoadedCourseByUrlAction
    | setIsFetchAllCoursesAction;
