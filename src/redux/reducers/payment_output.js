const initialState = {
	isSendPaymentOutputReferrals: false,
	paymentOutputNumberReferrals: ""
}

const payment_output = (state = initialState, action) => {
	if (action.type === "SET_SEND_PAYMENT_OUTPUT_REFERRALS") {
		return {
			...state,
			isSendPaymentOutputReferrals: action.payload
		}
	}

	if (action.type === "SET_PAYMENT_OUTPUT_NUMBER_REFERRALS") {
		return {
			...state,
			paymentOutputNumberReferrals: action.payload,
			isSendPaymentOutputReferrals: false
		}
	}

	return state
}

export default payment_output