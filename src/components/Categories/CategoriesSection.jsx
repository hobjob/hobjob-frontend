import React from "react";

import CategoriesItem from "./CategoriesItem";

import {categories} from "../../categories";

const CategoriesSection = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <h2 className="title__mb categories__title">
                        Чему мы учим
                    </h2>

                    <div className="categories-items-wrapper">
                        {categories.map((item, index) => (
                            <CategoriesItem
                                {...item}
                                key={`categories-items-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
