import React from "react";

import {CourseGoodSkill} from "../../../models/ICourseGood";

interface CoursePageSkillsItemProps extends CourseGoodSkill {
    number: number;
}

const CoursePageSkillsItem: React.FC<CoursePageSkillsItemProps> = ({
    number,
    title,
    description,
}) => {
    return (
        <div className="course-page-skills-item">
            <div className="course-page-skills-item-top">
                <p className="course-page-skills-item-top__number">{number}.</p>
                <h3 className="course-page-skills-item-top__title">{title}</h3>
            </div>

            <p className="course-page-skills-item__description">
                {description}
            </p>
        </div>
    );
};

export default CoursePageSkillsItem;
