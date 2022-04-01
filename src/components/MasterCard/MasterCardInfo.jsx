import React from "react";

const MasterCardInfo = ({avatar, name, surname, masterDescription}) => {
    return (
        <div className="master-card-info">
            <div
                className="master-card-info-avatar"
                style={{
                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${avatar}")`,
                }}
            ></div>
            <div className="master-card-info-text">
                <span className="master-card-info-text__subtitle">мастер HobJob</span>

                <h2 className="title master-card-info-text__title">
                    {name} {surname}
                </h2>
                <p className="description master-card-info-text__description">
                    {masterDescription}
                </p>
            </div>
        </div>
    );
};

export default MasterCardInfo;
