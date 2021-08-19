import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import ReactWebMediaPlayer from "react-web-media-player";

import {
    fetchPassingCourseLessonMaterial,
    fetchCertificateCourse,
} from "../redux/actions/passing";

import {
    Loader,
    PassingLessonsList,
    PassingMaterials,
    PassingTimecodes,
} from "../components/";

import Err404 from "./Err404";

const PassingCourse = ({
    match: {
        params: {courseId, lessonNum},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {user, courses, isLoaded} = useSelector(({user}) => user);

    const PlayerRef = React.useRef();

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId, lessonNum, isLoaded]);

    const setTime = (seconds) => {
        PlayerRef.current.store.dispatch({
            type: "UPDATE_ASKED_TIME",
            payload: {askedTime: seconds},
        });
    };

    const downloadFile = (title, index) => {
        dispatch(
            fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title)
        );
    };

    const getCertificate = () => {
        dispatch(
            fetchCertificateCourse(
                courseId,
                "Сертификат «Шитьё мишек изо льна»"
            )
        );
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
                    courses[courseId] ? (
                        courses[courseId].lessons[lessonIndex].materials ||
                        courses[courseId].lessons[lessonIndex].timecodes ? (
                            <section className="passing">
                                <div className="container">
                                    <div className="passing-wrapper">
                                        <div className="passing-top">
                                            <div className="passing-top-text">
                                                <span className="subtitle__mb passing-top-text__subtitle">
                                                    {courses[courseId].title} (
                                                    {lessonNum} урок)
                                                </span>
                                                <h2 className="passing-top-text__title">
                                                    {
                                                        courses[courseId]
                                                            .lessons[
                                                            lessonIndex
                                                        ].title
                                                    }
                                                </h2>
                                            </div>
                                            {courses[courseId].lessons[
                                                lessonIndex + 1
                                            ] ? (
                                                (courses[courseId].lessons[
                                                    lessonIndex + 1
                                                ].extraLesson &&
                                                    user.pro) ||
                                                (courses[courseId].lessons[
                                                    lessonIndex + 1
                                                ] &&
                                                    !courses[courseId].lessons[
                                                        lessonIndex + 1
                                                    ].extraLesson) ? (
                                                    <Link
                                                        to={`/go/passing/${courseId}/${
                                                            lessonIndex + 2
                                                        }`}
                                                        className="passing-top-next"
                                                    >
                                                        К следующему уроку →
                                                    </Link>
                                                ) : null
                                            ) : null}
                                        </div>
                                        <div className="passing-video-wrapper">
                                            <ReactWebMediaPlayer
                                                ref={PlayerRef}
                                                title={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].title
                                                }
                                                color="#dd9e5e"
                                                video={`${
                                                    process.env
                                                        .REACT_APP_API_DOMEN
                                                }/courses/${courseId}/video/${lessonNum}/${localStorage.getItem(
                                                    "accessToken"
                                                )}`}
                                                height={
                                                    document.documentElement
                                                        .clientWidth > 900
                                                        ? 500
                                                        : 350
                                                }
                                                width="100%"
                                                thumbnail={`${process.env.REACT_APP_DOMEN}/${courses[courseId].lessons[lessonIndex].image}`}
                                            />
                                        </div>
                                        <PassingLessonsList
                                            lessons={courses[courseId].lessons}
                                            pro={user.pro}
                                            courseId={courseId}
                                            lessonActive={lessonNum}
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

                                            <PassingMaterials
                                                materials={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].materials
                                                }
                                                downloadFunc={downloadFile}
                                            />

                                            <PassingTimecodes
                                                setTime={setTime}
                                                timecodes={
                                                    courses[courseId].lessons[
                                                        lessonIndex
                                                    ].timecodes
                                                }
                                            />
                                        </div>
                                        <div className="passing-lesson-bottom-btn">
                                            {user.pro &&
                                            !courses[courseId].lessons[
                                                lessonIndex+1
                                            ] ? (
                                                <button
                                                    className="btn"
                                                    onClick={getCertificate}
                                                >
                                                    Получить сертификат
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ) : (
                            history.push("/go/training")
                        )
                    ) : (
                        history.push("/go/training")
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

export default PassingCourse;
