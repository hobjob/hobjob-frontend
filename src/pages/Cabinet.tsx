import React from "react";
import {useDispatch} from "react-redux";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
import {Navigate} from 'react-router-dom'
=======
import {Helmet} from "react-helmet";
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchUpdateUser, fetchUpdateUserPassword} from "../redux/actions/user";

import {
    Loader,
    CabinetCardUserInfo,
    CabinetUserInfoForm,
    CabinetUserPassword,
    CabinetUserSubscribeInfo,
    PaymentSubscribeProlongation,
} from "../components/";

const Cabinet: React.FC = () => {
    const {hash} = window.location;

    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        dispatch(fetchUpdateUser(data));
    };

    const onSubmitCabinetUserPassword = (data: any) => {
        return dispatch(fetchUpdateUserPassword(data));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo ? (
                    <>
                        <Helmet>
                            <title>Мойs профиль - HobJob</title>
                        </Helmet>
                        <section className="cabinet">
                            <div className="container">
                                {userInfo.subscribe.working ? (
                                    <div className="cabinet-wrapper">
                                        <CabinetCardUserInfo {...userInfo} />

                                        <div className="cabinet-block-wrapper">
                                            <div className="cabinet-block">
                                                <div className="cabinet-block-text">
                                                    <h3 className="cabinet-block-text__title">
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

                                            <div
                                                className="cabinet-block"
                                                id="subscribe"
                                            >
                                                <div className="cabinet-block-text">
                                                    <h3 className="cabinet-block-text__title">
                                                        Моя подписка
                                                    </h3>
                                                </div>

                                                <CabinetUserSubscribeInfo />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <PaymentSubscribeProlongation />
                                )}
                            </div>
                        </section>
                    </>
                ) : (
                    <Loader />
                )
            ) : (
<<<<<<< HEAD
                <Navigate to="/go/login" />
=======
                (window.location.href = "/go/login")
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
            )}
        </>
    );
};

export default Cabinet;
