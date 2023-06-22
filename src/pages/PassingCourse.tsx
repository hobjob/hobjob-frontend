import React from "react";
import {useDispatch} from "react-redux";
import {useParams, Navigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {animateScroll as scroll} from "react-scroll";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    fetchPassingCourseById,
    fetchPassingCourseLessonMaterial,
} from "../redux/actions/passing";

import {
    Loader,
    PassingTopText,
    PassingLessonsList,
    PassingVideo,
    PassingMaterials,
    PassingMaster,
} from "../components/";

const PassingCourse: React.FC = () => {
    const dispatch = useDispatch();
    const {id, num} = useParams();

    const courseId = id ? id : "";
    const lessonNum = num ? parseInt(num) : 1;

    const {isLoadedUserInfo} = useTypedSelector(({user}) => user);
    const {course, isLoadedCourse} = useTypedSelector(({passing}) => passing);

    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);
    const masters = useTypedSelector(({masters}) => masters.items);

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        scroll.scrollToTop({duration: 500});

        if (isLoadedUserInfo) {
            dispatch(fetchPassingCourseById(courseId));
        }
    }, [courseId, lessonNum, isLoadedUserInfo]);

    const downloadFile = (title: string, index: number) => {
        dispatch(
            fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title)
        );
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedCourse && isLoadedUserInfo && isLoadedMasters ? (
                    <>
                        <Helmet>
                            <title>
                                {course.lessons[lessonIndex].title} - HobJob
                            </title>
                        </Helmet>

                        <section className="passing">
                            <div className="container">
                                <div className="passing-wrapper">
                                    <PassingTopText
                                        subtitle={course.title}
                                        title={
                                            course.lessons[lessonIndex].title
                                        }
                                    />

                                    <PassingVideo
                                        {...course}
                                        image={
                                            course.lessons[lessonIndex].image
                                                .size_2048
                                        }
                                        courseId={courseId}
                                        lessonNum={lessonNum}
                                        lessonIndex={lessonIndex}
                                    />

                                    <PassingLessonsList
                                        lessonActive={lessonNum}
                                        {...course}
                                    />

                                    <div className="passing-lesson-info">
                                        <div className="passing-lesson-info-block-text">
                                            <h4 className="passing-lesson-info-block-text__title">
                                                Описание
                                            </h4>
                                            <p className="passing-lesson-info-block-text__description">
                                                {
                                                    course.lessons[lessonIndex]
                                                        .description
                                                }
                                            </p>
                                        </div>

                                        {course.lessons[lessonIndex].materials
                                            .length ? (
                                            <PassingMaterials
                                                materials={
                                                    course.lessons[lessonIndex]
                                                        .materials
                                                }
                                                downloadFunc={downloadFile}
                                            />
                                        ) : null}
                                    </div>
{/* 
                                    <PassingMaster
                                        {...masters[course.masterId]}
                                    /> */}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <Loader />
                )
            ) : (
                <Navigate to="/go/login" />
            )}
        </>
    );
};

export default PassingCourse;
