import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { CoursePagePriceRegisterForm } from "../../../";

import { CoursePagePriceSections } from "../../../../redux/types/coursePage/ICoursePage";
import { sendRegister } from "../../../../redux/actions/register";

const CoursePagePriceRegister: React.FC = () => {
	const dispatch = useDispatch();

	const {
		price: { isCloseAnimation, currentSection, type },
	} = useTypedSelector(({ coursePage }) => coursePage);
	const { courseByUrl } = useTypedSelector(({ courses }) => courses);

	const onSubmit = ({ email, password }: any) => {
		if (currentSection === CoursePagePriceSections.SUBSCRIBE_REGISTER) {
			// try {
			// 	var _tmr = window._tmr || (window._tmr = []);

			// 	_tmr.push({
			// 		type: "reachGoal",
			// 		id: 3311444,
			// 		goal: courseByUrl.adsVk.subscribe,
			// 	});

			// 	var ym = window.ym || (window.ym = []);

			// 	ym(84942475, 'reachGoal', `${courseByUrl.title} (Подписка)`)
			// } catch (e) {
			// 	console.log(e);
			// }

			// return dispatch(
			// 	sendRegister(
			// 		{
			// 			email,
			// 			password,
			// 			paymentInfo: `subscribe.${type}`,
			// 			addSubscribeCourseId: courseByUrl._id,
			// 		},
			// 		"subscribe"
			// 	) as any
			// );
		} else {
			// try {
			// 	var _tmr = window._tmr || (window._tmr = []);

			// 	_tmr.push({
			// 		type: "reachGoal",
			// 		id: 3311444,
			// 		goal: courseByUrl.adsVk.buy,
			// 	});

			// 	var ym = window.ym || (window.ym = []);

			// 	ym(84942475, 'reachGoal', `${courseByUrl.title} (Покупка)`)
			// } catch (e) {
			// 	console.log(e);
			// }

			return dispatch(
				sendRegister(
					{ email, password, paymentInfo: `buy.${courseByUrl._id}.${localStorage.getItem("device")}` },
					"buy"
				) as any
			);
		}
	};

	return (
		<div
			className={`course-page-price-register ${isCloseAnimation ? "close" : ""
				}`}
		>
			<CoursePagePriceRegisterForm onSubmit={onSubmit} />
		</div>
	);
};

export default CoursePagePriceRegister;
