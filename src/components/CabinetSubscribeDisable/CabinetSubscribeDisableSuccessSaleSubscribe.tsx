import React from "react";
import {Link} from "react-router-dom";

const CabinetSubscribeDisableSuccessSaleSubscribe: React.FC = () => {
    return (
        <div className="cabinet-subscribe-disable-block-content-text">
                <h2 className="cabinet-subscribe-disable-block-content-text__title">
                    Спасибо, что остались с нами!
                </h2>

                <div className="cabinet-subscribe-disable-block-content-text-description">
                    <p className="cabinet-subscribe-disable-block-content-text-description__description">
                        За следующий месяц подписки спишем 249₽
                    </p>
                </div>

                <div className="cabinet-subscribe-disable-block-content-text-btn">
                    <Link
                        to="/go/training"
                        className="btn cabinet-subscribe-disable-block-content-text-btn__btn"
                    >
                        Продолжить обучение
                    </Link>
                </div>
        </div>
    );
};

export default CabinetSubscribeDisableSuccessSaleSubscribe;
