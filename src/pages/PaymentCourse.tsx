import React from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { useTypedSelector } from "../hooks/useTypedSelector";

import { fetchPaymentCourseById } from "../redux/actions/payment/paymentCourse";
import { fetchCourseById } from "../redux/actions/courses";

import {
	ReglogProgressbar,
	ReglogBuyBlock,
	Loader,
} from "../components/";

interface PaymentSubscribe { }

const PaymentSubscribe: React.FC = () => {
	const dispatch = useDispatch();
	const { number } = useParams();

	const { payment, isLoaded } = useTypedSelector(
		({ paymentCourse }) => paymentCourse
	);
	const { courseById } = useTypedSelector(({ courses }) => courses);

	React.useEffect(() => {
		dispatch(fetchPaymentCourseById(number ? number : "") as any);
	}, []);

	React.useEffect(() => {
		if (isLoaded) {
			dispatch(fetchCourseById(payment.courseId) as any);

			if (payment.confirmation) {
				const checkout = new window.YooMoneyCheckoutWidget({
					confirmation_token: payment.confirmation.confirmation_token,
					return_url: `${process.env.REACT_APP_DOMEN}/payment/status/${payment.number}`,

					customization: {
						colors: {
							controlPrimary: "#DD9E5E",
							background: "#F9F9F9",
						},
					},

					error_callback: (error: any) => {
						console.log(error);
					},

				});

				checkout.on('success', () => {
					try {
						var _tmr = window._tmr || (window._tmr = []);

						_tmr.push({
							type: "reachGoal",
							id: 3311444,
							goal: courseById.adsVk.buy,
						});

						var ym = window.ym || (window.ym = []);

						ym(84942475, 'reachGoal', `${courseById.title} (Покупка)`)
					} catch (e) {
						console.log(e);
					}
				});

				checkout.render("reglog-form-payment");
			} else {
				window.location.href = "/";
			}
		}
	}, [isLoaded]);

	return (
		<>
			{isLoaded ? (
				<>
					<Helmet>
						<title>Купить курс «{courseById.title}» - HobJob</title>
					</Helmet>

					<section className="reglog">
						<div className="container">
							<div className="reglog-wrapper space-between">
								<div className="reglog-form-wrapper">
									<ReglogProgressbar number={2} />

									<div
										className="reglog-form-payment"
										id="reglog-form-payment"
									></div>
								</div>
								<div className="reglog-product-wrapper">
									<ReglogBuyBlock />
								</div>
							</div>
						</div>
					</section>
				</>
			) : (
				<Loader />
			)}
		</>
	);
};

export default PaymentSubscribe;
