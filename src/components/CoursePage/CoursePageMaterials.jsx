import React from "react";

const CoursePageMaterials = ({items}) => {
    return (
        <section className="course-page-materials">
            <div className="container">
                <div className="course-page-materials-wrapper">
                    <div className="course-page-materials-title">
                        <h2 className="course-page__title course-page-materials__title">
                            Что понадобится для курса:
                        </h2>
                    </div>
                    <div className="course-page-materials-items-wrapper">
                        {items.map((item, index) => (
                            <div
                                className="course-page-materials-item"
                                key={`course-page-materials-item-${index}`}
                            >
                                <p className="course-page-materials-item__subtitle">
                                    0{index + 1}
                                </p>
                                <p className="course-page-materials-item__title">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMaterials;
