import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchUpdateUser, fetchUpdateUserPassword} from "../redux/actions/user";

import {
    Loader,
    CabinetCardUserInfo,
    CabinetUserInfoForm,
    CabinetUserPassword,
    CabinetSubscribe,
} from "../components/";

const Cabinet: React.FC = () => {
    const {hash} = window.location;

    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        if (isLoadedUserInfo) {
            if (hash !== "") {
                const id = hash.replace("#", "");

                const element = document.getElementById(id);

                if (element) {
                    window.scrollTo(
                        0,
                        element.getBoundingClientRect().top - 100
                    );
                }
            }
        }
    }, [isLoadedUserInfo]);

    const onSubmitCabinetUserInfoForm = (data: any) => {
        dispatch(fetchUpdateUser(data) as any);
    };

    const onSubmitCabinetUserPassword = (data: any) => {
        return dispatch(fetchUpdateUserPassword(data) as any);
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo ? (
                    <>
                        <Helmet>
                            <title>Мой профиль - HobJob</title>
                        </Helmet>

                        <section className="cabinet">
                            <div className="container">
                                <div className="cabinet-wrapper">
                                    <CabinetCardUserInfo {...userInfo} />

                                    <div className="cabinet-section-wrapper">
                                        <div className="cabinet-section">
                                            <div className="cabinet-section-title">
                                                <h3 className="cabinet-section-title__title">
                                                    О себе
                                                </h3>
                                            </div>

                                            <CabinetUserInfoForm
                                                onSubmit={
                                                    onSubmitCabinetUserInfoForm
                                                }
                                                {...userInfo}
                                            />
                                        </div>
                                        <div className="cabinet-section">
                                            <div className="cabinet-section-title">
                                                <h3 className="cabinet-section-title__title">
                                                    Изменение пароля
                                                </h3>
                                            </div>

                                            <CabinetUserPassword
                                                onSubmit={
                                                    onSubmitCabinetUserPassword
                                                }
                                            />
                                        </div>

                                        {userInfo.subscribe.registration !==
                                        "" ? (
                                            <CabinetSubscribe />
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <Loader />
                )
            ) : (
                <Navigate to="/go/login" />
            )}
        </>
    );
};

export default Cabinet;
