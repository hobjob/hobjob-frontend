import React from "react";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

import HobJobGoodImage from "../../assets/images/hobjob-good-image.jpg";

interface HobJobGoodProps {
    scrollToPrice?: boolean;
}

const HobJobGood: React.FC<HobJobGoodProps> = ({scrollToPrice}) => {
    return (
        <section className="hobjob-good">
            <div className="container">
                <div className="hobjob-good-wrapper">
                    <div className="hobjob-good-text">
                        <img
                            src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/hobjob-good.svg`}
                            alt=""
                            className="hobjob-good-text__logo"
                        />

                        <h2 className="title__mb hobjob-good-text__title">
                            Участие в благотворительности
                        </h2>

                        <p className="description__mb hobjob-good-text__description">
                            Покупая подписку на HobJob, вы помогаете детям с
                            заболеваниями, так как с каждой подписки мы
                            отправляем 9₽ в фонд{" "}
                            <a href="https://www.dobryaki.ru/wards">
                                «Клуб добряков»
                            </a>
                            . Обучаясь новым навыкам на HobJob, вы помогаете
                            детям.
                        </p>

                        {scrollToPrice ? (
                            <LinkScroll
                                to="price"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                className="btn hobjob-good-text__btn"
                            >
                                Начать обучение
                            </LinkScroll>
                        ) : (
                            <Link
                                to="/course"
                                className="btn hobjob-good-text__btn"
                            >
                                Начать обучение
                            </Link>
                        )}
                    </div>

                    <img
                        className="hobjob-good__image"
                        alt=""
                        src={HobJobGoodImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default HobJobGood;
