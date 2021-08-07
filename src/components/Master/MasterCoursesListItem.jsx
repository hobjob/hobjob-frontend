import React from "react";

const MasterCoursesListItem = ({image, title, buyCount, buyCountTitle}) => {
    return (
        <div className="master-info-list-courses-item">
            <div className="master-info-list-courses-col">
                <div className="master-info-list-courses-item-course">
                    <div
                        className="master-info-list-courses-item-course-image"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_DOMEN}/${image}")`,
                        }}
                    ></div>
                    <h5 className="master-info-list-courses-item-course__title">
                        {title}
                    </h5>
                </div>
            </div>

            <div className="master-info-list-courses-col">
                <div className="master-info-list-courses-item-count">
                    <span className="master-info-list-courses-item-count__title">
                        {buyCount} {buyCountTitle}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MasterCoursesListItem;
