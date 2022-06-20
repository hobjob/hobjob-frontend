import React from "react";
import {Link} from "react-router-dom";

import {CourseGoodLessons} from "../../models/ICourseGood";

interface CoursePageLessonsItemProps extends CourseGoodLessons {
    num: number;
	courseId: string;
	
    hours: {
        num: number;
        title: string;
    };
    minutes: {
        num: number;
        title: string;
    };

    openVideoPlaecholder: () => void;
    closeVideoPlaecholder: () => void;
    onClickAddCourse: (Navigate: string) => void;

    isLogin: boolean;
    isAdd: boolean;
}

const CoursePageLessonsItem: React.FC<CoursePageLessonsItemProps> = ({
    num,
    courseId,
    title,
    description,
    hours,
	minutes,
    isLogin,
    isAdd,
	
    openVideoPlaecholder,
    closeVideoPlaecholder,
	onClickAddCourse,
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
