import React from "react";
import {useSelector} from "react-redux";

import {ReferralsPartnersItem} from "../";

const ReferralsPartners = () => {
    const {referrals} = useSelector(({user}) => user);

    return (
        <div className="referrals-partners">
            <h4 className="referrals-partners__title">
                Последние реферальные партнеры
            </h4>
            <div className="referrals-partners-subinfo">
                <div className="referrals-partners-col">
                    <span className="referrals-partners-subinfo__title">
                        Ваш партнер
                    </span>
                </div>
                <div className="referrals-partners-col">
                    <span className="referrals-partners-subinfo__title">
                        Начислено
                    </span>
                </div>
            </div>
            <div className="referrals-partners-items-wrapper">
                {referrals.map((item, index) => (
                    <ReferralsPartnersItem
                        {...item}
                        key={`referrals-partners-item-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReferralsPartners;
