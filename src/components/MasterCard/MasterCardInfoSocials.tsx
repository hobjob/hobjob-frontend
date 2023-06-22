import React from "react";

import {MasterSocials} from "../../models/IMaster";

import {Instagram, Vk, Telegram, Youtube} from "../";

const MasterCardInfoSocials: React.FC<MasterSocials> = ({
    inst,
    vk,
    telegram,
}) => {
    return (
        <div className="master-card-info-text-socials">
            {inst ? (
                <a href={inst} className="master-card-info-text-socials__link">
                    <Instagram />
                </a>
            ) : null}

            {vk ? (
                <a href={vk} className="master-card-info-text-socials__link">
                    <Vk />
                </a>
            ) : null}

            {telegram ? (
                <a
                    href={telegram}
                    className="master-card-info-text-socials__link"
                >
                    <Telegram />
                </a>
            ) : null}
        </div>
    );
};

export default MasterCardInfoSocials;
