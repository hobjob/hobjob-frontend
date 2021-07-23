import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchUser} from "../redux/actions/user";
import {fetchMasters} from "../redux/actions/masters";

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
	
    const {user, courses, isLoaded} = useSelector(({user}) => user);
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(user).length) {
            dispatch(fetchUser());
        }

        if (!Object.keys(masters).length) {
            dispatch(fetchMasters());
        }
    }, []);

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
