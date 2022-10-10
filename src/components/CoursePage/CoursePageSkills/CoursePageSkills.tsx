import React from "react";

import {CoursePageSkillsItem} from "../../";

const CoursePageSkills: React.FC = () => {
    const skills = [
        {title: "Сажать", subtitle: "Научитесь сажать суккуленты"},
        {title: "Разберетесь в почве", subtitle: "Узнаете типы почв"},
        {
            title: "Получите навык полива",
            subtitle: "Узнаете типы полива и чем они отличаются",
        },
    ];

    return (
        <section className="course-page-skills">
            <div className="container">
                <div className="course-page-skills-wrapper">
                    <h2 className="title__mb course-page-skills__title">
                        Навыки которые вы получите
                    </h2>

                    <div className="course-page-skills-item-wrapper">
                        {skills.map((skill, index) => (
                            <CoursePageSkillsItem
                                {...skill}
                                number={index + 1}
                                key={`course-page-skills-item-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageSkills;
