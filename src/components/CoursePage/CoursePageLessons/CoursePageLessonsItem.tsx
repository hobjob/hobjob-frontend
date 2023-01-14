import React from "react";
import {Link} from "react-router-dom";

import {CourseGoodLessons} from "../../../models/Course/ICourseGood";

interface CoursePageLessonsItemProps extends CourseGoodLessons {
    num: number;
    courseId: string;

    openVideoPlaecholder: () => void;
    closeVideoPlaecholder: () => void;
    onClickAddCourse: (Navigate: string) => void;

    isLogin: boolean;
    isAdd: boolean;
    isSubscribe: boolean;
}

const CoursePageLessonsItem: React.FC<CoursePageLessonsItemProps> = ({
    num,
    courseId,
    title,
    description,
    isLogin,
    isAdd,
    isSubscribe,

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
                            <h4 className="course-page-lessons-list-item-top__title">
                                <span>{num}.</span>
                                {title}
                            </h4>
                        </div>

                        {description ? (
                            <p className="course-page-lessons-list-item__description">
                                {description}
                            </p>
                        ) : null}
                    </Link>
                ) : isSubscribe ? (
                    <div
                        className="course-page-lessons-list-item"
                        onClick={() =>
                            onClickAddCourse(`/go/passing/${courseId}/${num}`)
                        }
                    >
                        <div className="course-page-lessons-list-item-top">
                            <h4 className="course-page-lessons-list-item-top__title">
                                <span>{num}.</span>
                                {title}
                            </h4>
                        </div>
                        {description ? (
                            <p className="course-page-lessons-list-item__description">
                                {description}
                            </p>
                        ) : null}
                    </div>
                ) : (
                    <div
                        className="course-page-lessons-list-item"
                        onClick={
                            num === 1
                                ? closeVideoPlaecholder
                                : openVideoPlaecholder
                        }
                    >
                        <div className="course-page-lessons-list-item-top">
                            <h4 className="course-page-lessons-list-item-top__title">
                                <span>{num}.</span>
                                {title}
                            </h4>
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
                        <h4 className="course-page-lessons-list-item-top__title">
                            <span>{num}.</span>
                            {title}
                        </h4>
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
