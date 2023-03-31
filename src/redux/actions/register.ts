import moment from "moment";
import { Dispatch } from "redux";
import { SubmissionError } from "redux-form";

import $api from "../../http/";

import {
	RegisterActions,
	RegisterActionTypes,
} from "../types/register/IRegister";

export const sendRegister = (
	data: {
		email: string;
		password: string;
		paymentInfo: string,
		addSubscribeCourseId?: string
	},
	typePayment?: string,
) => {
	return async (dispatch: Dispatch<RegisterActions>) => {
		dispatch({
			type: RegisterActionTypes.SET_SEND_REGISTER,
			payload: true,
		});

		let parseRef = JSON.parse(localStorage.getItem("ref") as string)
		let ref = moment().subtract(1, "days").isBefore(moment(parseRef.date, "DD.MM.YYYY, HH:mm")) ? parseRef.ref : ""

		return $api
			.post(`/register`, { ...data, ref })
			.then(({ data }) => {
				localStorage.setItem("accessToken", data.accessToken);

				if (data.paymentNumber) {
					window.location.href = typePayment === "buy" ? `/payment/course/${data.paymentNumber}` : `/payment/subscribe/${data.paymentNumber}`;
				} else {
					window.location.href = "/go/training"
				}
			})
			.catch(({ response }) => {
				dispatch({
					type: RegisterActionTypes.SET_SEND_REGISTER,
					payload: false,
				});

				if (response) {
					throw new SubmissionError({
						[response.data.fieldError]: response.data.message,
					});
				}
			});
	};
};
