import React from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";

import {useTypedSelector} from "../../hooks/useTypedSelector";

const HomeMainSection: React.FC = () => {
    const {items, isLoadedAllCategories} = useTypedSelector(
        ({categories}) => categories
    );

    return (
        <>
            {isLoadedAllCategories ? (
                <section className="main">
                    <div className="container">
                        <div className="main-wrapper">
                            <div className="main-text">
                                <h1 className="main-text__title">
                                    Курсы для творческих людей.
                                    <br />
                                    Научитесь создавать шедевры своими руками.{" "}
                                    <Link to="/course">Начать обучение</Link>
                                </h1>

                                <div className="main-text-categories">
                                    {Object.keys(items).map((key, index) => (
                                        <a
                                            href={`/course?categories=${items[key].transfer}`}
                                            className="main-text-categories__item"
                                            key={`main-text-categories__item-${index}`}
                                        >
                                            {items[key].title}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="main-video">
                                <ReactPlayer
                                    playing
                                    playsinline
                                    loop
                                    url={`${process.env.REACT_APP_IMAGE_DOMEN}/all/main-video/playlist.m3u8`}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
=======
import { Link } from "react-router-dom";

import MainVideo from '../../assets/videos/main-video.mp4'

const HomeMainSection: React.FC = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main-wrapper">
                    <div className="main-text">
                        <h1 className="main-text__title">
                            HobJob - курсы для творческих людей
                        </h1>
                        <p className="main-text__description">
                            Научитесь создавать шедевры своими руками
                        </p>
                        <Link to="/course" className="btn main-text__btn">
                            Смотреть все курсы
                        </Link>
                    </div>

                    <div className="main-video">
                        <svg
                            viewBox="0 0 552 312"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M546.986 29.6372C552.636 41.754 550.72 56.8764 542.083 74.0054C533.452 91.1216 518.186 110.079 497.453 129.709C455.995 168.961 392.85 210.747 317.839 245.725C242.829 280.703 170.23 302.216 113.512 308.743C85.148 312.007 60.813 311.517 42.1536 307.126C23.4802 302.732 10.6641 294.48 5.01397 282.363C-0.636174 270.246 1.27998 255.124 9.91701 237.995C18.5476 220.879 33.8141 201.922 54.547 182.291C96.0048 143.039 159.15 101.254 234.161 66.2756C309.171 31.2976 381.77 9.78444 438.488 3.25703C466.852 -0.00730417 491.187 0.483187 509.846 4.87387C528.52 9.26786 541.336 17.5205 546.986 29.6372Z"
                                stroke="#DD9E5E"
                                strokeWidth="2"
                            />
                        </svg>

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
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
    );
};

export default HomeMainSection;
