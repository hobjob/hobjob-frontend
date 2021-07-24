import React from "react";
import {useSelector} from "react-redux";

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
    const {courses, isLoaded} = useSelector(({user}) => user);
    const {timecode} = useSelector(({passing}) => passing);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [courseId, lessonNum]);

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
                    <section className="passing">
                        <div className="container">
                            <div className="passing-wrapper">
                                <div className="passing-top-text">
                                    <span className="subtitle__mb passing-top-text__subtitle">
                                        {courses[courseId].title} ({lessonNum}{" "}
                                        урок)
                                    </span>
                                    <h2 className="passing-top-text__title">
                                        {
                                            courses[courseId].lessons[
                                                lessonIndex
                                            ].title
                                        }
                                    </h2>
                                </div>
                                <div className="passing-video-wrapper">
                                    <iframe
                                        width="100%"
                                        height="500"
                                        src={`${courses[courseId].lessons[lessonIndex].videoUrl}?start=${timecode.seconds}&autoplay=1`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

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
                                    />

                                    <PassingTimecodes
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
