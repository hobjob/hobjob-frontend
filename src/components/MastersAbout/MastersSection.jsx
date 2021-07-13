import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import NumberFormat from "react-number-format";

const MastersSection = () => {
    const {statistics} = useSelector(({statistics}) => statistics);

    return (
        <section className="master-section">
            <div className="container">
                <div className="master-section-wrapper">
                    <div className="circle master-section-circle"></div>
                    <div className="master-section-left">
                        <div className="master-section-text">
                            <h2 className="title master-section-text__title">
                                Как стать Мастером в HobJob ?
                            </h2>
                            <p
                                className="
                                description__mt
                                master-section-text__description
                            "
                            >
                                Если вы обладаете уникальными знаниями или
                                навыками, хотите обучать людей своему ремеслу и
                                зарабатывать на этом - добро пожаловать!
                            </p>
                            <Link
                                to="/masters-about"
                                className="btn-arrow master-section-text__btn"
                            >
                                Стать мастером
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
                        <div className="master-section-statistics">
                            <div className="master-section-statistics-item">
                                <h4 className="master-section-statistics-item__title">
                                    <NumberFormat
                                        value={statistics.masters}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                </h4>
                                <span className="master-section-statistics-item__subtitle">
                                    Мастеров уже с нами!
                                </span>
                            </div>
                            <div className="master-section-statistics-item">
                                <h4 className="master-section-statistics-item__title">
                                    <NumberFormat
                                        value={statistics.payouts}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                </h4>
                                <span className="master-section-statistics-item__subtitle">
                                    Выплат
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="master-section-right">
                        <img src={`${process.env.REACT_APP_DOMEN}/all/master-section-what.svg`} alt="" className="master-section__img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MastersSection;
