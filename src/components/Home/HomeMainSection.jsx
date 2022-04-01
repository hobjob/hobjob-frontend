import React from "react";
import { Link } from "react-router-dom";

import MainVideo from '../../assets/videos/main-video.mp4'

const HomeMainSection = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main-wrapper">
                    <div className="main-text">
                        <h1 className="main-text__title">
                            HobJob - платформа с курсами для творческих людей
                        </h1>
                        <p className="main-text__description">
                            Научитесь создавать шедевры своими руками
                        </p>
                        <Link to="/shop" className="btn main-text__btn">
                            Смотреть курсы
                        </Link>
                    </div>

                    <div className="main-video">
                        <video
                            className="main-video__video"
                            autoPlay
                            playsInline
                            loop
                            muted
                        >
                            <source src={MainVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMainSection;
