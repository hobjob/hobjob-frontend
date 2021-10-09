import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {checkDeclension} from "../../Functions/checkDeclension";
import {abbreviateNumber} from "../../Functions/abbreviateNumber";

import {fetchStatistics} from "../../redux/actions/statistics";

const AboutSection = () => {
    const dispatch = useDispatch();

    const {statistics, isLoaded} = useSelector(({statistics}) => statistics);

    React.useEffect(() => {
        if (!Object.keys(statistics).length) {
            dispatch(fetchStatistics());
        }
    }, []);

    return (
        <section className="about-section">
            <div className="container">
                <div className="about-section-wrapper">
                    <div className="circle about-section-circle"></div>

                    <div className="about-section-left">
                        <h2 className="title about-section__title">
                            Что такое HobJob?
                        </h2>
                    </div>
                    <div className="about-section-right">
                        <div className="about-section-text">
                            <p
                                className="
                                    description__mb
                                    about-section__description
                                "
                            >
                                HobJob - это платформа, на которой представлены
                                курсы мастеров своего дела. Они учат тому, что
                                умеют лучше всего - творить.
                            </p>
                            <Link
                                to="/about"
                                className="btn-arrow about-section__btn"
                            >
                                Подробнее
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

                        <div className="about-section-statistics">
                            <div className="about-section-statistics-item">
                                <h4 className="about-section-statistics-item__title">
                                    {isLoaded
                                        ? abbreviateNumber(statistics.masters)
                                        : "-"}
                                </h4>
                                <span
                                    className="
                                        about-section-statistics-item__subtitle
                                    "
                                >
                                    {
                                        checkDeclension(statistics.masters, [
                                            "Мастер",
                                            "Мастера",
                                            "Мастеров",
                                        ]).text
                                    }
                                </span>
                            </div>
                            <div className="about-section-statistics-item">
                                <h4 className="about-section-statistics-item__title">
                                    {isLoaded
                                        ? abbreviateNumber(statistics.courses)
                                        : "-"}
                                </h4>
                                <span
                                    className="
                                        about-section-statistics-item__subtitle
                                    "
                                >
                                    {
                                        checkDeclension(statistics.courses, [
                                            "Курс",
                                            "Курса",
                                            "Курсов",
                                        ]).text
                                    }
                                </span>
                            </div>
                            {/* <div className="about-section-statistics-item">
                                <h4 className="about-section-statistics-item__title">
                                    {isLoaded
                                        ? abbreviateNumber(statistics.students)
                                        : "-"}
                                </h4>
                                <span
                                    className="
                                        about-section-statistics-item__subtitle
                                    "
                                >
                                    {
                                        checkDeclension(statistics.students, [
                                            "Ученик",
                                            "Ученика",
                                            "Учеников",
                                        ]).text
                                    }
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
