import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {checkDeclension} from "../Functions/checkDeclension";

import {fetchUserCourses} from "../redux/actions/user";

import {
    Loader,
    TrainingNull,
    TrainingBlock,
    ShopSection,
    NotEmailConfirmed,
} from "../components/";

import Err404 from "./Err404";

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

    return (
        <>
            <Helmet>
                <title>Мое обучение - HobJob</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo && isLoadedUserCourses && isLoadedMasters ? (
                    userInfo.confirmed ? (
                        <>
                            <section className="training">
                                <div className="container">
                                    <div className="training-wrapper">
                                        {Object.keys(courses).length ? (
                                            <>
                                                <h2 className="title__mb training__title">
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
                                </div>
                            </section>

                            <ShopSection title="Учитесь на практике" />
                        </>
                    ) : (
                        <NotEmailConfirmed />
                    )
                ) : (
                    <Loader />
                )
            ) : (
                <Err404 />
            )}
        </>
    );
};

export default Training;
