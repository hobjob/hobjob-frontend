import {
    PaymentState,
    PaymentActions,
    PaymentActionTypes,
} from "../types/payment/IPayment";

const initialState: PaymentState = {
    payment: {
        paymentNumber: "",
        confirmation: {},
        order: "",
        status: "",
        typeSubscribe: "",
        nextTypeSubscribe: "",
    },
    isLoaded: false,

    isSend: false,
};

const payment = (
    state = initialState,
    action: PaymentActions
): PaymentState => {
    if (action.type === PaymentActionTypes.SET_PAYMENT) {
        return {
            ...state,
            payment: action.payload,
            isLoaded: true,
        };
    }

    if (action.type === PaymentActionTypes.SET_LOADED_PAYMENT) {
        return {
            ...state,
            isLoaded: action.payload,
        };
    }

    if (action.type === PaymentActionTypes.SET_SEND_PAYMENT) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default payment;
