import axios from "axios";

const $api = axios.create({
	withCredentials: true,
	baseURL: process.env.REACT_APP_API_DOMEN,
});

$api.interceptors.request.use((config: any) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem(
		"accessToken"
	)}`;
	return config;
});

$api.interceptors.response.use(
	(config: any) => {
		return config;
	},
	async (error: any) => {
		const originalRequest = error.config;

		if (error.response) {
			if (
				error.response.status == 401 &&
				error.config &&
				!error.config._isRetry
			) {
				originalRequest._isRetry = true;

				try {
					const response = await axios.get(
						`${process.env.REACT_APP_API_DOMEN}/refresh`,
						{ withCredentials: true }
					);
					localStorage.setItem(
						"accessToken",
						response.data.accessToken
					);
					return $api.request(originalRequest);
				} catch (e) {
					if (localStorage.getItem("accessToken")) {
						$api.post("/logout").then(() => {
							localStorage.removeItem("accessToken");
							window.location.reload();
						});
					}
				}
			}
		}

		throw error;
	}
);

export default $api;
