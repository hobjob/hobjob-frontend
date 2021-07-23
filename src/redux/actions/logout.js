import $api from '../../http/';

export const sendLogout = () => (dispatch) => {
	$api.post('/logout').then(() => {
		localStorage.removeItem("accessToken")

		window.location.href = "/"
	})
}