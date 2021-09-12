import React from "react";

const CoursePageMiddleIcon = ({icon, path}) => {
    return (
        <div className="course-page-middle">
            <div className="course-page-middle-image">
                <img
                    className="course-page-middle-image__image"
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/uploads/${path}/${icon}`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default CoursePageMiddleIcon;
