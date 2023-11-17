import { PassingCourse } from "../../../models/Passing/IPassing";

export interface PassingState {
	course: PassingCourse;

	currentLessonIndex: number

	isLoadedCourse: boolean;
}

export enum PassingActionTypes {
	SET_PASSING_COURSE = "SET_PASSING_COURSE",
	SET_PASSING_CURRENT_LESSON_INDEX = "SET_PASSING_CURRENT_LESSON_INDEX",
	SET_PASSING_IS_LOADED_COURSE = "SET_PASSING_IS_LOADED_COURSE",
}

interface setPassingCourse {
	type: PassingActionTypes.SET_PASSING_COURSE;
	payload: PassingCourse;
}

interface setPassingCurrentLessonIndex {
	type: PassingActionTypes.SET_PASSING_CURRENT_LESSON_INDEX;
	payload: number;
}

interface setPassingIsLoadedCourse {
	type: PassingActionTypes.SET_PASSING_IS_LOADED_COURSE;
	payload: boolean;
}

export type PassingActions =
	| setPassingCourse
	| setPassingCurrentLessonIndex
	| setPassingIsLoadedCourse;
