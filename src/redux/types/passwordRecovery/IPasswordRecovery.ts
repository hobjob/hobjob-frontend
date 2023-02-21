export interface PasswordRecoveryState {
    emailStatus: string;
    newPasswordStatus: string;
    isSend: boolean;
}

export enum PasswordRecoveryActionTypes {
    SET_STATUS_PASSWORD_RECOVERY_EMAIL = "SET_STATUS_PASSWORD_RECOVERY_EMAIL",
    SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD = "SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD",
    SET_SEND_PASSWORD_RECOVERY = "SET_SEND_PASSWORD_RECOVERY",
}

interface setStatusPasswordRecoveryEmail {
    type: PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_EMAIL;
    payload: string;
}

interface setStatusPasswordRecoveryNewPassword {
    type: PasswordRecoveryActionTypes.SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD;
    payload: string;
}

interface setSendPasswordRecovery {
    type: PasswordRecoveryActionTypes.SET_SEND_PASSWORD_RECOVERY;
    payload: boolean;
}

export type PasswordRecoveryActions =
    | setStatusPasswordRecoveryEmail
    | setStatusPasswordRecoveryNewPassword
    | setSendPasswordRecovery;
