import { Dispatch } from "redux";
import { animateScroll } from "react-scroll";

import { CoursePagePriceSections, CoursePageActions, CoursePageActionTypes } from "../types/coursePage/ICoursePage";

export const changeCurrentSection = (section: CoursePagePriceSections) => (dispatch: Dispatch<CoursePageActions>) => {
	const to: any = document.getElementById("price")?.offsetTop;

	animateScroll.scrollTo(to, { duration: 1000 });

	dispatch({
		type: CoursePageActionTypes.SET_IS_CLOSE_ANIMATION,
		payload: true
	});

	setTimeout(() => {
		dispatch({
			type: CoursePageActionTypes.SET_CURRENT_SECTION,
			payload: section
		});

		dispatch({
			type: CoursePageActionTypes.SET_IS_CLOSE_ANIMATION,
			payload: false
		});
	}, 180);
};

export const changeTypeSubscribe = (type: string) => (dispatch: Dispatch<CoursePageActions>) => {
	dispatch({
		type: CoursePageActionTypes.SET_TYPE_SUBSCRIBE,
		payload: type
	});
};