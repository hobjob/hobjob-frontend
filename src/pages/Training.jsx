import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {checkDeclension} from "../Functions/checkDeclension";

import {fetchUserCourses, hiddenUserCourse} from "../redux/actions/user";

import {
    Loader,
    TrainingNull,
    TrainingBlock,
    ShopSection,
    PaymentSubscribeProlongation,
} from "../components/";

const Training = () => {
    const dispatch = useDispatch();

    const {userInfo, courses, isLoadedUserInfo, isLoadedUserCourses} =
        useSelector(({user}) => user);
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (!Object.keys(courses).length && isLoadedUserInfo) {
            dispatch(fetchUserCourses());
        }
    }, [isLoadedUserInfo]);

    const onClickHiddenUserCourse = (courseId) => {
        dispatch(hiddenUserCourse(courseId));
    };

    return (
        <>
            <Helmet>
                <title>Мое обучение - HobJob</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo && isLoadedUserCourses && isLoadedMasters ? (
                    <>
                        <section className="training">
                            <div className="container">
                                {userInfo.subscribe.working ? (
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
                                                                completedLessons={
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
                                                                masters={
                                                                    masters
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
                                )}
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
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Training;
