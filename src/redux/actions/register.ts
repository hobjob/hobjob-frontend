import {Dispatch} from "redux";
import {SubmissionError} from "redux-form";

import $api from "../../http/";

import {
    RegisterActions,
    RegisterActionTypes,
} from "../types/register/IRegister";

export const sendRegister = (
    data: {name: string; email: string; password: string},
    ref: string
) => {
    return async (dispatch: Dispatch<RegisterActions>) => {
        dispatch({
            type: RegisterActionTypes.SET_SEND_REGISTER,
            payload: true,
        });

        return $api
            .post(`/register`, {...data, ref})
            .then(({data}) => {
                localStorage.setItem("accessToken", data.accessToken);

                window.location.href = `/payment/subscribe/${data.paymentNumber}`;
            })
            .catch(({response}) => {
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
