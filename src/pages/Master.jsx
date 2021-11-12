import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchUserMasterCourses} from "../redux/actions/user";

import {MasterCoursesList, MasterBalance, Loader} from "../components/";

import Err404 from "./Err404";

const Master = () => {
    const dispatch = useDispatch();
    const {userInfo, isLoadedUserInfo, masterCourses} = useSelector(
        ({user}) => user
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (!masterCourses.length && isLoadedUserInfo) {
            dispatch(fetchUserMasterCourses());
        }
    }, [isLoadedUserInfo]);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo ? (
                    userInfo.master === "confirmed" ? (
                        <>
                            <Helmet>
                                <title>Для мастера - HobJob</title>
                            </Helmet>
                            <section className="master">
                                <div className="container">
                                    <div className="master-wrapper">
                                        <div className="master-text">
                                            <h2 className="title master-text__title">
                                                Здравствуйте, {userInfo.name}
                                            </h2>
                                            <p className="master-text__description">
                                                Здесь будут отображаться продажи
                                                ваших курсов:
                                            </p>
                                        </div>
                                        <div className="master-info">
                                            <MasterCoursesList />
                                            <MasterBalance {...userInfo} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <Err404 />
                    )
                ) : (
                    <Loader />
                )
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Master;
