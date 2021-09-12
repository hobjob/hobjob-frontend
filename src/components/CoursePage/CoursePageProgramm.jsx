import React from "react";

const CoursePageProgramm = ({blocks}) => {
    return (
        <section className="course-page-programm">
            <div className="container">
                <div className="course-page-programm-wrapper">
                    <h2 className="course-page__title__mb course-page-programm__title">
                        Программа
                    </h2>
                    <div className="course-page-programm-items-wrapper">
                        {blocks.map((block, index) => (
                            <div
                                className="course-page-programm-item"
                                key={`course-page-programm-item-${index}`}
                            >
                                <div className="course-page-programm-item-title">
                                    <p className="course-page-programm-item-title__subtitle">
                                        0{index + 1}
                                    </p>
                                    <h3 className="course-page-programm-item-title__title">
                                        {block.title}
                                    </h3>
                                </div>
                                <ul className="course-page-programm-item-ul">
                                    {block.items.map((item, subindex) => (
                                        <li
                                            className="course-page-programm-item__li"
                                            key={`course-page-programm-item__li-${index}-${subindex}`}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageProgramm;
