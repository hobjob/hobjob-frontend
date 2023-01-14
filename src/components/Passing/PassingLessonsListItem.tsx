import React from "react";
import {Link} from "react-router-dom";

import {PassingCourseLesson} from "../../models/Passing/IPassing";

interface PassingLessonsListItemProps extends PassingCourseLesson {
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
                    className={`passing-lessons-list-item ${
                        active ? "active" : ""
                    }`}
                >
                    <div className="passing-lessons-list-item-cover">
                        <div
                            className="passing-lessons-list-item-cover-img"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}")`,
                            }}
                        ></div>
                    </div>
                    <p className="passing-lessons-list-item__title">
                        {title}
                    </p>
                </div>
            ) : (
                <Link
                    to={`/go/passing/${courseId}/${num}`}
                    className={`passing-lessons-list-item ${
                        active ? "active" : ""
                    }`}
                >
                    <div className="passing-lessons-list-item-cover">
                        <div
                            className="passing-lessons-list-item-cover-img"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}")`,
                            }}
                        ></div>
                    </div>
                    <p className="passing-lessons-list-item__title">
                        {title}
                    </p>
                </Link>
            )}
        </>
    );
};

export default PassingLessonsListItem;
