import React from "react";

import {PassingLessonsListItem} from "../";

const PassingCoursesList = ({lessons, lessonActive, courseId}) => {
    return (
        <div className="passing-lessons-list">
            {lessons.map((lesson, index) => (
                <PassingLessonsListItem
                    {...lesson}
                    courseId={courseId}
                    active={lessonActive == index + 1 ? true : false}
                    num={index + 1}
                    key={`passing-lessons-list-item-${index}`}
                />
            ))}
        </div>
    );
};

export default PassingCoursesList;
