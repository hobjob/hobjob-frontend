import {
    LoginState,
    LoginActions,
    LoginActionTypes,
} from "../types/login/ILogin";

const initialState: LoginState = {
    isSend: false,
};

const login = (state = initialState, action: LoginActions): LoginState => {
    if (action.type === LoginActionTypes.SET_SEND_LOGIN) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default login;
