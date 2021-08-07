import React from "react";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    Loader,
    TrainingNull,
    TrainingBlock,
    ShopSection,
    NotEmailConfirmed,
} from "../components/";

import Err404 from "./Err404";

const Training = () => {
    const {user, courses, isLoaded} = useSelector(({user}) => user);
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //склонение ["урок", "урока", "уроков"]
    const checkDeclension = (num, title) => {
        let result;

        if (num % 100 >= 5 && num % 100 <= 20) {
            result = num + " " + title[2];
        } else {
            if (num % 10 === 1) {
                result = num + " " + title[0];
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                result = num + " " + title[1];
            } else {
                result = num + " " + title[2];
            }
        }

        return result;
    };

    return (
        <>
            <Helmet>
                <title>Мое обучение - HobJob</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoaded && isLoadedMasters ? (
                    user.confirmed ? (
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
                                                                completedLessons={checkDeclension(
                                                                    courses[key]
                                                                        .completedLessons
                                                                        .length,
                                                                    [
                                                                        "урок",
                                                                        "урока",
                                                                        "уроков",
                                                                    ]
                                                                )}
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

export default Training;
