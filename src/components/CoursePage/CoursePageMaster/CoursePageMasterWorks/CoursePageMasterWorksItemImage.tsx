import React from "react";

import {Image} from "../../../../models/IImage";

interface CoursePageMasterWorksItemImageProps extends Image {
    onClickOpenImage: (url: string) => void;
}

const CoursePageMasterWorksItemImage: React.FC<
    CoursePageMasterWorksItemImageProps
> = ({size_1024, onClickOpenImage}) => {
    return (
        <div
            className="course-page-master-section-works-item"
            style={{
                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${size_1024}")`,
            }}
            onClick={() => onClickOpenImage(size_1024)}
        ></div>
    );
};

export default CoursePageMasterWorksItemImage;
