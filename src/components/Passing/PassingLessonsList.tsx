import React from "react";

import {PassingLessonsListItem} from "../";

import {CoursePassingLesson} from "../../models/Course/ICoursePassing";

interface PassingCoursesListProps {
    title: string;
    lessons: CoursePassingLesson[];
    lessonActive: number;
    _id: string;
}

const PassingCoursesList: React.FC<PassingCoursesListProps> = ({
    title,
    lessons,
    lessonActive,
    _id,
}) => {
    return (
        <div className="passing-lessons-list">
            <div className="passing-lessons-list-items-wrapper">
                {lessons.map((lesson, index) => (
                    <PassingLessonsListItem
                        {...lesson}
                        courseId={_id}
                        active={lessonActive == index + 1 ? true : false}
                        num={index + 1}
                        key={`passing-lessons-list-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PassingCoursesList;
