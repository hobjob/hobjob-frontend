import React from "react";

import {CoursePageLessonsVideo, CoursePageLessonsItem} from "../";

import {checkDeclension} from "../../Functions/checkDeclension";

const CoursePageLessons = ({lessons, _id}) => {
    return (
        <section className="course-page-lessons">
            <div className="container">
                <div className="course-page-lessons-wrapper">
                    <div className="course-page-lessons-video">
                        <CoursePageLessonsVideo
                            courseId={_id}
                            image={lessons[0].image}
                        />
                    </div>
                    <div className="course-page-lessons-list">
                        <h2 className="course-page-lessons-list__title">
                            Уроки в этом курсе
                        </h2>

                        {lessons.map((lesson, index) => (
                            <CoursePageLessonsItem
                                key={`course-page-lessons-list-item-${index}`}
                                index={index}
                                hours={
                                    checkDeclension(
                                        parseFloat(
                                            lesson.video.duration.split(":")[0]
                                        ),
                                        ["час", "часа", "часов"]
                                    )
                                }
                                minutes={
                                    checkDeclension(
                                        parseFloat(
                                            lesson.video.duration.split(":")[1]
                                        ),
                                        ["минута", "минуты", "минут"]
                                    )
                                }
                                {...lesson}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageLessons;
