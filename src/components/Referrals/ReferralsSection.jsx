import React from "react";
import {Link} from "react-router-dom";

const ReferralsSection = () => {
    return (
        <section className="referrals-section">
            <div className="container">
                <div className="referrals-section-wrapper">
                    <div className="referrals-section-text">
                        <h2 className="title referrals-section-text__title">
                            Приглашайте друзей и получайте бесплатные месяцы
                            подписки HobJob
                        </h2>
                        <p className="referrals-section-text__description">
                            Поделитесь бесплатной неделей Hobjob со своими
                            друзьями и получите бесплатный месяц за каждого
                            друга, как только он совершит свой первый полный
                            платеж.
                        </p>

                        {localStorage.getItem("accessToken") ? (
                            <Link
                                to="/go/referrals"
                                className="btn-arrow referrals-section-text__btn"
                            >
                                Пригласить друга
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
                        ) : (
                            <a
                                href="/go/register"
                                className="btn-arrow referrals-section-text__btn"
                            >
                                Зарегистрироваться
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
                            </a>
                        )}
                    </div>
                    <div className="referrals-section-img">
                        <img
                            src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/referral.svg`}
                            alt=""
                            className="referrals-section-img__img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReferralsSection;
