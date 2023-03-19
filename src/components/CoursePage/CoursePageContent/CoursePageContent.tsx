import React from "react";
import {Link as LinkScroll} from "react-scroll";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {
    CoursePageContentVideo,
    CoursePageContentLessons,
    CoursePageContentMaterials,
} from "../../";

interface CoursePageContentProps {
    isLogin: boolean;
    isAdd: boolean;
    isSubscribe: boolean;
}

const CoursePageContent: React.FC<CoursePageContentProps> = ({
    isLogin,
    isAdd,
    isSubscribe,
}) => {
    const {
        courseByUrl: {_id, lessons, materials},
    } = useTypedSelector(({courses}) => courses);

    return (
        <section
            className={`course-page-content ${
                lessons[0].video.vertical ? "vertical" : ""
            }`}
        >
            <div className="container">
                <div className="course-page-content-wrapper">
                    <div className="course-page-content-video">
                        <CoursePageContentVideo
                            courseId={_id}
                            image={lessons[0].image}
                        />
                    </div>

                    <div className="course-page-content-list">
                        <CoursePageContentLessons lessons={lessons} />

                        {materials.length ? (
                            <CoursePageContentMaterials materials={materials} />
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageContent;
