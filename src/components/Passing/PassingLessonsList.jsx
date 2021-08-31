import React from "react";

import {PassingLessonsListItem} from "../";

const PassingCoursesList = ({lessons, lessonActive, courseId}) => {
    return (
        <div className="passing-lessons-list">
            <div className="passing-lessons-list-block">
                <p className="subtitle passing-lessons-list-block__subtitle">
                    Шитьё мишек изо льна
                </p>
                <div className="passing-lessons-list-block-items-wrapper">
                    {lessons.map((lesson, index) =>
                        !lesson.extraLesson ? (
                            <>
                                <PassingLessonsListItem
                                    {...lesson}
                                    courseId={courseId}
                                    active={
                                        lessonActive == index + 1 ? true : false
                                    }
                                    num={index + 1}
                                    key={`passing-lessons-list-item-${index}`}
                                />
                            </>
                        ) : null
                    )}
                </div>
            </div>

            <div className="passing-lessons-list-block">
                <p className="subtitle passing-lessons-list-block__subtitle">
                    Дополнительные материалы
                </p>
                <div className="passing-lessons-list-block-items-wrapper">
                    {lessons.map((lesson, index) =>
                        lesson.extraLesson ? (
                            <>
                                <PassingLessonsListItem
                                    {...lesson}
                                    courseId={courseId}
                                    active={
                                        lessonActive == index + 1 ? true : false
                                    }
                                    num={index + 1}
                                    key={`passing-lessons-list-item-${index}`}
                                />
                            </>
                        ) : null
                    )}
                </div>
            </div>
        </div>
    );
};

export default PassingCoursesList;
