import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {CabinetSubscribeDisableSection} from "../../redux/types/cabinetSubscribeDisable/ICabinetSubscribeDisable";
import {changeCabinetSubscribeDisableCurrentSection} from "../../redux/actions/cabinetSubscribeDisable";
import {fetchUpdateUser} from "../../redux/actions/user";

const CabinetSubscribeDisableSaleSubscribe: React.FC = () => {
    const dispatch = useDispatch();

    const {isCloseAnimation} = useTypedSelector(
        ({cabinetSubscribeDisable}) => cabinetSubscribeDisable
    );

    const onClickGetSaleSubscribe = () => {
        dispatch(fetchUpdateUser({isUsedSale: true}) as any);

        dispatch(
            changeCabinetSubscribeDisableCurrentSection(
                CabinetSubscribeDisableSection.SUCCESS_SALE_SUBSCRIBE
            ) as any
        );
    };

    return (
        <div
            className={`cabinet-subscribe-disable-block-content-text ${
                isCloseAnimation ? "close" : ""
            }`}
        >
            <h2 className="cabinet-subscribe-disable-block-content-text__title">
                Если вы останетесь, то получите месяц подписки <br />
                со скидкой 50%
            </h2>

            <div className="cabinet-subscribe-disable-block-content-text-description">
                <p className="cabinet-subscribe-disable-block-content-text-description__description">
                    Отменить подписку можно в любой момент
                </p>
            </div>

            <div className="cabinet-subscribe-disable-block-content-text-btn">
                <button
                    className="btn cabinet-subscribe-disable-block-content-text-btn__btn"
                    onClick={onClickGetSaleSubscribe}
                >
                    Остаться за 249₽
                </button>

                <button
                    className="cabinet-subscribe-disable-block-content-text-btn__cancel"
                    onClick={() =>
                        dispatch(
                            changeCabinetSubscribeDisableCurrentSection(
                                CabinetSubscribeDisableSection.FREE_MONTH_SUBSCRIBE
                            ) as any
                        )
                    }
                >
                    Нет, отменить подписку
                </button>
            </div>
        </div>
    );
};

export default CabinetSubscribeDisableSaleSubscribe;
