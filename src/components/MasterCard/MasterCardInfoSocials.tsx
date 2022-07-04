import React from "react";

import {MasterSocials} from "../../models/IMaster";

import {Instagram, Vk, TikTok, Telegram, Youtube} from "../";

const MasterCardInfoSocials: React.FC<MasterSocials> = ({
    inst,
    vk,
    tiktok,
    telegram,
}) => {
    return (
        <div className="master-card-info-text-socials">
            {inst !== "" || vk !== "" || tiktok !== "" || telegram !== "" ? (
                <p className="master-card-info-text-socials__subtitle">
                    Социальные сети мастера
                </p>
            ) : null}

            <div className="master-card-info-text-socials-links-wrapper">
                {inst ? (
                    <a
                        href={inst}
                        className="master-card-info-text-socials__link"
                    >
                        <Instagram />
                    </a>
                ) : null}

                {vk ? (
                    <a
                        href={vk}
                        className="master-card-info-text-socials__link"
                    >
                        <Vk />
                    </a>
                ) : null}

                {tiktok ? (
                    <a
                        href={tiktok}
                        className="master-card-info-text-socials__link"
                    >
                        <TikTok />
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
        </div>
    );
};

export default MasterCardInfoSocials;
