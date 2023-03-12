import React from "react";

import {UserReferral} from "../../models/User/IUserReferral";

const ReferralsPartnersItem: React.FC<UserReferral> = ({
    name,
    surname,
    avatar,
}) => {
    return (
        <div className="referrals-partners-item">
            <div className="referrals-partners-col">
                <div className="referrals-partners-item-partner">
                    <div
                        className="referrals-partners-item-partner-avatar"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${avatar.size_512}")`,
                        }}
                    ></div>
                    <h5 className="referrals-partners-item-partner__name">
                        {name !== "" ? (
                            <>
                                {name} {surname}
                            </>
                        ) : (
                            "Имя не указано"
                        )}
                    </h5>
                </div>
            </div>

            <div className="referrals-partners-col">
                <div className="referrals-partners-item-earnings">
                    <span className="referrals-partners-item-earnings__title">
                        + 30 дней
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReferralsPartnersItem;
