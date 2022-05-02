import React from "react";

import {PassingLessonsListItem} from "../";

const PassingCoursesList = ({title, lessons, lessonActive, _id}) => {
    return (
        <div className="passing-lessons-list">
            <div className="passing-lessons-list-block">
                <p className="passing-lessons-list-block__subtitle">{title}</p>
                <div className="passing-lessons-list-block-items-wrapper">
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
        </div>
    );
};

export default PassingCoursesList;
