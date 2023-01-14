import React from "react";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

import {CoursePageLessonsVideo, CoursePageLessonsItem} from "../../";

import {CourseGoodLessons} from "../../../models/Course/ICourseGood";

interface CoursePageLessonsProps {
    lessons: CourseGoodLessons[];
    _id: string;
    isLogin: boolean;
    isAdd: boolean;
    isSubscribe: boolean;
    onClickAddCourse: (Navigate: string) => void;
}

const CoursePageLessons: React.FC<CoursePageLessonsProps> = ({
    lessons,
    _id,
    isLogin,
    isAdd,
    isSubscribe,
    onClickAddCourse,
}) => {
    const [videoPlaecholder, setVideoPlaecholder] =
        React.useState<boolean>(false);
    const [videoPlaecholderAnimateClose, setVideoPlaecholderAnimateClose] =
        React.useState<boolean>(false);

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
                                    Чтобы продолжить просмотр других уроков,
                                    зарегистрируйтесь и оформите подписку или
                                    купите этот курс навсегда
                                </p>
                                <LinkScroll
                                    to="price"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={1000}
                                    className="course-page-lessons-video-plaecholder__link"
                                >
                                    Начать обучение
                                </LinkScroll>
                            </div>
                        ) : null}

                        <CoursePageLessonsVideo
                            courseId={_id}
                            image={lessons[0].image}
                            videoPlaecholder={videoPlaecholder}
                        />
                    </div>
                    <div className="course-page-lessons-list">
                        <h2 className="course-page-lessons-list__title">
                            Уроки в этом курсе
                        </h2>

                        <div className="course-page-lessons-list-item-shadow"></div>

                        <div className="course-page-lessons-list-item-wrapper">
                            {lessons.map((lesson, index) => (
                                <CoursePageLessonsItem
                                    key={`course-page-lessons-list-item-${index}`}
                                    num={index + 1}
                                    openVideoPlaecholder={openVideoPlaecholder}
                                    closeVideoPlaecholder={
                                        closeVideoPlaecholder
                                    }
                                    onClickAddCourse={onClickAddCourse}
                                    courseId={_id}
                                    isLogin={isLogin}
                                    isAdd={isAdd}
                                    isSubscribe={isSubscribe}
                                    {...lesson}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageLessons;
