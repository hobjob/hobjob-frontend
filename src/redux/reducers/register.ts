import {
    RegisterState,
    RegisterActions,
    RegisterActionTypes,
} from "../types/register/IRegister";

const initialState: RegisterState = {
    isSend: false,
};

const register = (state = initialState, action: RegisterActions) => {
    if (action.type === RegisterActionTypes.SET_SEND_REGISTER) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default register;
