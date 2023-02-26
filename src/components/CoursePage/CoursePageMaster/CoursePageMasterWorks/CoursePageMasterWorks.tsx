import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import {
    CoursePageMasterWorksVideo,
    CoursePageMasterWorksImage,
    CoursePageMasterWorksSlider,
} from "../../../";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const CoursePageMasterWorks: React.FC = () => {
    const {
        works: {isOpenVideo, isOpenImage},
    } = useTypedSelector(({coursePage}) => coursePage);

    return (
        <div className="course-page-master-section-works">
            <h2 className="course-page-master-section-works__title">
                Работы мастера
            </h2>

            {isOpenVideo ? <CoursePageMasterWorksVideo /> : null}

            {isOpenImage ? <CoursePageMasterWorksImage /> : null}

            <CoursePageMasterWorksSlider />
        </div>
    );
};

export default CoursePageMasterWorks;
