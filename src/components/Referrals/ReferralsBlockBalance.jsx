import React from "react";
import NumberFormat from "react-number-format";

import {ReferralsBlockForm} from "../";

const ReferralBlockBalance = ({refBalance}) => {
    const [indexPayment, setIndexPayment] = React.useState(0);

    const onSubmit = (data) => {
        console.log(data);
        setIndexPayment(2);
    };

    return (
        <div className="referrals-info-block referrals-info-block-balance">
            <div
                className="referrals-info-block-track"
                style={{
                    transform: `translateX(
                    	-${indexPayment}00%
                    )`,
                }}
            >
                <div className="referrals-info-block-content referrals-info-block-content-balance">
                    <p className="referrals-info-block-content-balance__subtitle">
                        Вы заработали
                    </p>
                    <h3 className="referrals-info-block-content-balance__title">
                        <NumberFormat
                            value={refBalance}
                            displayType={"text"}
                            thousandSeparator={" "}
                            renderText={(value) => value}
                        />
                        ₽
                    </h3>
                    {refBalance >= process.env.REACT_APP_MIN_OUTPUT ? (
                        <button
                            className="btn referrals-info-block-content-balance__btn"
                            onClick={() => setIndexPayment(1)}
                        >
                            Вывести
                        </button>
                    ) : (
                        <button className="btn disabled referrals-info-block-content-balance__btn">
                            Минимальный вывод с{" "}
                            <NumberFormat
                                value={process.env.REACT_APP_MIN_OUTPUT}
                                displayType={"text"}
                                thousandSeparator={" "}
                                renderText={(value) => value}
                            />
                            ₽
                        </button>
                    )}
                </div>

                <ReferralsBlockForm onSubmit={onSubmit} />

                <div className="referrals-info-block-content referrals-info-block-content-success">
                    <svg
                        width="35"
                        height="33"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.353577 3.27808L4.03779 6.96231"
                            stroke="#dd9e5e"
                        />
                        <path
                            d="M3.33063 6.96225L9.64643 0.646454"
                            stroke="#dd9e5e"
                        />
                    </svg>
                    <h3 className="referrals-info-block-content-success__title">
                        Ваша заявка принята <br />{" "}
                        <span>(время обработки 1-3 рабочих дня)</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default ReferralBlockBalance;
