import React from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import {Navigate} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    Loader,
    TrainingNull,
    TrainingSubscribe,
    TrainingBuy,
    ShopSection,
    // PaymentSubscribeProlongation,
} from "../components/";

const Training: React.FC = () => {
    const dispatch = useDispatch();

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const masters = useTypedSelector(({masters}) => masters.items);
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

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
                                    {userInfo.courses.buy.length ||
                                    userInfo.courses.subscribe.length ? (
                                        <>
                                            {userInfo.courses.subscribe
                                                .length ? (
                                                <TrainingSubscribe />
												) : null}
												
                                            {userInfo.courses.buy.length ? (
                                                <TrainingBuy />
                                            ) : null}
                                        </>
                                    ) : (
                                        <TrainingNull />
                                    )}
                                </div>

                                {/* {userInfo.subscribe.working ? (
                                    <div className="training-wrapper">
                                        {Object.keys(courses).length ? (
                                            <>
                                                <h2 className="title training__title">
                                                    Мое обучение
                                                    <span>
                                                        (
                                                        {
                                                            Object.keys(courses)
                                                                .length
                                                        }
                                                        )
                                                    </span>
                                                </h2>
                                                <div className="training-block-wrapper">
                                                    {Object.keys(courses).map(
                                                        (key, index) => (
                                                            <TrainingBlock
                                                                {...courses[
                                                                    key
                                                                ]}
                                                                completedLessonsTitle={
                                                                    checkDeclension(
                                                                        courses[
                                                                            key
                                                                        ]
                                                                            .completedLessons
                                                                            .length,
                                                                        [
                                                                            "урок",
                                                                            "урока",
                                                                            "уроков",
                                                                        ]
                                                                    ).title
                                                                }
                                                                master={
                                                                    masters[
                                                                        courses[
                                                                            key
                                                                        ]
                                                                            .masterId
                                                                    ]
                                                                }
                                                                onClickHiddenUserCourse={
                                                                    onClickHiddenUserCourse
                                                                }
                                                                key={`training-block-${index}`}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </>
                                        ) : (
                                            <TrainingNull />
                                        )}
                                    </div>
                                ) : (
                                    <PaymentSubscribeProlongation />
                                )} */}
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
