import React from "react";

const ReferralsBlockLink = ({_id}) => {
    const [stateCopy, setStateCopy] = React.useState(false);

    const inputCopyLinkRef = React.useRef();

    const copyLink = () => {
        inputCopyLinkRef.current.select();
        document.execCommand("copy");

        setStateCopy(true);
    };

    return (
        <div className="referrals-info-block referrals-info-block-link">
            <h3 className="referrals-info-block-link__title">
                Ваша реферальная ссылка
            </h3>
            <p className="referrals-info-block-link__subtitle">
                Это уникальная ссылка для вашего аккаунта, с помощью нее мы
                фиксируем ваших партнеров в системе
            </p>

            <div className="referrals-info-block-link-copy">
                <input
                    ref={inputCopyLinkRef}
                    className="referrals-info-block-link-copy__link"
                    value={`hobjob.ru?ref=${_id}`}
                    readOnly
                />
                <div className="referrals-info-block-link-copy-subtitle">
                    <span
                        onClick={copyLink}
                        className={`referrals-info-block-link-copy-subtitle__subtitle ${
                            stateCopy ? "active" : ""
                        }`}
                    >
                        Копировать
                    </span>
                    <span
                        className={`referrals-info-block-link-copy-subtitle__success ${
                            stateCopy ? "active" : ""
                        }`}
                    >
                        Скопировано{" "}
                        <svg
                            width="10"
                            height="8"
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
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReferralsBlockLink;
