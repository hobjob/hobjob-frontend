import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import moment from "moment";
import {animateScroll as scroll} from "react-scroll";

import {fetchUserCourses} from "../redux/actions/user";

import {fetchPassingCourseLessonMaterial} from "../redux/actions/passing";

import {
    Loader,
    PassingTopText,
    PassingLessonsList,
    PassingVideo,
    PassingMaterials,
    PassingMaster,
} from "../components/";

const PassingCourse = ({
    match: {
        params: {courseId, lessonNum},
    },
}) => {
    const dispatch = useDispatch();

    const {userInfo, courses, isLoadedUserCourses, isLoadedUserInfo} =
        useSelector(({user}) => user);

    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);
    const masters = useSelector(({masters}) => masters.items);

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        scroll.scrollToTop({duration: 500});

        if (!Object.keys(courses).length && isLoadedUserInfo) {
            dispatch(fetchUserCourses());
        }
    }, [courseId, lessonNum, isLoadedUserCourses, isLoadedUserInfo]);

    const downloadFile = (title, index) => {
        dispatch(
            fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title)
        );
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedUserCourses && isLoadedUserInfo && isLoadedMasters ? (
                    courses[courseId] &&
                    courses[courseId].lessons[lessonIndex] ? (
                        <>
                            <Helmet>
                                <title>
                                    {
                                        courses[courseId].lessons[lessonIndex]
                                            .title
                                    }{" "}
                                    - HobJob
                                </title>
                            </Helmet>

                            <section className="passing">
                                <div className="container">
                                    <div className="passing-wrapper">
                                        <div className="passing-top">
                                            <PassingTopText
                                                title={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].title
                                                }
                                            />
                                        </div>

                                        <PassingVideo
                                            {...courses[courseId]}
                                            image={
                                                courses[courseId].lessons[
                                                    lessonIndex
                                                ].image
                                            }
                                            courseId={courseId}
                                            lessonNum={lessonNum}
                                            lessonIndex={lessonIndex}
                                        />

                                        <PassingLessonsList
                                            lessons={courses[courseId].lessons}
                                            courseId={courseId}
                                            lessonActive={lessonNum}
                                            {...courses[courseId]}
                                        />

                                        <div className="passing-lesson-info">
                                            <div className="passing-lesson-info-block-text">
                                                <h4 className="passing-lesson-info-block-text__title">
                                                    Описание
                                                </h4>
                                                <p className="passing-lesson-info-block-text__description">
                                                    {
                                                        courses[courseId]
                                                            .lessons[
                                                            lessonIndex
                                                        ].description
                                                    }
                                                </p>
                                            </div>

                                            {courses[courseId].lessons[
                                                lessonIndex
                                            ].materials.length ? (
                                                <PassingMaterials
                                                    materials={
                                                        courses[courseId]
                                                            .lessons[
                                                            lessonIndex
                                                        ].materials
                                                    }
                                                    downloadFunc={downloadFile}
                                                />
                                            ) : null}
                                        </div>

                                        <div className="passing-bottom-block">
                                            <PassingMaster
                                                {...masters[
                                                    courses[courseId].masterId
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <Redirect to="/go/training" />
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

export default PassingCourse;
