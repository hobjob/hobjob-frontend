import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ReactWebMediaPlayer from "react-web-media-player";

import {
    fetchPassingCourseLessonVideo,
    fetchPassingCourseLessonMaterial,
    fetchCompletePassingCourseLesson,
} from "../redux/actions/passing";

import {
    Loader,
    PassingLessonsList,
    PassingMaterials,
    PassingTimecodes,
    PassingVideoLoader,
} from "../components/";

import Err404 from "./Err404";

const PassingCourse = ({
    match: {
        params: {courseId, lessonNum},
    },
}) => {
    const dispatch = useDispatch();

    const {courses, isLoaded} = useSelector(({user}) => user);
    const {videoUrl, percentLoading} = useSelector(({passing}) => passing);

    const PlayerRef = React.useRef();

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (isLoaded) {
            dispatch(fetchPassingCourseLessonVideo(courseId, lessonNum));
        }
    }, [courseId, lessonNum, isLoaded]);

    React.useEffect(() => {
        if (courses[courseId]) {
            const isLesson = courses[courseId].completedLessons.map((item) => {
                if (parseInt(lessonNum) === item) {
                    return true;
                }

                return false;
            });

            if (!isLesson[lessonIndex] && isLoaded) {
                dispatch(fetchCompletePassingCourseLesson(courseId, lessonNum));
            }
        }
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

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
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
                                                courses[courseId].lessons[
                                                    lessonIndex
                                                ].title
                                            }
                                        </h2>
                                    </div>
                                    {courses[courseId].lessons[
                                        lessonIndex + 1
                                    ] ? (
                                        <Link
                                            to={`/go/passing/${courseId}/${
                                                lessonIndex + 2
                                            }`}
                                            className="passing-top-next"
                                        >
                                            К следующему уроку →
                                        </Link>
                                    ) : null}
                                </div>

                                {videoUrl !== "" ? (
                                    <div className="passing-video-wrapper">
                                        <ReactWebMediaPlayer
                                            ref={PlayerRef}
                                            title={
                                                courses[courseId].lessons[
                                                    lessonIndex
                                                ].title
                                            }
                                            color="#dd9e5e"
                                            video={`${videoUrl}`}
                                            height="500"
                                            width="100%"
                                            thumbnail={`${process.env.REACT_APP_DOMEN}/${courses[courseId].lessons[lessonIndex].image}`}
                                        />
                                    </div>
                                ) : (
                                    <PassingVideoLoader
                                        percentLoading={percentLoading}
                                    />
                                )}

                                <PassingLessonsList
                                    lessons={courses[courseId].lessons}
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
                                                courses[courseId].lessons[
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
                            </div>
                        </div>
                    </section>
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
