import React from "react";

import {PassingLessonsListItem} from "../";

const PassingCoursesList = ({lessons, lessonActive, courseId}) => {
    const [isExtraLessons, setIsExtraLessons] = React.useState(false);

    React.useEffect(() => {
        lessons.map((lesson) => {
            if (lesson.extraLesson) {
                setIsExtraLessons(true);
            }
        });
    }, []);

    return (
        <div className="passing-lessons-list">
            <div
                className={`passing-lessons-list-block ${
                    isExtraLessons ? "" : "long"
                }`}
            >
                <p className="subtitle passing-lessons-list-block__subtitle">
                    Шитьё мишек изо льна
                </p>
                <div className="passing-lessons-list-block-items-wrapper">
                    {lessons.map((lesson, index) =>
                        !lesson.extraLesson ? (
                            <PassingLessonsListItem
                                {...lesson}
                                courseId={courseId}
                                active={
                                    lessonActive == index + 1 ? true : false
                                }
                                num={index + 1}
                                key={`passing-lessons-list-item-${index}`}
                            />
                        ) : null
                    )}
                </div>
            </div>

            {isExtraLessons ? (
                <div className="passing-lessons-list-block">
                    <p className="subtitle passing-lessons-list-block__subtitle">
                        Дополнительные материалы
                    </p>
                    <div className="passing-lessons-list-block-items-wrapper">
                        {lessons.map((lesson, index) =>
                            lesson.extraLesson ? (
                                <PassingLessonsListItem
                                    {...lesson}
                                    courseId={courseId}
                                    active={
                                        lessonActive == index + 1 ? true : false
                                    }
                                    num={index + 1}
                                    key={`passing-lessons-list-extra-item-${index}`}
                                />
                            ) : null
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default PassingCoursesList;
