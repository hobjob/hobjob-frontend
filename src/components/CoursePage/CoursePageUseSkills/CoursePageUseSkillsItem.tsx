import React from "react";

import {CourseGoodUseSkill} from "../../../models/Course/ICourseGood";

const CoursePageUseSkillsItem: React.FC<CourseGoodUseSkill> = ({
    title,
    description,
}) => {
    return (
        <div className="course-page-use-skills-block-text-item">
            <h3 className="course-page-use-skills-block-text-item__title">
                {title}
            </h3>
            <p className="course-page-use-skills-block-text-item__description">
                {description}
            </p>
        </div>
    );
};

export default CoursePageUseSkillsItem;
