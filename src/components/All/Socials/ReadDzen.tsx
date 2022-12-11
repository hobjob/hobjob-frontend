import React from "react";

import LogoDzen from "../../../assets/images/dzen.png";

const ReadDzen: React.FC = () => {
    return (
        <a
            href={process.env.REACT_APP_SOCIALS_DZEN}
            className="socials-read-item"
        >
            Читайте нас на
            <img src={LogoDzen} alt="Яндекс.Дзен" />
        </a>
    );
};

export default ReadDzen;
