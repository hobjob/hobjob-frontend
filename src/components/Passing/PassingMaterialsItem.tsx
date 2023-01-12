import React from "react";

import {CoursePassingLessonMaterial} from "../../models/Course/ICoursePassing";

interface PassingMaterialsItemProps extends CoursePassingLessonMaterial {
    downloadFile: (title: string, index: number) => void;
    index: number;
}

const PassingMaterialsItem: React.FC<PassingMaterialsItemProps> = ({
    title,
    downloadFile,
    index,
}) => {
    return (
        <div className="passing-lesson-info-block-materials-item-wrapper">
            <div
                onClick={() => downloadFile(title, index + 1)}
                className="passing-lesson-info-block-materials-item"
            >
                <div className="passing-lesson-info-block-materials-item-icon">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.2006 9.665L10.625 12.2412V5.625C10.625 5.28 10.345 5 10 5C9.655 5 9.375 5.28 9.375 5.625V12.2412L6.79938 9.66562C6.555 9.42124 6.15938 9.42124 5.91562 9.66562C5.67124 9.91 5.67124 10.3056 5.91562 10.5493L9.45124 14.085C9.60124 14.235 9.80624 14.2812 10.0007 14.2468C10.1944 14.2812 10.4 14.2343 10.55 14.085L14.0857 10.5493C14.33 10.305 14.33 9.90938 14.0857 9.66562C13.8406 9.42124 13.445 9.42124 13.2006 9.665ZM10 0C4.47752 0 0 4.47686 0 10C0 15.5231 4.47752 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47752 15.5231 0 10 0ZM10 18.75C5.16748 18.75 1.25 14.8325 1.25 10C1.25 5.16748 5.16748 1.25 10 1.25C14.8325 1.25 18.75 5.16748 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75Z" />
                    </svg>
                </div>
                <p className="passing-lesson-info-block-materials-item__title">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default PassingMaterialsItem;
