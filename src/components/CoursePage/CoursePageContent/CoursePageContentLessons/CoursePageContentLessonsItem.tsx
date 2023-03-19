import React from "react";
import {Link as LinkScroll} from "react-scroll";

import {CourseGoodLesson} from "../../../../models/Course/ICourseGood";

interface CoursePageContentLessonsItemProps extends CourseGoodLesson {
    num: number;
}

const CoursePageContentLessonsItem: React.FC<
    CoursePageContentLessonsItemProps
> = ({num, title, description}) => {
    return (
        <>
            {num === 1 ? (
                <div className="course-page-content-list-lessons-item">
                    <h4 className="course-page-content-list-lessons-item__title">
                        {title}
                    </h4>
                    <p className="course-page-content-list-lessons-item__description">
                        {description}
                    </p>
                </div>
            ) : (
                <LinkScroll
                    to="price"
                    spy={true}
                    smooth={true}
                    offset={-25}
                    duration={1000}
                    className="course-page-content-list-lessons-item"
                >
                    <h4 className="course-page-content-list-lessons-item__title">
                        {title}
                    </h4>
                    <p className="course-page-content-list-lessons-item__description">
                        {description}
                    </p>
                </LinkScroll>
            )}
        </>
    );
};

export default CoursePageContentLessonsItem;
