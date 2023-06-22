import React from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";

import Test from "../../assets/images/test.png";

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
                                    Творческие курсы по подписке <br />
                                    Научитесь создавать шедевры своими руками
                                </h1>

                                <div className="main-text-categories">
                                    {Object.keys(items).map((key, index) => (
                                        <Link
                                            to={`/course?categories=${items[key].transfer}`}
                                            className="main-text-categories__item"
                                            key={`main-text-categories__item-${index}`}
                                        >
                                            {items[key].title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* <Marquee
                                style={{alignItems: "flex-start"}}
                                gradient={false}
                                speed={10}
                                pauseOnHover={false}
                                className="main-image"
                            >
                                <img
                                    src={Test}
                                    alt=""
                                    className="main-image__image"
                                />
                            </Marquee> */}
                            <div className="main-video">
                                {/* <ReactPlayer
                                    playing={true}
                                    playsinline
                                    loop
                                    muted
                                    url={`${process.env.REACT_APP_IMAGE_DOMEN}/all/main-video/index.m3u8`}
                                    width="100%"
                                    height="100%"
                                /> */}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default HomeMainSection;
