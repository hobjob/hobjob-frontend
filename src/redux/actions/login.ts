import {Dispatch} from "redux";

import {SubmissionError} from "redux-form";

import $api from "../../http/";

import {LoginActions, LoginActionTypes} from "../types/login/ILogin";

export const sendLogin = (data: {email: string; password: string}) => {
    return async (dispatch: Dispatch<LoginActions>) => {
        dispatch({
            type: LoginActionTypes.SET_SEND_LOGIN,
            payload: true,
        });

        return $api
            .post("/login", data)
            .then(({data}) => {
                localStorage.setItem("accessToken", data.accessToken);

                window.location.href = "/go/training/";
            })
            .catch(({response}) => {
                dispatch({
                    type: LoginActionTypes.SET_SEND_LOGIN,
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
