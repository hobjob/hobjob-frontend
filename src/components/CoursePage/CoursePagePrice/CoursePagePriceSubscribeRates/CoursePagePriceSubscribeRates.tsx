import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { sendCreatePaymentSubscribe } from "../../../../redux/actions/payment/paymentSubscribe";

import { CoursePagePriceSections } from "../../../../redux/types/coursePage/ICoursePage";
import {
	changePriceCurrentSection,
	changePriceTypeSubscribe,
} from "../../../../redux/actions/coursePage";

import {
	CoursePagePriceSubscribeRatesBlock,
	CoursePagePriceSubscribeRatesTimer,
} from "../../../";

import { rates } from "../../../../subscribeRates";

const CoursePagePriceSubscribeRates: React.FC = () => {
	const dispatch = useDispatch();

	const { isLoadedUserInfo } = useTypedSelector(({ user }) => user);
	const {
		price: { isCloseAnimation },
	} = useTypedSelector(({ coursePage }) => coursePage);

	const createPaymentSubscribe = (type: string) => {
		dispatch(sendCreatePaymentSubscribe(type) as any);
	};

	const onClickGoToRegisterSubscribe = (type: string) => {
		dispatch(changePriceTypeSubscribe(type) as any);

		dispatch(
			changePriceCurrentSection(CoursePagePriceSections.SUBSCRIBE_REGISTER) as any
		);
	};

	return (
		<div
			className={`course-page-price-subscribe-rates ${isCloseAnimation ? "close" : ""
				}`}
		>
			<div className="course-page-price-subscribe-rates-text">
				<div className="course-page-price-subscribe-rates-text-left">
					<button
						className="course-page-price-subscribe-rates-text-left__back"
						onClick={() =>
							dispatch(
								changePriceCurrentSection(
									CoursePagePriceSections.CHOICE_TYPE_BUY
								) as any
							)
						}
					>
						← Назад
					</button>

					<h3 className="course-page-price-subscribe-rates-text-left__title">
						Успейте оформить подписку со скидкой
					</h3>
				</div>

				<CoursePagePriceSubscribeRatesTimer />
			</div>

			<div className="course-page-price-subscribe-rates-blocks">
				{Object.keys(rates).map((key, index) => (
					<CoursePagePriceSubscribeRatesBlock
						{...rates[key]}
						isLogin={isLoadedUserInfo}
						createPaymentSubscribe={createPaymentSubscribe}
						onClickGoToRegisterSubscribe={
							onClickGoToRegisterSubscribe
						}
						key={`course-page-price-subscribe-rates-blocks-block-${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default CoursePagePriceSubscribeRates;
