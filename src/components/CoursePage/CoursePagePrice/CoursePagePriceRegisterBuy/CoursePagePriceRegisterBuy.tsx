import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import {
	CoursePagePriceRegisterBuyForm,
	CoursePagePriceRegisterBuyProductBlock,
} from "../../../";

import { sendRegister } from "../../../../redux/actions/register";

const CoursePagePriceRegisterBuy: React.FC = () => {
	const dispatch = useDispatch();

	const {
		price: { isCloseAnimation },
	} = useTypedSelector(({ coursePage }) => coursePage);
	const { courseByUrl } = useTypedSelector(({ courses }) => courses);

	const onSubmit = ({ email, password }: any) => {
		try {
			var _tmr = window._tmr || (window._tmr = []);

			_tmr.push({
				type: "reachGoal",
				id: 3311444,
				goal: courseByUrl.adsVk.buy,
			});

			var ym = window.ym || (window.ym = []);

			ym(84942475, 'reachGoal', `${courseByUrl.title} (Покупка)`)
		} catch (e) {
			console.log(e);
		}

		return dispatch(
			sendRegister(
				{ email, password, paymentInfo: `buy.${courseByUrl._id}` },
				"buy"
			)
		);
	};

	return (
		<div
			className={`course-page-price-register ${isCloseAnimation ? "close" : ""
				}`}
		>
			<CoursePagePriceRegisterBuyForm onSubmit={onSubmit} />

			<CoursePagePriceRegisterBuyProductBlock {...courseByUrl} />
		</div>
	);
};

export default CoursePagePriceRegisterBuy;
