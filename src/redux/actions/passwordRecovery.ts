import { Dispatch } from "redux";
import { SubmissionError } from "redux-form";

import $api from "../../http/";

import {
	PasswordRecoveryActions,
	PasswordRecoveryActionTypes,
} from "../types/passwordRecovery/IPasswordRecovery";

export const sendPasswordRecoveryEmail = (data: { email: string }) => {
	return async (dispatch: Dispatch<PasswordRecoveryActions>) => {
		dispatch({
			type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY,
			payload: true,
		});

		return $api
			.post(`/password-recovery`, data)
			.then(() => {
				dispatch({
					type: PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_EMAIL,
					payload: "success",
				});
				dispatch({
					type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY,
					payload: false,
				});
			})
			.catch(({ response }) => {
				dispatch({
					type: PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_EMAIL,
					payload: "error",
				});
				dispatch({
					type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY,
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

export const sendPasswordRecoveryNewPassword = (
	data: { password: string; password_repeat: string },
	hash: string
) => {
	return async (dispatch: Dispatch<PasswordRecoveryActions>) => {
		dispatch({
			type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY,
			payload: true,
		});

		return $api
			.post(`/password-recovery/${hash}`, data)
			.then(({ data }) => {
				localStorage.setItem("accessToken", data.accessToken);

				dispatch({
					type: PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD,
					payload: "success",
				});

				dispatch({
					type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY,
					payload: false,
				});

				window.location.href = "/go/training";
			})
			.catch(({ response }) => {
				dispatch({
					type: PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD,
					payload: "error",
				});

				dispatch({
					type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY,
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
