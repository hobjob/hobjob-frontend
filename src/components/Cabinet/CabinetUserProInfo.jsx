import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchUpdateUser} from "../../redux/actions/user";
import { sendCreateProSubscribePayment } from "../../redux/actions/payment";

const CabinetUserProInfo = () => {
	const dispatch = useDispatch();
	
    const {
        user: {pro, registrationPro, completionPro, autoPayment},
    } = useSelector(({user}) => user);

    const disableAutoPayment = () => {
        dispatch(fetchUpdateUser({autoPayment: false}));
    };

    const turnOnAutoPayment = () => {
        dispatch(fetchUpdateUser({autoPayment: true}));
    };

    const createPayment = () => {
        dispatch(sendCreateProSubscribePayment());
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
                            {completionPro}
                        </p>
                    </div>

                    <div className="cabinet-block-pro-info-item">
                        <h4 className="cabinet-block-pro-info-item__title">
                            Автоплатеж
                        </h4>
                        <p className="cabinet-block-pro-info-item__description">
                            {autoPayment ? (
                                <>
                                    Включен{" "}
                                    <span onClick={disableAutoPayment}>
                                        (отключить)
                                    </span>
                                </>
                            ) : (
                                <>
                                    Отключен{" "}
                                    <span onClick={turnOnAutoPayment}>
                                        (включить)
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                </>
            ) : (
                <button className="btn" onClick={createPayment}>
                    Подключить Pro подписку
                </button>
            )}
        </div>
    );
};

export default CabinetUserProInfo;
