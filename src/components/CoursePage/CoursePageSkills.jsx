import React from "react";

const CoursePageSkills = ({items, images, path}) => {
    return (
        <>
            <section className="course-page-skills">
                <div className="container">
                    <div className="course-page-skills-wrapper">
                        <div className="course-page-skills-title">
                            <h2 className="course-page__title course-page-skills__title">
                                Чему вы научитесь?
                            </h2>
                        </div>
                        <div className="course-page-skills-items-wrapper">
                            {items.map((item, index) => (
                                <div
                                    className="course-page-skills-item"
                                    key={`course-page-skills-item-${index}`}
                                >
                                    <p className="course-page-skills-item__subtitle">
                                        0{index + 1}
                                    </p>
                                    <p className="course-page-skills-item__title">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="course-page-skills-images">
                <div className="container">
                    <div className="course-page-skills-images-wrapper">
                        {images.map((image, index) => (
                            <div
                                key={`course-page-skills-img-${index}`}
                                className="course-page-skills-img"
                                style={{
                                    backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${image}')`,
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursePageSkills;
