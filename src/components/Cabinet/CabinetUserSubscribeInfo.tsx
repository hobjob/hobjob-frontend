import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {fetchUpdateUser} from "../../redux/actions/user";

import {CabinetUserSubscribeInfoFormSelect} from "../";

const CabinetUserSubscribeInfo: React.FC = () => {
    const dispatch = useDispatch();

    const {
        userInfo: {subscribe, payment},
    } = useTypedSelector(({user}) => user);

    const changeAutoPayment = () => {
        // dispatch(fetchUpdateUser({autoPayment: !payment.auto}));
    };

    const changeNextTypeSubscribe = (value: string) => {
        dispatch(fetchUpdateUser({nextTypeSubscribe: value}));
    };

    return (
        <div className="cabinet-block-form">
            <CabinetUserSubscribeInfoFormSelect
                changeNextTypeSubscribe={changeNextTypeSubscribe}
                nextTypeSubscribe={subscribe.nextTypeSubscribe}
            />

            <div className="cabinet-block-subscribe-info-item">
                <h4 className="cabinet-block-subscribe-info-item__title">
                    Текущая подписка
                </h4>
                <p className="cabinet-block-subscribe-info-item__description">
                    {[
                        {
                            title: "Тестовая подписка",
                            type: "test-subscribe",
                        },
                        {
                            title: "Месячная подписка",
                            type: "month-subscribe",
                        },
                        {
                            title: "Годовая подписка",
                            type: "year-subscribe",
                        },
                    ].map((item) =>
                        item.type === subscribe.typeSubscribe
                            ? item.title
                            : null
                    )}
                </p>
            </div>

            <div className="cabinet-block-subscribe-info-item">
                <h4 className="cabinet-block-subscribe-info-item__title">
                    Завершится
                </h4>
                <p className="cabinet-block-subscribe-info-item__description">
                    {moment(
                        subscribe.registrationSubscribe,
                        "DD.MM.YYYY, HH:mm"
                    )
                        .add(
                            subscribe.periodInfo.count,
                            subscribe.periodInfo.title
                        )
                        .format("DD.MM.YYYY, HH:mm")}
                </p>
            </div>

            <div className="cabinet-block-subscribe-info-item">
                <h4 className="cabinet-block-subscribe-info-item__title">
                    Отменить подписку
                </h4>
                <p className="cabinet-block-subscribe-info-item__description">
                    {/* {payment.auto ? (
                        <Link
                            to="/go/cabinet/subscribe/disable"
                            className="btn-small-round-gray"
                        >
                            Отменить
                        </Link>
                    ) : (
                        <button
                            className="btn-small-round"
                            onClick={changeAutoPayment}
                        >
                            Включить
                        </button>
                    )} */}
                </p>
            </div>
        </div>
    );
};

export default CabinetUserSubscribeInfo;
