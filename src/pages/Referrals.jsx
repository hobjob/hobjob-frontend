import React from "react";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    Loader,
    ReferralsBlockLink,
    ReferralsBlockBalance,
    ReferralsPartners,
    NotEmailConfirmed,
} from "../components/";

import Err404 from "./Err404";

const Referral = () => {
    const {user, isLoaded} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>Пригласи друга - HobJob</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoaded ? (
                    user.confirmed ? (
                        <section className="referrals">
                            <div className="container">
                                <div className="referrals-wrapper">
                                    <div className="referrals-top-text-wrapper">
                                        <div className="referrals-top">
                                            <div className="referrals-top-text">
                                                <h2 className="title referrals-top-text__title">
                                                    Получите 18% от стоимости
                                                    курса
                                                </h2>
                                                <p className="referrals-top-text__description">
                                                    Поделитесь ссылкой на курс в
                                                    социальных сетях. Ваши
                                                    друзья по ней перейдут,
                                                    зарегистрируются и купят
                                                    курс, а вы получите 18% от
                                                    стоимости покупки. Можно
                                                    пригласить неограниченное
                                                    количество друзей и
                                                    заработать от 258 рублей с
                                                    каждого купленного ими
                                                    курса.
                                                </p>
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
                                        <ReferralsBlockLink {...user} />

                                        <ReferralsBlockBalance {...user} />
                                    </div>

                                    <ReferralsPartners />
                                </div>
                            </div>
                        </section>
                    ) : (
                        <NotEmailConfirmed />
                    )
                ) : (
                    <div className="loader-wrapper">
                        <Loader />
                    </div>
                )
            ) : (
                <Err404 />
            )}
        </>
    );
};

export default Referral;
