import React from "react";

import {MasterSocials} from "../../models/IMaster";

import {Dzen, Vk, Youtube, Telegram, Instagram, Tiktok} from "../";

const MasterCardInfoSocials: React.FC<MasterSocials> = ({
    dzen, vk, youtube, telegram, inst, tiktok
}) => {
    return (
        <div className="master-card-info-text-socials">
            {dzen ? (
                <a href={dzen} className="master-card-info-text-socials__link">
                    <Dzen />
                </a>
            ) : null}

            {vk ? (
                <a href={vk} className="master-card-info-text-socials__link">
                    <Vk />
                </a>
            ) : null}

            {youtube ? (
                <a
                    href={youtube}
                    className="master-card-info-text-socials__link"
                >
                    <Youtube />
                </a>
            ) : null}

            {inst ? (
                <a href={inst} className="master-card-info-text-socials__link">
                    <Instagram />
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

            {tiktok ? (
                <a
                    href={tiktok}
                    className="master-card-info-text-socials__link"
                >
                    <Tiktok />
                </a>
            ) : null}
        </div>
    );
};

export default MasterCardInfoSocials;
