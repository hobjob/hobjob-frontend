import { PassingCourse } from "../../../models/Passing/IPassing";

export interface PassingState {
	course: PassingCourse;
	isLoadedCourse: boolean;
}

export enum PassingActionTypes {
	SET_PASSING_COURSE = "SET_PASSING_COURSE",
	SET_PASSING_IS_LOADED_COURSE = "SET_PASSING_IS_LOADED_COURSE",
}

interface setPassingCourse {
	type: PassingActionTypes.SET_PASSING_COURSE;
	payload: PassingCourse;
}
interface setPassingIsLoadedCourse {
	type: PassingActionTypes.SET_PASSING_IS_LOADED_COURSE;
	payload: boolean;
}

export type PassingActions =
	| setPassingCourse
	| setPassingIsLoadedCourse;
