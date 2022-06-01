import {
    PasswordRecoveryState,
    PasswordRecoveryActions,
    PasswordRecoveryActionTypes,
} from "../types/password_recovery/IPasswordRecovery";

const initialState: PasswordRecoveryState = {
    emailStatus: "",
    newPasswordStatus: "",
    isSend: false,
};

const password_recovery = (
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

export default password_recovery;
