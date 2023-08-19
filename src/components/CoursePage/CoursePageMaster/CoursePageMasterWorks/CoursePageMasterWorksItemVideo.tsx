import React from "react";

import {MasterWorkVideo} from "../../../../models/IMaster";

interface CoursePageMasterWorksItemVideoProps extends MasterWorkVideo {
    onClickOpenVideo: () => void;
}

const CoursePageMasterWorksItemVideo: React.FC<
    CoursePageMasterWorksItemVideoProps
> = ({cover, onClickOpenVideo}) => {
    return (
        <div
            className="course-page-master-works-item-video"
            style={{
                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${cover.size_1024}")`,
            }}
            onClick={onClickOpenVideo}
        >
            <button className="course-page-master-works-item-video__btn">
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12.5" cy="12.5" r="12.5" fill="black" />
                    <path
                        d="M18.25 12.375L8.6875 17.8959V6.85409L18.25 12.375Z"
                        fill="white"
                    />
                </svg>
                Смотреть видео
            </button>
        </div>
    );
};

export default CoursePageMasterWorksItemVideo;
