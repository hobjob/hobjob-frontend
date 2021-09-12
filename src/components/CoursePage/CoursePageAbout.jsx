import React from "react";

const CoursePageAbout = ({image, title, description, path}) => {
    return (
        <section className="course-page-about">
            <div className="container">
                <div className="course-page-about-wrapper">
                    <div
                        className="course-page-about-img"
                        style={{
                            backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                        }}
                    ></div>
                    <div className="course-page-about-text">
                        <h2 className="course-page__title course-page-about-text__title">
                            {title}
                        </h2>
                        <p className="course-page-about-text__description">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageAbout;
