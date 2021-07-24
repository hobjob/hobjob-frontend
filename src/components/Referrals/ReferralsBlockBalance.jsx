import React from "react";

const ReferralBlockBalance = ({refBalance}) => {
    return (
        <div className="referrals-info-block referrals-info-block-balance">
            <p className="referrals-info-block-balance__subtitle">
                Вы заработали
            </p>
            <h3 className="referrals-info-block-balance__title">
                {refBalance}₽
            </h3>
            <button className="btn referrals-info-block-balance__btn">
                Вывести
            </button>
        </div>
    );
};

export default ReferralBlockBalance;
