import React from "react";
import {Link} from "react-router-dom";

import {CoursePassingLesson} from "../../models/ICoursePassing";

interface PassingLessonsListItemProps extends CoursePassingLesson {
    active: boolean;
    courseId: string;
    num: number;
}

const PassingLessonsListItem: React.FC<PassingLessonsListItemProps> = ({
    image,
    title,
    active,
    courseId,
    num,
}) => {
    return (
        <>
            {active ? (
                <div
                    className={`passing-lessons-list-block-item ${
                        active ? "active" : ""
                    }`}
                >
                    <div className="passing-lessons-list-block-item-cover">
                        <div
                            className="passing-lessons-list-block-item-cover-img"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                            }}
                        ></div>
                    </div>
                    <p className="passing-lessons-list-block-item__title">
                        {title}
                    </p>
                </div>
            ) : (
                <Link
                    to={`/go/passing/${courseId}/${num}`}
                    className={`passing-lessons-list-block-item ${
                        active ? "active" : ""
                    }`}
                >
                    <div className="passing-lessons-list-block-item-cover">
                        <div
                            className="passing-lessons-list-block-item-cover-img"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                            }}
                        ></div>
                    </div>
                    <p className="passing-lessons-list-block-item__title">
                        {title}
                    </p>
                </Link>
            )}
        </>
    );
};

export default PassingLessonsListItem;
