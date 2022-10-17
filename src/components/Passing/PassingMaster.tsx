import React from "react";
import {Link} from "react-router-dom";

import {Master} from "../../models/IMaster";

const PassingMaster: React.FC<Master> = ({
    avatar,
    _id,
    masterDescription,
    name,
    surname,
}) => {
    return (
        <div className="passing-master">
            <div
                className="passing-master-image"
                style={{
                    backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${avatar.size_512}')`,
                }}
            ></div>
            <div className="passing-master-text">
                <h2 className="passing-master-text__title">
                    {name} {surname}
                </h2>
                <p className="passing-master-text__description">
                    {masterDescription}
                </p>
                <Link
                    to={`/master/${_id}`}
                    className="passing-master-text__link"
                >
                    Перейти на страницу мастера
                </Link>
            </div>
        </div>
    );
};

export default PassingMaster;
