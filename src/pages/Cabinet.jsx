import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchUpdateUser, fetchUpdateUserPassword} from "../redux/actions/user";

import {
    Loader,
    CabinetMessage,
    CabinetCardUserInfo,
    CabinetUserInfoForm,
    CabinetUserPassword,
    CabinetUserSubscribeInfo,
    PaymentSubscribeProlongation,
} from "../components/";

const Cabinet = () => {
    const {hash} = window.location;

    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useSelector(({user}) => user);

    const [masterInfoMessage, setMasterInfoMessage] = React.useState(false);

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

    const onSubmitCabinetUserInfoForm = (data) => {
        dispatch(fetchUpdateUser(data));
    };

    const onSubmitCabinetUserPassword = (data) => {
        return dispatch(fetchUpdateUserPassword(data));
    };

    const closeMasterInfoMessage = () => {
        localStorage.setItem("close-master-info-message", true);
        setMasterInfoMessage(true);
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
                                {userInfo.subscribe.working ? (
                                    <div className="cabinet-wrapper">
                                        {localStorage.getItem(
                                            "close-master-info-message"
                                        ) ||
                                        masterInfoMessage ||
                                        userInfo.master !==
                                            "confirmed" ? null : (
                                            <CabinetMessage
                                                message={
                                                    "Вы не можете поменять свои личные данные, так как являетесь мастером HobJob. Если вы хотите изменить данные напишите на почту поддержки"
                                                }
                                                closeFunc={
                                                    closeMasterInfoMessage
                                                }
                                            />
                                        )}

                                        <CabinetCardUserInfo {...userInfo} />

                                        <div className="cabinet-block-wrapper">
                                            <div className="cabinet-block">
                                                <div className="cabinet-block-text">
                                                    <h3 className="cabinet-block-text__title">
                                                        О себе
                                                    </h3>
                                                    <p className="cabinet-block-text__subtitle">
                                                        Просьба заполнять
                                                        реальные данные
                                                    </p>
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
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Cabinet;
