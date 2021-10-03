import React from "react";

import {Tab} from "../";

const CoursePageFaq = ({items}) => {
    return (
        <section className="course-page-faq">
            <div className="container">
                <div className="course-page-faq-wrapper">
                    <h2 className="course-page__title__mb course-page-faq__title">
                        Часто задаваемые вопросы
                    </h2>
                </div>
                <div className="course-page-faq-items-wrapper">
                    {items.map((item, index) => (
                        <Tab key={`course-page-faq-item-${index}`} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursePageFaq;
