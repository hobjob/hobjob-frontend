import React from "react";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    Loader,
    TrainingNull,
    TrainingSubscribe,
    TrainingBuy,
    ShopSection,
} from "../components/";

const Training: React.FC = () => {
    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    const isNull: () => boolean = () => {
        return (
            !userInfo.courses.buy.length && !userInfo.courses.subscribe.length
        );
    };

    return (
        <>
            <Helmet>
                <title>Мое обучение - HobJob</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo && isLoadedMasters ? (
                    <>
                        <section className="training">
                            <div className="container">
                                <div className="training-wrapper">
                                    {isNull() ? (
                                        <TrainingNull />
                                    ) : (
                                        <>
                                            {userInfo.courses.buy.length ? (
                                                <TrainingBuy />
                                            ) : null}

                                            {userInfo.courses.subscribe
                                                .length ? (
                                                <TrainingSubscribe />
                                            ) : null}
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>

                        <ShopSection
                            title="Учитесь на практике"
                            description="Обучайтесь у лучших профессионалов
                            своего дела и раскройте самые сокровенные секреты
                            творческого мира"
                        />
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

export default Training;
