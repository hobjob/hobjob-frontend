import React from "react";

import feedbacktest from "../../../assets/images/feedbacktest.jpg";
import feedbacktestMedia from "../../../assets/images/feedbacktest-media.jpg";

const CoursePageFeedbacks: React.FC = () => {
    return (
        <section className="course-page-feedbacks">
            <div className="container">
                <div className="course-page-feedbacks-wrapper">
                    <h2 className="title__mb course-page-feedbacks__title">
                        Отзывы о курсе:
                    </h2>

                    <picture>
                        <source
                            media="(max-width: 500px)"
                            srcSet={feedbacktestMedia}
                        />

                        <img
                            className="course-page-feedbacks__image"
                            alt=""
                            src={feedbacktest}
                        />
                    </picture>

                    <div className="course-page-feedbacks-link">
                        <a
                            href=""
                            className="btn course-page-feedbacks-link__link"
                        >
                            Смотреть все отзывы
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageFeedbacks;
