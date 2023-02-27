import React from "react";

import CabinetSubscribeDisableChoiceBlockImage from "../../assets/images/cabinet-subscribe-disable-choice-block-image.jpg";

const CabinetSubscribeDisableChoiceSaleSubscribe: React.FC = () => {
    return (
        <div className="cabinet-subscribe-disable-choice-block">
            <div className="cabinet-subscribe-disable-choice-block-text">
                <h2 className="cabinet-subscribe-disable-choice-block-text__title">
                    Следущий период со скидкой 50%
                </h2>
                <p className="cabinet-subscribe-disable-choice-block-text__description">
                    Отменив подписку, вы потеряете доступ ко всем курсам через
                </p>

                <div className="cabinet-subscribe-disable-choice-block-text-btn">
                    <button className="btn-small-round cabinet-subscribe-disable-choice-block-text-btn__btn">
                        Получить скидку на следущий период
                    </button>

                    <button className="btn-small-round-regular cabinet-subscribe-disable-choice-block-text-btn__btn">
                        Отменить подписку
                    </button>
                </div>
            </div>

            <img
                src={CabinetSubscribeDisableChoiceBlockImage}
                alt=""
                className="cabinet-subscribe-disable-choice-block__image"
            />
        </div>
    );
};

export default CabinetSubscribeDisableChoiceSaleSubscribe;
