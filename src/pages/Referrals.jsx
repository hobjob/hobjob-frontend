import React from "react";
import {useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    Loader,
    ReferralsBlockLink,
    ReferralsBlockBalance,
    ReferralsPartners,
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
                    <section className="referrals">
                        <div className="container">
                            <div className="referrals-wrapper">
                                <div className="referrals-top-text-wrapper">
                                    <div className="referrals-top">
                                        <div className="referrals-top-text">
                                            <h2 className="title referrals-top-text__title">
                                                Вы получаете 20 % от стоимости
                                                курса
                                            </h2>
                                            <p className="referrals-top-text__description">
                                                Поделитесь ссылкой на курс в
                                                социальных сетях. Ваши друзья
                                                перейдут по ней,
                                                зарегистрируются и купят курс, а
                                                вы получаете 20% от стоимости
                                                покупки. Можно пригласить
                                                неограниченное число друзей и
                                                заработать от 200 рублей с
                                                каждой их покупки
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
