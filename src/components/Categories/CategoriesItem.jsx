import React from "react";
import {Link} from "react-router-dom";

const CategoriesItem = ({category, title, image}) => {
    return (
        <Link to={`/shop/?category=${category}`} className="categories-item">
            <div className="categories-item-text">
                <h3 className="categories-item__title">{title}</h3>
                <span className="categories-item__subtitle">77 курсов</span>
            </div>

            <div className="categories-item-img">
                <div className="categories-item-arrow">
                    <svg
                        width="31"
                        height="16"
                        viewBox="0 0 31 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                            fill="#D89350"
                        />
                    </svg>
                </div>
                <img src={image} alt={title} className="categories-item__img" />
            </div>
        </Link>
    );
};

export default CategoriesItem;
