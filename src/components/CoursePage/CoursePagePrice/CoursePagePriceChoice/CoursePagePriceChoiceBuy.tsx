import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { sendCreatePaymentCourse } from "../../../../redux/actions/payment/paymentCourse";

import { CoursePagePriceSections } from "../../../../redux/types/coursePage/ICoursePage";
import { changePriceCurrentSection } from "../../../../redux/actions/coursePage";

import { CourseGood } from '../../../../models/Course/ICourseGood'

const CoursePagePriceChoiceBuy: React.FC<CourseGood> = ({
	_id,
	image,
}) => {
	const dispatch = useDispatch();

	const { isLoadedUserInfo } = useTypedSelector(({ user }) => user);

	const createPaymentCourse = () => {
		dispatch(sendCreatePaymentCourse(_id) as any);
	};

	return (
		<div className="course-page-price-blocks-buy">
			<p className="course-page-price-blocks-buy__title">
				Не подходит подписка?
			</p>

			<p className="course-page-price-blocks-buy__title">
				Можно купить курс навсегда за <span>1990₽</span> 990₽
			</p>

			{isLoadedUserInfo ? (
				<button
					className="btn-regular course-page-price-blocks-buy__btn"
					onClick={createPaymentCourse}
				>
					Купить курс
				</button>
			) : (
				<button
					className="btn-regular course-page-price-blocks-buy__btn"
					onClick={() => {
						dispatch(
							changePriceCurrentSection(
								CoursePagePriceSections.BUY_REGISTER
							) as any
						);
					}}
				>
					Купить курс
				</button>
			)}
		</div>
	);
};

export default CoursePagePriceChoiceBuy;
