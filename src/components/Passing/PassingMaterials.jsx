import React from "react";
import {useSelector} from "react-redux";

import {PassingMaterialsItem} from "../";

const PassingMaterials = ({materials, downloadFunc}) => {
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
