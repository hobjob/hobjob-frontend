export interface LoginState {
    isSend: boolean;
}

export enum LoginActionTypes {
    SET_SEND_LOGIN = "SET_SEND_LOGIN",
}

interface setSendLogin {
    type: LoginActionTypes.SET_SEND_LOGIN;
    payload: boolean;
}

export type LoginActions = setSendLogin;
