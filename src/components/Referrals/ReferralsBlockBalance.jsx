import React from "react";
import {useDispatch} from "react-redux";
import NumberFormat from "react-number-format";

import {sendRequestPaymentReferrals} from "../../redux/actions/payment";

import {ReferralsBlockForm, ReferralsBlockSuccess} from "../";

const ReferralBlockBalance = ({refBalance}) => {
    const dispatch = useDispatch();

    const [indexPayment, setIndexPayment] = React.useState(0);

    const onSubmit = (data) => {
        const functionSuccess = () => {
            setIndexPayment(2);
        };

        dispatch(sendRequestPaymentReferrals(data, functionSuccess));
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
                    <div className="referrals-info-block-content-balance-top">
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
                    </div>
                    <div className="referrals-info-block-content-balance-bottom">
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
                </div>

                <ReferralsBlockForm onSubmit={onSubmit} />

                <ReferralsBlockSuccess />
            </div>
        </div>
    );
};

export default ReferralBlockBalance;
