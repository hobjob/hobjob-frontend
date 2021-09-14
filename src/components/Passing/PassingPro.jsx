import React from "react";

import {BtnLoader} from '../';

const PassingPro = ({title, isSendProSubscribe, createPaymentProSubscribe}) => {
    return (
        <div className="passing-pro">
            <h3 className="passing-pro__title">
                Вы успешно прошли курс «{title}»
            </h3>

            <p className="passing-pro__description">
                Что бы, получить доступ к сертификату, нужно офрмить Pro
                подписку
            </p>

            <ul className="passing-pro-list">
                <li className="passing-pro-list__item">
                    - Скидка 20% на все курсы
                </li>
                <li className="passing-pro-list__item">
                    - Получение сертификата
                </li>
                <li className="passing-pro-list__item">
                    - Дополнительные материалы
                </li>
            </ul>

            {isSendProSubscribe ? (
                <button className="btn disabled passing-pro__btn" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className="btn passing-pro__btn"
                    onClick={createPaymentProSubscribe}
                >
                    Оформить Pro подписку
                </button>
            )}
        </div>
    );
};

export default PassingPro;
