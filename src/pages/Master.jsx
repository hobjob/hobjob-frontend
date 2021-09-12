import React from "react";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {MasterCoursesList, MasterBalance, Loader} from "../components/";

import Err404 from "./Err404";

const Master = () => {
    const {user, isLoaded} = useSelector(({user}) => user);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
                    user.master === "confirmed" ? (
                        <>
                            <Helmet>
                                <title>Для мастера - HobJob</title>
                            </Helmet>
                            <section className="master">
                                <div className="container">
                                    <div className="master-wrapper">
                                        <div className="master-text">
                                            <h2 className="title master-text__title">
                                                Здравствуйте, {user.name}
                                            </h2>
                                            <p className="master-text__description">
                                                Здесь будут отображаться продажи
                                                ваших курсов:
                                            </p>
                                        </div>
                                        <div className="master-info">
                                            <MasterCoursesList />
                                            <MasterBalance {...user} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <Err404 />
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

export default Master;
