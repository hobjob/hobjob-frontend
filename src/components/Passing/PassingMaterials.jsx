import React from "react";

import {PassingMaterialsItem} from "../";
import {saveAs} from "file-saver";

const PassingMaterials = ({materials}) => {
    const downloadFile = (url, title) => {
        saveAs(`${process.env.REACT_APP_DOMEN}/${url}`, title);
    };

    return (
        <div className="passing-lesson-info-block-materials">
            <h4 className="passing-lesson-info-block-materials__title">
                Материалы к уроку
            </h4>
            <div className="passing-lesson-info-block-materials-item-wrapper">
                {materials.map((item, index) => (
                    <PassingMaterialsItem
                        {...item}
                        downloadFile={downloadFile}
                        key={`passing-lesson-info-block-materials-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PassingMaterials;
