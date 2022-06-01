import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import {fetchUserReferrals} from "../redux/actions/user";

import {Loader, ReferralsBlockLink, ReferralsPartners} from "../components/";

const Referrals = () => {
    const dispatch = useDispatch();
    const {userInfo, isLoadedUserInfo, referrals, isLoadedReferrals} =
        useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (!referrals.length && isLoadedUserInfo) {
            dispatch(fetchUserReferrals());
        }
    }, [isLoadedUserInfo]);

    return (
        <>
            <Helmet>
                <title>Пригласи друга - HobJob</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedUserInfo && isLoadedReferrals ? (
                    <section className="referrals">
                        <div className="container">
                            <div className="referrals-wrapper">
                                <div className="referrals-top-text-wrapper">
                                    <div className="referrals-top">
                                        <div className="referrals-top-text">
                                            <h2 className="title referrals-top-text__title">
                                                Приглашайте друзей и получайте
                                                бесплатные месяцы подписки
                                                HobJob
                                            </h2>
                                            <p className="description referrals-top-text__description">
                                                Поделитесь бесплатной неделей
                                                HobJob со своими друзьями и
                                                получите бесплатный месяц за
                                                каждого друга, как только он
                                                совершит свой первый полный
                                                платеж.
                                            </p>

                                            <Link
                                                to="/go/referrals/policy"
                                                className="btn__gray referrals-top-text__btn"
                                            >
                                                Ознакомиться с правилами
                                            </Link>
                                        </div>
                                        <div className="referrals-top-img">
                                            <img
                                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/referral.svg`}
                                                alt=""
                                                className="referrals-top-img__img"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="referrals-info-block-wrapper">
                                    <ReferralsBlockLink {...userInfo} />
                                </div>

                                <ReferralsPartners referrals={referrals} />
                            </div>
                        </div>
                    </section>
                ) : (
                    <Loader />
                )
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Referrals;
