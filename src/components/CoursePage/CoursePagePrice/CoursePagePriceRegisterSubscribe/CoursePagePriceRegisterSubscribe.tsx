import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import {
	CoursePagePriceRegisterSubscribeForm,
	CoursePagePriceRegisterSubscribeProductBlock,
} from "../../../";

import { sendRegister } from "../../../../redux/actions/register";

import { rates } from "../../../../subscribeRates";

const CoursePagePriceRegisterSubscribe: React.FC = () => {
	const dispatch = useDispatch();

	const { courseByUrl } = useTypedSelector(({ courses }) => courses);

	const {
		price: { isCloseAnimation, type },
	} = useTypedSelector(({ coursePage }) => coursePage);

	const onSubmit = ({ email, password }: any) => {
		try {
			var _tmr = window._tmr || (window._tmr = []);

			_tmr.push({
				type: "reachGoal",
				id: 3311444,
				goal: courseByUrl.adsVk.subscribe,
			});

			var ym = window.ym || (window.ym = []);

			ym(84942475, 'reachGoal', `${courseByUrl.title} (Подписка)`)
		} catch (e) {
			console.log(e);
		}

		return dispatch(
			sendRegister(
				{
					email,
					password,
					paymentInfo: `subscribe.${type}`,
					addSubscribeCourseId: courseByUrl._id,
				},
				"subscribe"
			) as any
		);
	};

	return (
		<div
			className={`course-page-price-register ${isCloseAnimation ? "close" : ""
				}`}
		>
			<CoursePagePriceRegisterSubscribeForm onSubmit={onSubmit} />

			<CoursePagePriceRegisterSubscribeProductBlock {...rates[type]} />
		</div>
	);
};

export default CoursePagePriceRegisterSubscribe;
