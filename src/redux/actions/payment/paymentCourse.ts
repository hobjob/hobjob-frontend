import { Dispatch } from "redux";

import $api from "../../../http/";

import { PaymentCourseActions, PaymentCourseActionTypes } from "../../types/payment/IPaymentCourse";
import { PaymentCourse } from "../../../models/Payment/IPaymentCourse";

export const fetchPaymentCourseById = (id: string) => {
	return async (dispatch: Dispatch<PaymentCourseActions>) => {
		dispatch({
			type: PaymentCourseActionTypes.SET_LOADED_PAYMENT_COURSE,
			payload: false,
		});

		$api.get<PaymentCourse>(`/payment/course/${id}`)
			.then(({ data }) => {
				dispatch({
					type: PaymentCourseActionTypes.SET_PAYMENT_COURSE,
					payload: data,
				});
			})
			.catch(() => {
				window.location.href = `/go/training`;
			});
	};
}

export const sendCreatePaymentCourse = (
	courseId: String
) => {
	return async (dispatch: Dispatch<PaymentCourseActions>) => {
		dispatch({
			type: PaymentCourseActionTypes.SET_SEND_PAYMENT_COURSE,
			payload: true,
		});

		$api.post(`/payment/course`, { courseId }).then(({ data }) => {
			window.location.href = `/payment/course/${data.paymentNumber}`;
		});
	};
}