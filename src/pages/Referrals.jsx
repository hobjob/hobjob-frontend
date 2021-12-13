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
                                            <p className="referrals-top-text__description">
                                                Поделитесь бесплатной неделей
                                                Hobjob со своими друзьями и
                                                получите бесплатный месяц за
                                                каждого друга, как только он
                                                совершит свой первый полный
                                                платеж.
                                            </p>

                                            <Link
                                                to="/go/referrals/policy"
                                                className="btn-arrow referrals-top-text__btn"
                                            >
                                                Ознакомиться с правилами
                                                <svg
                                                    width="31"
                                                    height="12"
                                                    viewBox="0 0 31 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z"
                                                        fill="#D89350"
                                                    />
                                                </svg>
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
								
                                <ReferralsPartners />
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
