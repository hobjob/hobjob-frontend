import React from "react";

import {CoursePageLessonsVideo, CoursePageLessonsItem} from "../";

import {checkDeclension} from "../../Functions/checkDeclension";

const CoursePageLessons = ({
    lessons,
    _id,
    isLogin,
    onClickAddCourse,
    isAdd,
}) => {
    const [videoPlaecholder, setVideoPlaecholder] = React.useState(false);
    const [videoPlaecholderAnimateClose, setVideoPlaecholderAnimateClose] =
        React.useState(false);

    const openVideoPlaecholder = () => {
        setVideoPlaecholder(true);
    };

    const closeVideoPlaecholder = () => {
        setVideoPlaecholderAnimateClose(true);

        setTimeout(() => {
            setVideoPlaecholderAnimateClose(false);
            setVideoPlaecholder(false);
        }, 180);
    };

    return (
        <section className="course-page-lessons">
            <div className="container">
                <div className="course-page-lessons-wrapper">
                    <div
                        className={`course-page-lessons-video ${
                            videoPlaecholder ? "disabled" : ""
                        }`}
                    >
                        {videoPlaecholder ? (
                            <div
                                className={`course-page-lessons-video-plaecholder ${
                                    videoPlaecholderAnimateClose ? "close" : ""
                                }`}
                            >
                                <p className="course-page-lessons-video-plaecholder__description">
                                    Для того чтобы продолжить просмотр других
                                    уроков, оформите подписку
                                </p>
                                <a
                                    href="/go/register"
                                    className="course-page-lessons-video-plaecholder__link"
                                >
                                    Открыть все уроки за 1 ₽
                                </a>
                            </div>
                        ) : null}

                        <CoursePageLessonsVideo
                            courseId={_id}
                            videoPlaecholder={videoPlaecholder}
                            image={lessons[0].image}
                        />
                    </div>
                    <div className="course-page-lessons-list">
                        <h2 className="course-page-lessons-list__title">
                            Уроки в этом курсе
                        </h2>

                        {lessons.map((lesson, index) => (
                            <CoursePageLessonsItem
                                key={`course-page-lessons-list-item-${index}`}
                                active={index === 0}
                                num={index + 1}
                                hours={checkDeclension(
                                    parseFloat(
                                        lesson.video.duration.split(":")[0]
                                    ),
                                    ["час", "часа", "часов"]
                                )}
                                openVideoPlaecholder={openVideoPlaecholder}
                                closeVideoPlaecholder={closeVideoPlaecholder}
                                onClickAddCourse={onClickAddCourse}
                                minutes={checkDeclension(
                                    parseFloat(
                                        lesson.video.duration.split(":")[1]
                                    ),
                                    ["минута", "минуты", "минут"]
                                )}
                                courseId={_id}
                                isLogin={isLogin}
                                isAdd={isAdd}
                                {...lesson}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageLessons;
