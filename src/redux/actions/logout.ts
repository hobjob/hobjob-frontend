import $api from "../../http/";

export const sendLogout = () => {
    $api.post("/logout").then(() => {
        localStorage.removeItem("accessToken");

        window.location.href = "/";
    });
};
