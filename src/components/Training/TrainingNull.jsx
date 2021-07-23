import React from "react";

const TrainingNull = () => {
    return (
        <div className="training-null">
            <div className="training-null-text">
                <h2 className="title training-null-text__title">
                    Не знаете с чего начать?
                </h2>
                <p className="description__mb training-null-text__description">
                    Не знаете с чего начать? Посмотрите наши бесплатные
                    вебинары, чтобы понять, какое направление вам больше
                    подходит.
                </p>
                <a
                    href={`${process.env.REACT_APP_HB_MAIN_DOMEN}/shop`}
                    className="btn training-null-text__btn"
                >
                    Перейти в магазин курсов
                </a>
            </div>
            <div className="training-null-img">
                <img
                    src={`${process.env.REACT_APP_DOMEN}/all/training-null-img.svg`}
                    alt="Не знаете с чего начать?"
                    className="training-null__img"
                />
            </div>
        </div>
    );
};

export default TrainingNull;
