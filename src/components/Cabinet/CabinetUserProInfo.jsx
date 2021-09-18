import React from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";

import {fetchUpdateUser} from "../../redux/actions/user";
import {sendCreateProSubscribePayment} from "../../redux/actions/payment";

import {BtnLoader} from "../";

const CabinetUserProInfo = () => {
    const dispatch = useDispatch();

    const {
        userInfo: {pro, registrationPro, autoPayment},
    } = useSelector(({user}) => user);
    const {isSendProSubscribe} = useSelector(({payment}) => payment);

    const disableAutoPayment = () => {
        dispatch(fetchUpdateUser({autoPayment: false}));
    };

    const createPayment = () => {
        dispatch(sendCreateProSubscribePayment({pro}));
    };

    return (
        <div className="cabinet-block-form">
            {pro ? (
                <>
                    <div className="cabinet-block-pro-info-item">
                        <h4 className="cabinet-block-pro-info-item__title">
                            Оформлена
                        </h4>
                        <p className="cabinet-block-pro-info-item__description">
                            {registrationPro}
                        </p>
                    </div>

                    <div className="cabinet-block-pro-info-item">
                        <h4 className="cabinet-block-pro-info-item__title">
                            Завершится
                        </h4>
                        <p className="cabinet-block-pro-info-item__description">
                            {moment(registrationPro, "DD.MM.YYYY, HH:mm")
                                .add(1, "Y")
                                .format("DD.MM.YYYY, HH:mm")}
                        </p>
                    </div>

                    <div className="cabinet-block-pro-info-item">
                        <h4 className="cabinet-block-pro-info-item__title">
                            Автоплатеж
                        </h4>
                        <p className="cabinet-block-pro-info-item__description">
                            {autoPayment ? (
                                <>
                                    <button
                                        className="btn-small-round"
                                        onClick={disableAutoPayment}
                                    >
                                        Отключить
                                    </button>
                                </>
                            ) : (
                                <button className="btn-small-round disabled">
                                    Отключен
                                </button>
                            )}
                        </p>
                    </div>
                </>
            ) : isSendProSubscribe ? (
                <button
                    className="btn cabinet-block-pro__btn disabled"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className="btn cabinet-block-pro__btn"
                    onClick={createPayment}
                >
                    Подключить Pro подписку
                </button>
            )}
        </div>
    );
};

export default CabinetUserProInfo;
