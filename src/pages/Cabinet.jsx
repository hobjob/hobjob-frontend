import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    fetchUser,
    fetchUpdateUser,
    fetchUpdateUserPassword,
} from "../redux/actions/user";

import {
    Loader,
    CabinetCardUserInfo,
    CabinetUserInfoForm,
    CabinetUserPassword,
    CabinetUserSocial,
} from "../components/";

import Err404 from "./Err404";

const Cabinet = () => {
    const dispatch = useDispatch();

    const {user, isLoaded} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(user).length) {
            dispatch(fetchUser());
        }
    }, []);

    const onSubmitCabinetUserInfoForm = (data) => {
        dispatch(fetchUpdateUser(data));
    };

    const onSubmitCabinetUserPassword = (data) => {
        return dispatch(fetchUpdateUserPassword(data));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
                    <>
                        <section className="cabinet">
                            <div className="container">
                                <div className="cabinet-wrapper">
                                    <CabinetCardUserInfo {...user} />

                                    <div className="cabinet-block-wrapper">
                                        <div className="cabinet-block">
                                            <div className="cabinet-block-text">
                                                <h3 className="cabinet-block-text__title">
                                                    О себе
                                                </h3>
                                                <p className="cabinet-block-text__subtitle">
                                                    Просьба заполнять реальные
                                                    данные - они будут
                                                    отбражаться на сертификатах
                                                </p>
                                            </div>

                                            <CabinetUserInfoForm
                                                onSubmit={
                                                    onSubmitCabinetUserInfoForm
                                                }
                                                {...user}
                                            />
                                        </div>
                                        <div className="cabinet-block">
                                            <div className="cabinet-block-text">
                                                <h3 className="cabinet-block-text__title">
                                                    Изменение пароля
                                                </h3>
                                            </div>

                                            <CabinetUserPassword
                                                onSubmit={
                                                    onSubmitCabinetUserPassword
                                                }
                                            />
                                        </div>
                                        <div className="cabinet-block">
                                            <div className="cabinet-block-text">
                                                <h3 className="cabinet-block-text__title">
                                                    Социальные сети
                                                </h3>
                                            </div>

                                            <CabinetUserSocial />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="loader-wrapper">
                        <Loader />
                    </div>
                )
            ) : (
                <Err404 />
            )}
        </>
    );
};

export default Cabinet;
