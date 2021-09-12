import React from "react";
import NumberFormat from "react-number-format";

const ReferralBlockBalance = ({refBalance}) => {
    return (
        <div className="referrals-info-block referrals-info-block-balance">
            <p className="referrals-info-block-balance__subtitle">
                Вы заработали
            </p>
            <h3 className="referrals-info-block-balance__title">
                <NumberFormat
                    value={refBalance}
                    displayType={"text"}
                    thousandSeparator={" "}
                    renderText={(value) => value}
                />
                ₽
            </h3>
            <button className="btn referrals-info-block-balance__btn">
                Вывести
            </button>
        </div>
    );
};

export default ReferralBlockBalance;
