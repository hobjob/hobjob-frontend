import {
    PasswordRecoveryState,
    PasswordRecoveryActions,
    PasswordRecoveryActionTypes,
} from "../types/passwordRecovery/IPasswordRecovery";

const initialState: PasswordRecoveryState = {
    emailStatus: "",
    newPasswordStatus: "",
    isSend: false,
};

const passwordRecovery = (
    state = initialState,
    action: PasswordRecoveryActions
): PasswordRecoveryState => {
    if (
        action.type ===
        PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_EMAIL
    ) {
        return {
            ...state,
            emailStatus: action.payload,
        };
    }

    if (
        action.type ===
        PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD
    ) {
        return {
            ...state,
            newPasswordStatus: action.payload,
        };
    }

    if (
        action.type === PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY
    ) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default passwordRecovery;
