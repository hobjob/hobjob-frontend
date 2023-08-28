import React from "react";

import {CourseGoodTool} from "../../../models/Course/ICourseGood";

interface CoursePageToolsProps {
    tools: CourseGoodTool[];
}

const CoursePageTools: React.FC<CoursePageToolsProps> = ({tools}) => {
    return (
        <section className="course-page-tools">
            <div className="container">
                <div className="course-page-tools-wrapper">
                    <h2 className="course-page__title mb course-page-tools__title">
                        Что понадобится для курса?
                    </h2>

                    <div className="course-page-tools-items-wrapper">
                        {tools.map((tool, index) => (
                            <p
                                className="course-page-tools__item"
                                key={`course-page-tools-${index}__item`}
                                dangerouslySetInnerHTML={{
                                    __html: tool.title,
                                }}
                            ></p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageTools;
