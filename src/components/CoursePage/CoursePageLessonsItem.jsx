import React from "react";
import {Link} from "react-router-dom";

const CoursePageLessonsItem = ({
    num,
    courseId,
    title,
    description,
    hours,
    minutes,
    openVideoPlaecholder,
    closeVideoPlaecholder,
    onClickAddCourse,
    isLogin,
    isAdd,
}) => {
    return (
        <>
            {isLogin ? (
                isAdd ? (
                    <Link
                        to={`/go/passing/${courseId}/${num}`}
                        className="course-page-lessons-list-item"
                    >
                        <div className="course-page-lessons-list-item-top">
                            <div className="course-page-lessons-list-item-top-left">
                                <h4 className="course-page-lessons-list-item-top-left__title">
                                    <span>{num}.</span>
                                    {title}
                                </h4>
                            </div>
                            <div className="course-page-lessons-list-item-top-right">
                                <span
                                    className={`course-page-lessons-list-item-top-right__duration`}
                                >
                                    {hours.num === 0
                                        ? `${minutes.title}`
                                        : `${hours.title} ${minutes.title}`}
                                </span>
                            </div>
                        </div>

                        {description ? (
                            <p className="course-page-lessons-list-item__description">
                                {description}
                            </p>
                        ) : null}
                    </Link>
                ) : (
                    <div
                        className="course-page-lessons-list-item"
                        onClick={() =>
                            onClickAddCourse(`/go/passing/${courseId}/${num}`)
                        }
                    >
                        <div className="course-page-lessons-list-item-top">
                            <div className="course-page-lessons-list-item-top-left">
                                <h4 className="course-page-lessons-list-item-top-left__title">
                                    <span>{num}.</span>
                                    {title}
                                </h4>
                            </div>
                            <div className="course-page-lessons-list-item-top-right">
                                <span
                                    className={`course-page-lessons-list-item-top-right__duration`}
                                >
                                    {hours.num === 0
                                        ? `${minutes.title}`
                                        : `${hours.title} ${minutes.title}`}
                                </span>
                            </div>
                        </div>
                        {description ? (
                            <p className="course-page-lessons-list-item__description">
                                {description}
                            </p>
                        ) : null}
                    </div>
                )
            ) : (
                <div
                    className="course-page-lessons-list-item"
                    onClick={
                        num === 1 ? closeVideoPlaecholder : openVideoPlaecholder
                    }
                >
                    <div className="course-page-lessons-list-item-top">
                        <div className="course-page-lessons-list-item-top-left">
                            <h4 className="course-page-lessons-list-item-top-left__title">
                                <span>{num}.</span>
                                {title}
                            </h4>
                        </div>
                        <div className="course-page-lessons-list-item-top-right">
                            <span
                                className={`course-page-lessons-list-item-top-right__duration`}
                            >
                                {hours.num === 0
                                    ? `${minutes.title}`
                                    : `${hours.title} ${minutes.title}`}
                            </span>
                        </div>
                    </div>
                    {description ? (
                        <p className="course-page-lessons-list-item__description">
                            {description}
                        </p>
                    ) : null}
                </div>
            )}
        </>
    );
};

export default CoursePageLessonsItem;
