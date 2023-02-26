import React from "react";

import {Image} from "../../../../../models/IImage";

interface CoursePageMasterWorksItemImageProps extends Image {
    onClickOpenImage: (url: string) => void;
}

const CoursePageMasterWorksItemImage: React.FC<
    CoursePageMasterWorksItemImageProps
> = ({size_1024, size_1536, onClickOpenImage}) => {
    return (
        <div
            className="course-page-master-section-works-slider-item-image"
            style={{
                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${size_1024}")`,
            }}
            onClick={() => onClickOpenImage(size_1536)}
        ></div>
    );
};

export default CoursePageMasterWorksItemImage;
