import {
	CoursePagePriceSections,
	CoursePageState,
	CoursePageActions,
	CoursePageActionTypes,
} from "../types/coursePage/ICoursePage";

const initialState: CoursePageState = {
	price: {
		currentSection: CoursePagePriceSections.CHOICE_TYPE_BUY,
		isCloseAnimation: false,

		type: "test"
	},
	works: {
		isOpenVideo: false,
		currentUrlVideo: "",

		isOpenImage: false,
		currentUrlImage: "",

		isCloseAnimation: false
	}
}

const coursePage = (state = initialState, action: CoursePageActions) => {
	if (action.type === CoursePageActionTypes.SET_PRICE_CURRENT_SECTION) {
		return {
			...state,
			price: {
				...state.price,
				currentSection: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_PRICE_IS_CLOSE_ANIMATION) {
		return {
			...state,
			price: {
				...state.price,
				isCloseAnimation: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_PRICE_TYPE_SUBSCRIBE) {
		return {
			...state,
			price: {
				...state.price,
				type: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_WORKS_IS_OPEN_VIDEO) {
		return {
			...state,
			works: {
				...state.works,
				isOpenVideo: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_WORKS_CURRENT_URL_VIDEO) {
		return {
			...state,
			works: {
				...state.works,
				currentUrlVideo: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_WORKS_IS_OPEN_IMAGE) {
		return {
			...state,
			works: {
				...state.works,
				isOpenImage: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_WORKS_CURRENT_URL_IMAGE) {
		return {
			...state,
			works: {
				...state.works,
				currentUrlImage: action.payload
			}
		}
	}

	if (action.type === CoursePageActionTypes.SET_WORKS_IS_CLOSE_ANIMATION) {
		return {
			...state,
			works: {
				...state.works,
				isCloseAnimation: action.payload
			}
		}
	}

	return state;
}

export default coursePage