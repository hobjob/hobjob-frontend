export interface RegisterState {
    isSend: boolean;
}

export enum RegisterActionTypes {
    SET_SEND_REGISTER = "SET_SEND_REGISTER",
}

interface setSendRegister {
    type: RegisterActionTypes.SET_SEND_REGISTER;
    payload: boolean;
}

export type RegisterActions = setSendRegister;