import React from "react";

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
                        <div
                            className="course-page-faq-item"
                            key={`course-page-faq-item-${index}`}
                        >
                            <h3 className="course-page-faq-item__title">
                                {item.title}
                            </h3>
                            <p className="course-page-faq-item__description">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursePageFaq;
