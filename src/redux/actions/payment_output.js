import $api from '../../http/';

export const sendPaymentOutputReferrals = (data, functionSuccess) => (dispatch) => {
	dispatch({
		type: "SET_SEND_PAYMENT_OUTPUT_REFERRALS",
		payload: true,
	})

	$api.post(`/payment-output/referrals`, data).then(({ data }) => {
		dispatch(settPaymentOutputNumberReferrals(data))

		functionSuccess()
	})
}

const settPaymentOutputNumberReferrals = (paymentNumber) => ({
	type: "SET_PAYMENT_OUTPUT_NUMBER_REFERRALS",
	payload: paymentNumber
})