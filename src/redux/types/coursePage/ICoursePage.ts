export enum CoursePagePriceSections {
	CHOICE_TYPE_BUY = "CHOICE_TYPE_BUY",
	SUBSCRIBE_RATES = "SUBSCRIBE_RATES",
	SUBSCRIBE_REGISTER = "SUBSCRIBE_REGISTER",
	BUY_REGISTER = "BUY_REGISTER",
}

export interface CoursePageState {
	price: {
		currentSection: CoursePagePriceSections
		isCloseAnimation: boolean

		type: string
	}

	works: {
		isOpenVideo: boolean
		currentUrlVideo: string

		isOpenImage: boolean
		currentUrlImage: string

		isCloseAnimation: boolean
	}
}

export enum CoursePageActionTypes {
	SET_PRICE_CURRENT_SECTION = "SET_PRICE_CURRENT_SECTION",
	SET_PRICE_IS_CLOSE_ANIMATION = "SET_PRICE_IS_CLOSE_ANIMATION",
	SET_PRICE_TYPE_SUBSCRIBE = "SET_PRICE_TYPE_SUBSCRIBE",

	SET_WORKS_IS_OPEN_VIDEO = "SET_WORKS_IS_OPEN_VIDEO",
	SET_WORKS_CURRENT_URL_VIDEO = "SET_WORKS_CURRENT_URL_VIDEO",

	SET_WORKS_IS_OPEN_IMAGE = "SET_WORKS_IS_OPEN_IMAGE",
	SET_WORKS_CURRENT_URL_IMAGE = "SET_WORKS_CURRENT_URL_IMAGE",

	SET_WORKS_IS_CLOSE_ANIMATION = "SET_WORKS_IS_CLOSE_ANIMATION",
}

interface setPriceCurrentSection {
	type: CoursePageActionTypes.SET_PRICE_CURRENT_SECTION,
	payload: CoursePagePriceSections
}

interface setPriceIsCloseAnimation {
	type: CoursePageActionTypes.SET_PRICE_IS_CLOSE_ANIMATION,
	payload: boolean
}

interface setPriceTypeSubscribe {
	type: CoursePageActionTypes.SET_PRICE_TYPE_SUBSCRIBE,
	payload: string
}

interface setWorksIsOpenVideo {
	type: CoursePageActionTypes.SET_WORKS_IS_OPEN_VIDEO,
	payload: boolean
}

interface setWorksCurrentUrlVideo {
	type: CoursePageActionTypes.SET_WORKS_CURRENT_URL_VIDEO,
	payload: string
}


interface setWorksIsOpenImage {
	type: CoursePageActionTypes.SET_WORKS_IS_OPEN_IMAGE,
	payload: boolean
}

interface setWorksCurrentUrlImage {
	type: CoursePageActionTypes.SET_WORKS_CURRENT_URL_IMAGE,
	payload: string
}

interface setWorksIsCloseAnimation {
	type: CoursePageActionTypes.SET_WORKS_IS_CLOSE_ANIMATION,
	payload: boolean
}

export type CoursePageActions = setPriceCurrentSection | setPriceIsCloseAnimation | setPriceTypeSubscribe | setWorksIsOpenVideo | setWorksCurrentUrlVideo | setWorksIsOpenImage | setWorksCurrentUrlImage | setWorksIsCloseAnimation