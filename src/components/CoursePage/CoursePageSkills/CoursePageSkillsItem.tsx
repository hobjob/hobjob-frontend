import React from "react";

import {CourseGoodSkill} from "../../../models/ICourseGood";

const CoursePageSkillsItem: React.FC<CourseGoodSkill> = ({
    title,
    description,
}) => {
    return (
        <div className="course-page-skills-item">
            <h3 className="course-page-skills-item__title">{title}</h3>

            <p className="course-page-skills-item__description">
                {description}
            </p>
        </div>
    );
};

export default CoursePageSkillsItem;
