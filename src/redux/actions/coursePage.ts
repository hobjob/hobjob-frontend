import { Dispatch } from "redux";
import { animateScroll } from "react-scroll";

import { CoursePagePriceSections, CoursePageActions, CoursePageActionTypes } from "../types/coursePage/ICoursePage";

export const changePriceCurrentSection = (section: CoursePagePriceSections) => (dispatch: Dispatch<CoursePageActions>) => {
	const to: any = document.getElementById("price")?.offsetTop;

	animateScroll.scrollTo(to - 25, { duration: 1000 });

	dispatch({
		type: CoursePageActionTypes.SET_PRICE_IS_CLOSE_ANIMATION,
		payload: true
	});

	setTimeout(() => {
		dispatch({
			type: CoursePageActionTypes.SET_PRICE_CURRENT_SECTION,
			payload: section
		});

		dispatch({
			type: CoursePageActionTypes.SET_PRICE_IS_CLOSE_ANIMATION,
			payload: false
		});
	}, 180);
};

export const changePriceTypeSubscribe = (type: string) => (dispatch: Dispatch<CoursePageActions>) => {
	dispatch({
		type: CoursePageActionTypes.SET_PRICE_TYPE_SUBSCRIBE,
		payload: type
	});
};

export const openWorksVideo = (url: string) => (dispatch: Dispatch<CoursePageActions>) => {
	dispatch({
		type: CoursePageActionTypes.SET_WORKS_CURRENT_URL_VIDEO,
		payload: url
	});

	dispatch({
		type: CoursePageActionTypes.SET_WORKS_IS_OPEN_VIDEO,
		payload: true
	});
}

export const closeWorksVideo = () => (dispatch: Dispatch<CoursePageActions>) => {
	dispatch({
		type: CoursePageActionTypes.SET_WORKS_CURRENT_URL_VIDEO,
		payload: ""
	});

	dispatch({
		type: CoursePageActionTypes.SET_WORKS_IS_OPEN_VIDEO,
		payload: false
	});
}


export const openWorksImage = (url: string) => (dispatch: Dispatch<CoursePageActions>) => {
	dispatch({
		type: CoursePageActionTypes.SET_WORKS_CURRENT_URL_IMAGE,
		payload: url
	});

	dispatch({
		type: CoursePageActionTypes.SET_WORKS_IS_OPEN_IMAGE,
		payload: true
	});
}

export const closeWorksImage = () => (dispatch: Dispatch<CoursePageActions>) => {
	dispatch({
		type: CoursePageActionTypes.SET_WORKS_CURRENT_URL_IMAGE,
		payload: ""
	});

	dispatch({
		type: CoursePageActionTypes.SET_WORKS_IS_OPEN_IMAGE,
		payload: false
	});
}