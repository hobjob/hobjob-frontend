import React from "react";

interface ReglogProgressbarProps {
    number: number;
}

const ReglogProgressbar: React.FC<ReglogProgressbarProps> = ({number}) => {
    return (
        <div className="reglog-progressbar">
            <div
                className={`reglog-progressbar-item ${
                    number === 1 ? "active" : ""
                }`}
            >
                <span className="reglog-progressbar-item__number">1</span>
                <span className="reglog-progressbar-item__title">
                    Регистрация
                </span>
            </div>
            <div className="reglog-progressbar-line"></div>
            <div
                className={`reglog-progressbar-item ${
                    number === 2 ? "active" : ""
                }`}
            >
                <span className="reglog-progressbar-item__number">2</span>
                <span className="reglog-progressbar-item__title">Оплата</span>
            </div>
            <div className="reglog-progressbar-line"></div>
            <div
                className={`reglog-progressbar-item ${
                    number === 3 ? "active" : ""
                }`}
            >
                <span className="reglog-progressbar-item__number">3</span>
                <span className="reglog-progressbar-item__title">
                    Новые навыки
                </span>
            </div>
        </div>
    );
};

export default ReglogProgressbar;
