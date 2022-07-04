import React from "react";

import {Master} from "../../models/IMaster";

import {MasterCardInfoSocials} from "../";

const MasterCardInfo: React.FC<Master> = ({
    avatar,
    name,
    surname,
    masterDescription,
    socials,
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
                <h2 className="title master-card-info-text__title">
                    {name} {surname}
                </h2>
                <p className="description master-card-info-text__description">
                    {masterDescription}
                </p>

                <MasterCardInfoSocials {...socials} />
            </div>
        </div>
    );
};

export default MasterCardInfo;
