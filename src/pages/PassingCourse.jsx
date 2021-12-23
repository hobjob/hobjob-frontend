import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import NumberFormat from "react-number-format";
import {Helmet} from "react-helmet";
import moment from "moment";
import {animateScroll as scroll} from "react-scroll";

import {fetchUserCourses} from "../redux/actions/user";

import {fetchPassingCourseLessonMaterial} from "../redux/actions/passing";

import {
    BtnLoader,
    Loader,
    PassingTopText,
    PassingLessonsList,
    PassingVideo,
    PassingMaterials,
    PassingTimecodes,
    PassingHashtag,
    PassingChat,
} from "../components/";

const PassingCourse = ({
    match: {
        params: {courseId, lessonNum},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [hashtag, setHashtag] = React.useState("");

    const {userInfo, courses, isLoadedUserCourses, isLoadedUserInfo} =
        useSelector(({user}) => user);

    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        scroll.scrollToTop({duration: 500});

        if (!Object.keys(courses).length && isLoadedUserInfo) {
            dispatch(fetchUserCourses());
        }

        if (isLoadedUserCourses && courses[courseId]) {
            setHashtag(
                `#${courses[courseId].hashtag}${moment().format("MM.YYYY")}`
            );
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
                                                {...courses[courseId]}
                                                lessonIndex={lessonIndex}
                                            />
                                        </div>

                                        <PassingVideo
                                            {...courses[courseId]}
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

                                            <PassingTimecodes
                                                isMaterials={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].materials.length
                                                        ? true
                                                        : false
                                                }
                                                timecodes={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].timecodes
                                                }
                                            />
                                        </div>

                                        <div className="passing-bottom-block">
                                            <PassingChat
                                                chatUrl={
                                                    courses[courseId].chatUrl
                                                }
                                            />

                                            <PassingHashtag hashtag={hashtag} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        history.push("/go/training")
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
