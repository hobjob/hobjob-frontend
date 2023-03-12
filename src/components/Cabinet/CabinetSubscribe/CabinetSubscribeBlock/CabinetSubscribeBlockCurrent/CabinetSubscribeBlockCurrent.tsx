import React from "react";
import {Link} from "react-router-dom";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

import {
    CabinetSubscribeBlockCurrentType,
    CabinetSubscribeBlockCurrentPeriod,
    CabinetSubscribeBlockCurrentPayments,
} from "../../../../";

const CabinetSubscribeBlockCurrent: React.FC = () => {
    const {
        userInfo: {subscribe},
    } = useTypedSelector(({user}) => user);

    return (
		<div className="cabinet-section-content-subscribe-current">
			<CabinetSubscribeBlockCurrentType />
			
            <CabinetSubscribeBlockCurrentPeriod />

            <CabinetSubscribeBlockCurrentPayments />

            {subscribe.auto ? (
                <Link
                    to="/go/cabinet/subscribe/disable"
                    className="cabinet-section-content-subscribe-current__cancel"
                >
                    Отменить подписку
                </Link>
            ) : null}
        </div>
    );
};

export default CabinetSubscribeBlockCurrent;
