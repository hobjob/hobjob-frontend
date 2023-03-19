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
        <div className="course-page-content-list-lessons">
            <h2 className="course-page-content-list__title">
                Уроки в этом курсе
			</h2>
			
            <div className="course-page-content-list-lessons-shadow"></div>

            <div className="course-page-content-list-lessons-items-wrapper">
                {lessons.map((lesson, index) => (
                    <CoursePageContentLessonsItem
                        key={`course-page-content-list-lessons-item-${index}`}
                        num={index + 1}
                        {...lesson}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursePageContentLessons;
