import React from "react";
import {Link} from "react-router-dom";

const HomeMainSection = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main-wrapper">
                    <div className="main-text">
                        <h1 className="main-text__title">
                            HobJob - сообщество творческих людей
                        </h1>
                        <p className="main-text__description">
                            Научитесь создавать шедевры своими руками
                        </p>
                        <Link to="/shop" className="btn main-text__btn">
                           Подобрать подходящий курс
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
                            <source
                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/main-video.mp4`}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMainSection;
