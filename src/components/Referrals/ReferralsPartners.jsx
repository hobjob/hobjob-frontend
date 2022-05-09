import React from "react";

import {ReferralsPartnersItem} from "../";

const ReferralsPartners = ({referrals}) => {
    return (
        <div className="referrals-partners">
            <h4 className="referrals-partners__title">
                Последние 25 реферальных партнеров
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
