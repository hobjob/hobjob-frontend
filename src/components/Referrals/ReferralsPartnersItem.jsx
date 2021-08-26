import React from "react";

const ReferralsPartnersItem = ({partner, course, earnings}) => {
    return (
        <div className="referrals-partners-item">
            <div className="referrals-partners-col">
                <div className="referrals-partners-item-partner">
                    <div
                        className="referrals-partners-item-partner-avatar"
                        style={{
                            backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${partner.avatar}")`,
                        }}
                    ></div>
                    <h5 className="referrals-partners-item-partner__name">
                        {partner.name} {partner.surname}
                    </h5>
                </div>
            </div>

            <div className="referrals-partners-col">
                <div className="referrals-partners-item-earnings">
                    <span className="referrals-partners-item-earnings__title">
                        {earnings}₽
                    </span>
                </div>
            </div>

            <div className="referrals-partners-col">
                <div className="referrals-partners-item-purchase">
                    <span className="referrals-partners-item-purchase__title">
                        {course.title}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReferralsPartnersItem;
