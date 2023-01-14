import React from "react";

import CoursePagePassingImage from "../../../assets/images/courses-page-passing.jpg";
import CoursePagePassingImageMedia from "../../../assets/images/courses-page-passing-media.jpg";

const CoursePagePassing: React.FC = () => {
    return (
        <section className="course-page-passing">
            <div className="container">
                <h2 className="title__mb course-page-passing__title">
                    Как проходит обучение?
                </h2>

                <picture>
                    <source
                        media="(max-width: 750px)"
                        srcSet={CoursePagePassingImageMedia}
                    />

                    <img
                        className="course-page-passing__img"
                        alt=""
                        src={CoursePagePassingImage}
                    />
                </picture>
            </div>
        </section>
    );
};

export default CoursePagePassing;
