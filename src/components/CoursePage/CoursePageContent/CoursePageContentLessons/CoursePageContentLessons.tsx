import React from "react";

import {CourseGoodLesson} from "../../../../models/Course/ICourseGood";

import {CoursePageContentLessonsItem} from "../../../";

interface CoursePageContentLessonsProps {
    lessons: CourseGoodLesson[];
}

const CoursePageContentLessons: React.FC<CoursePageContentLessonsProps> = ({
    lessons,
}) => {
    return (
        <div className="course-page-content-list">
            <h2 className="course-page__title mb course-page-content-list__title">
                Уроки в этом курсе
			</h2>
			
            <div className="course-page-content-list-shadow"></div>

            <div className="course-page-content-list-items-wrapper">
                {lessons.map((lesson, index) => (
                    <CoursePageContentLessonsItem
                        key={`course-page-content-list-item-${index}`}
                        num={index + 1}
                        {...lesson}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursePageContentLessons;
