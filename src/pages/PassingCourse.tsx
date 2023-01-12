import React from "react";
import {useDispatch} from "react-redux";
import {useParams, Navigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {animateScroll as scroll} from "react-scroll";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPassingCourseLessonMaterial} from "../redux/actions/passing";

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

    const {isLoadedUserInfo} = useTypedSelector(
        ({user}) => user
    );

    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);
    const masters = useTypedSelector(({masters}) => masters.items);

    // Array of lessons starts at zero
    const lessonIndex = lessonNum - 1;

    React.useEffect(() => {
        scroll.scrollToTop({duration: 500});

        // if (!Object.keys(courses).length && isLoadedUserInfo) {
        //     dispatch(fetchUserCourses());
        // }
    }, [courseId, lessonNum,isLoadedUserInfo]);

    const downloadFile = (title: string, index: number) => {
        dispatch(
            fetchPassingCourseLessonMaterial(courseId, lessonNum, index, title)
        );
    };

    return (
        <>
            {/* {localStorage.getItem("accessToken") ? (
                isLoadedUserCourses && isLoadedUserInfo && isLoadedMasters ? (
                    Object.keys(courses).length &&
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
                                                subtitle={
                                                    courses[courseId].title
                                                }
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
                                                ].image.size_2048
                                            }
                                            courseId={courseId}
                                            lessonNum={lessonNum}
                                            lessonIndex={lessonIndex}
                                        />

                                        <PassingLessonsList
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

                                        <PassingMaster
                                            {...masters[
                                                courses[courseId].masterId
                                            ]}
                                        />
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <Navigate to="/go/training" />
                    )
                ) : (
                    <Loader />
                )
            ) : (
                <Navigate to="/go/login" />
            )} */}
        </>
    );
};

export default PassingCourse;
