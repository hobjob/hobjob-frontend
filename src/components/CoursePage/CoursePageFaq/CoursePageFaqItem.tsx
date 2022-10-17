import React from "react";

interface CoursePageFaqItemProps {
    title: string;
    description: string;
}

const CoursePageFaqItem: React.FC<CoursePageFaqItemProps> = ({
    title,
    description,
}) => {
    return (
        <div className="course-page-faq-item">
            <h3 className="course-page-faq-item__title">{title}</h3>
            <p className="course-page-faq-item__description">{description}</p>
        </div>
    );
};

export default CoursePageFaqItem;
