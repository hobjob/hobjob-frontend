import React from "react";

import {Category} from "../../models/ICategory";

interface CategoriesItemProps extends Category {
    subtitle: string;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({
    transfer,
    title,
    image,
    subtitle,
}) => {
    return (
        <a href={`/course/?category=${transfer}`} className="categories-item">
            <div className="categories-item-text">
                <h3 className="categories-item__title">{title}</h3>
                <span className="categories-item__subtitle">{subtitle}</span>
            </div>

            <div className="categories-item-img">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                    alt={title}
                    className="categories-item__img"
                />
            </div>
        </a>
    );
};

export default CategoriesItem;
