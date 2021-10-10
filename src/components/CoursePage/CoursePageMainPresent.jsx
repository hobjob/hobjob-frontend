import React from "react";

const CoursePageMainPresent = ({present}) => {
    return (
        <div className="course-page-main-text-price-present">
            <p className="course-page-main-text-price-present__title">
                {present}
            </p>
        </div>
    );
};

export default CoursePageMainPresent;
