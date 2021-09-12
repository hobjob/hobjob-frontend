import React from "react";

const CoursePageResult = ({description, image, path}) => {
    return (
        <section className="course-page-result">
            <div className="container">
                <div className="course-page-result-wrapper">
                    <div className="course-page-result-block">
                        <h2 className="course-page__title course-page-result__title">
                            Конечный результат курса
                        </h2>
                    </div>
                    <div className="course-page-result-block">
                        <p className="course-page-result__description">
                            {description}
                        </p>
                    </div>
                    <div className="course-page-result-block">
                        <div
                            className="course-page-result-img"
                            style={{
                                backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageResult;
