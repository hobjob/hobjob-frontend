import React from "react";

const PaymentSubscribeBlock = ({
    title,
    description,
    icon,
    type,
    index,
    handlerTypeSubscribe,
    active,
    change,
}) => {
    return (
        <>
            {change ? (
                <div
                    className={`payment-info-block ${active ? "active" : ""}`}
                    onClick={() => handlerTypeSubscribe(index, type)}
                >
                    <div className="payment-info-block-text">
                        <h4 className="payment-info-block-text__title">
                            {title}
                        </h4>
                        <p className="payment-info-block-text__description">
                            {description}
                        </p>
                    </div>
                    <div
                        className={`payment-info-block-icon ${
                            active ? "active" : ""
                        }`}
                        dangerouslySetInnerHTML={{
                            __html: icon,
                        }}
                    ></div>
                </div>
            ) : (
                <div className={`payment-info-block active`}>
                    <div className="payment-info-block-text">
                        <h4 className="payment-info-block-text__title">
                            {title}
                        </h4>
                        <p className="payment-info-block-text__description">
                            {description}
                        </p>
                    </div>
                    <div
                        className={`payment-info-block-icon active`}
                        dangerouslySetInnerHTML={{
                            __html: icon,
                        }}
                    ></div>
                </div>
            )}
        </>
    );
};

export default PaymentSubscribeBlock;
