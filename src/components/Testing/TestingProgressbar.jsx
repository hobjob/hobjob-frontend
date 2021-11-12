import React from "react";

const TestingProgressbar = () => {
    return (
        <div className="payment-progressbar">
            <div className="payment-progressbar-item active">
                <span className="payment-progressbar-item__number">1</span>
                <span className="payment-progressbar-item__title">
                    Авторизация
                </span>
            </div>
            <div className="payment-progressbar-line"></div>
            <div className="payment-progressbar-item">
                <span className="payment-progressbar-item__number">2</span>
                <span className="payment-progressbar-item__title">
                    Новые навыки
                </span>
            </div>
        </div>
    );
};

export default TestingProgressbar;
