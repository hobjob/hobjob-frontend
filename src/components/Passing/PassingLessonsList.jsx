import React from "react";

import {PassingLessonsListItem} from "../";

const PassingCoursesList = ({
    title,
    lessons,
    lessonActive,
    _id,
    isTesting,
    openModalBuyWindow,
}) => {
    return (
        <div className="passing-lessons-list">
            <div className="passing-lessons-list-block">
                <p className="passing-lessons-list-block__subtitle">
                    {title}
                </p>
                <div className="passing-lessons-list-block-items-wrapper">
                    {lessons.map((lesson, index) =>
                        !lesson.extraLesson ? (
                            <PassingLessonsListItem
                                {...lesson}
                                courseId={_id}
                                active={
                                    lessonActive == index + 1 ? true : false
                                }
                                isTesting={isTesting}
                                extraLesson={lesson.extraLesson}
                                openModalBuyWindow={openModalBuyWindow}
                                num={index + 1}
                                key={`passing-lessons-list-item-${index}`}
                            />
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
};

export default PassingCoursesList;
