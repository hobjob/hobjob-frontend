import {
	CoursePagePriceSections,
	CoursePageState,
	CoursePageActions,
	CoursePageActionTypes,
} from "../types/coursePage/ICoursePage";

const initialState: CoursePageState = {
	currentSection: CoursePagePriceSections.CHOICE_TYPE_BUY,
	isCloseAnimation: false,

	typeSubscribe: "month"
}

const coursePage = (state = initialState, action: CoursePageActions) => {
	if (action.type === CoursePageActionTypes.SET_CURRENT_SECTION) {
		return {
			...state,
			oldCurrentSection: state.currentSection,
			currentSection: action.payload
		}
	}

	if (action.type === CoursePageActionTypes.SET_IS_CLOSE_ANIMATION) {
		return {
			...state,
			isCloseAnimation: action.payload
		}
	}

	if (action.type === CoursePageActionTypes.SET_TYPE_SUBSCRIBE) {
		return {
			...state,
			typeSubscribe: action.payload
		}
	}

	return state;
}

export default coursePage