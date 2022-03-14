import React from "react";

const MasterCardInfo = ({
    avatar,
    name,
    surname,
    instagram,
    masterDescription,
}) => {
    return (
        <div className="master-card-info">
            <div
                className="master-card-info-avatar"
                style={{
                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${avatar}")`,
                }}
            ></div>
            <div className="master-card-info-text">
                <div className="master-card-info-text-title">
                    <h2 className="title master-card-info-text__title">
                        {name} {surname}
                    </h2>

                    <div className="master-card-info-text-title-social">
                        <a
                            href={instagram}
                            className="master-card-info-text-title-social__link"
                        >
                            <svg
                                width="28"
                                height="31"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.7741 0H6.22589C2.79288 0 0 2.79288 0 6.22589V16.7743C0 20.2071 2.79288 23 6.22589 23H16.7743C20.2071 23 23 20.2071 23 16.7743V6.22589C23 2.79288 20.2071 0 16.7741 0ZM11.5 17.7889C8.03224 17.7889 5.21111 14.9678 5.21111 11.5C5.21111 8.03224 8.03224 5.21111 11.5 5.21111C14.9678 5.21111 17.7889 8.03224 17.7889 11.5C17.7889 14.9678 14.9678 17.7889 11.5 17.7889ZM17.9393 6.69424C16.9145 6.69424 16.081 5.86073 16.081 4.83595C16.081 3.81116 16.9145 2.97748 17.9393 2.97748C18.9641 2.97748 19.7977 3.81116 19.7977 4.83595C19.7977 5.86073 18.9641 6.69424 17.9393 6.69424Z"
                                    fill="#dd9e5e"
                                />
                                <path
                                    d="M11.5011 6.55933C8.77699 6.55933 6.56055 8.77559 6.56055 11.4999C6.56055 14.2239 8.77699 16.4404 11.5011 16.4404C14.2253 16.4404 16.4416 14.2239 16.4416 11.4999C16.4416 8.77559 14.2253 6.55933 11.5011 6.55933V6.55933Z"
                                    fill="#dd9e5e"
                                />
                                <path
                                    d="M17.9396 4.32605C17.6585 4.32605 17.4297 4.55487 17.4297 4.83598C17.4297 5.1171 17.6585 5.34592 17.9396 5.34592C18.2209 5.34592 18.4497 5.11727 18.4497 4.83598C18.4497 4.5547 18.2209 4.32605 17.9396 4.32605Z"
                                    fill="#dd9e5e"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <p className="description master-card-info-text__description">
                    {masterDescription}
                </p>
            </div>
        </div>
    );
};

export default MasterCardInfo;
