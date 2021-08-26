import React from "react";
import {Link} from 'react-router-dom';

const TrainingNull = () => {
    return (
        <div className="training-null">
            <div className="training-null-text">
                <h2 className="title training-null-text__title">
                    Не знаете с чего начать?
                </h2>
                <p className="description__mb training-null-text__description">
                    Посмотрите наши бесплатные
                    вебинары, чтобы понять, какое направление вам больше
                    подходит.
                </p>
                <Link
                    to="/shop"
                    className="btn training-null-text__btn"
                >
                    Перейти в магазин курсов
                </Link>
            </div>
            <div className="training-null-img">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/training-null.svg`}
                    alt="Не знаете с чего начать?"
                    className="training-null__img"
                />
            </div>
        </div>
    );
};

export default TrainingNull;
