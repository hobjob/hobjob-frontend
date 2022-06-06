import React from "react";
import {Link} from "react-router-dom";

const TrainingNull: React.FC = () => {
    return (
        <div className="training-null">
            <div className="training-null-text">
                <h2 className="title training-null-text__title">
                    Не знаете с чего начать?
                </h2>
                <p className="description__mb training-null-text__description">
                    Перейдите в курсы и подберите для себя то, что вам
                    понравится
                </p>
                <Link to="/course" className="btn training-null-text__btn">
                    Перейти в курсы
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
