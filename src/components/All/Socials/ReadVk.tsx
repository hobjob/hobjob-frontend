import React from "react";

import LogoVK from "../../../assets/images/vk.png";

const SocialsRead: React.FC = () => {
    return (
        <a
            href={process.env.REACT_APP_SOCIALS_VK}
            className="socials-read-item"
        >
            Читайте нас во
            <img src={LogoVK} alt="ВКонтакте" />
        </a>
    );
};

export default SocialsRead;
