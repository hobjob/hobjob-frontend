import React from "react";

import {PassingMaterialsItem} from "../";

import {PassingCourseLessonMaterial} from "../../models/Passing/IPassing";

interface PassingMaterialsProps {
    materials: PassingCourseLessonMaterial[];
    downloadFunc: (title: string, index: number) => void;
}

const PassingMaterials: React.FC<PassingMaterialsProps> = ({
    materials,
    downloadFunc,
}) => {
    return (
        <div className="passing-lesson-info-block-materials">
            <h4 className="passing-lesson-info-block-materials__title">
                Материалы к уроку
            </h4>
            <div className="passing-lesson-info-block-materials-items-wrapper">
                {materials.map((item, index) => (
                    <PassingMaterialsItem
                        {...item}
                        index={index}
                        downloadFile={downloadFunc}
                        key={`passing-lesson-info-block-materials-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PassingMaterials;
