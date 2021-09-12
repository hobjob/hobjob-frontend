import React from "react";

const CoursePageFor = ({blocks}) => {
    return (
        <section className="course-page-for">
            <div className="container">
                <div className="course-page-for-wrapper">
                    <h2 className="course-page__title__mb course-page-for__title">
                        Кому подойдёт
                    </h2>
                    <div className="course-page-for-items-wrapper">
                        {blocks.map((block, index) => (
                            <div
                                className="course-page-for-item"
                                key={`course-page-for-item-${index}`}
                            >
                                <div
                                    className="course-page-for-item-icon"
                                    dangerouslySetInnerHTML={{
                                        __html: block.icon,
                                    }}
                                ></div>
                                <div className="course-page-for-item-text">
                                    <h3 className="course-page-for-item__title">
                                        {block.title}
                                    </h3>
                                    <p className="course-page-for-item__description">
                                        {block.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageFor;
