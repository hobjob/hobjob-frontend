import React from "react";

interface CoursePageSkillsItemProps {
    title: string;
    subtitle: string;
    number: number;
}

const CoursePageSkillsItem: React.FC<CoursePageSkillsItemProps> = ({
    number,
    title,
    subtitle,
}) => {
    return (
        <div className="course-page-skills-item">
            <div className="course-page-skills-item-top">
                <p className="course-page-skills-item-top__number">{number}</p>
                <h3 className="course-page-skills-item-top__title">{title}</h3>
			</div>
			
            <p className="course-page-skills-item__subtitle">{subtitle}</p>
        </div>
    );
};

export default CoursePageSkillsItem;
