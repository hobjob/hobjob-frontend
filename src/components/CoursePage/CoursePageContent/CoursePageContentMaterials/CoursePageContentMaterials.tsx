import React from "react";

import {CoursePageContentMaterialsItem} from "../../../";

interface CoursePageContentMaterialsProps {
    materials: string[];
}

const CoursePageContentMaterials: React.FC<CoursePageContentMaterialsProps> = ({
    materials,
}) => {
    return (
        <div className="course-page-content-list-materials">
            <h2 className="course-page-content-list__title">
                Вы получите доступ к материалам курса
            </h2>

            <div className="course-page-content-list-materials-items-wrapper">
                {materials.map((material, index) => (
                    <CoursePageContentMaterialsItem
                        title={material}
                        key={`course-page-content-list-materials-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursePageContentMaterials;
