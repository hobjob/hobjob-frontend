import React from "react";
import moment from "moment";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

import {fetchUpdateUser} from "../../../../../redux/actions/user";

const CabinetSubscribeBlockCurrentPeriod: React.FC = () => {
    const dispatch = useDispatch();

    const {
        userInfo: {subscribe},
    } = useTypedSelector(({user}) => user);

    const changeAutoPayment = () => {
        dispatch(fetchUpdateUser({autoPayment: !subscribe.auto}));
    };

    return (
        <div
            className={`cabinet-section-content-subscribe-current-period  ${
                subscribe.auto ? "" : "red"
            }`}
        >
            <p className="cabinet-section-content-subscribe-current-period__subtitle">
                {subscribe.auto
                    ? "Следующие списание"
                    : "Вы не сможете смотреть курсы после"}
            </p>

            <p className="cabinet-section-content-subscribe-current-period__title">
                {moment(subscribe.registration, "DD.MM.YYYY, HH:mm")
                    .add(subscribe.periodInfo.count, subscribe.periodInfo.title)
                    .format("DD MMMM, HH:mm")}
            </p>

            {subscribe.auto ? null : (
                <button
                    className="cabinet-section-content-subscribe-current-period__return"
                    onClick={changeAutoPayment}
                >
                    Восстановить подписку
                </button>
            )}
        </div>
    );
};

export default CabinetSubscribeBlockCurrentPeriod;
