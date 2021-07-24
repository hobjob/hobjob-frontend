import React from "react";

const ReferralBlockLink = ({_id}) => {
    const inputCopyLinkRef = React.useRef();

    const copyLink = () => {
        inputCopyLinkRef.current.select();
        document.execCommand("copy");
    };

    return (
        <div className="referrals-info-block referrals-info-block-link">
            <h3 className="referrals-info-block-link__title">
                Ваша реферальная ссылка
            </h3>
            <p className="referrals-info-block-link__subtitle">
                Это уникальная ссылка для вашего аккаунта, с помощью неё мы
                фиксируем ваших партнеров в системе
            </p>
            <div className="referrals-info-block-link-copy">
                <input
                    ref={inputCopyLinkRef}
                    className="referrals-info-block-link-copy__link"
                    value={`https://hobjob.ru?ref=${_id}`}
                    readOnly
                />

                <span
                    onClick={copyLink}
                    className="referrals-info-block-link-copy__subtitle"
                >
                    Копировать
                </span>
            </div>
        </div>
    );
};

export default ReferralBlockLink;
