export enum CoursePagePriceSections {
	CHOICE_TYPE_BUY = "CHOICE_TYPE_BUY",
	SUBSCRIBE_RATES = "SUBSCRIBE_RATES",
	SUBSCRIBE_REGISTER = "SUBSCRIBE_REGISTER",
	BUY_REGISTER = "BUY_REGISTER",
}

export interface CoursePageState {
	currentSection: CoursePagePriceSections
	isCloseAnimation: boolean

	typeSubscribe: string
}

export enum CoursePageActionTypes {
	SET_CURRENT_SECTION = "SET_CURRENT_SECTION",
	SET_IS_CLOSE_ANIMATION = "SET_IS_CLOSE_ANIMATION",
	SET_TYPE_SUBSCRIBE = "SET_TYPE_SUBSCRIBE"
}

interface setCurrentSection {
	type: CoursePageActionTypes.SET_CURRENT_SECTION,
	payload: CoursePagePriceSections
}

interface setIsCloseAnimation {
	type: CoursePageActionTypes.SET_IS_CLOSE_ANIMATION,
	payload: boolean
}

interface setTypeSubscribe {
	type: CoursePageActionTypes.SET_TYPE_SUBSCRIBE,
	payload: string
}

export type CoursePageActions = setCurrentSection | setIsCloseAnimation | setTypeSubscribe