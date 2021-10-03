import React from "react";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";
import ReactPlayer from "react-player";

const CoursePageMain = ({
    videoTrailerUrl,
    category,
    title,
    description,
    price,
    percentSale,
    discountNotPrice,
    masterId,
    masters,
    categories,
    addCart,
    pro,
    proPrice,
    isBuy,
    addState,
}) => {
    return (
        <section className="course-page-main">
            <div className="container">
                <div className="course-page-main-wrapper">
                    <div className="course-page-main-text">
                        <div className="course-page-main-text-subinfo">
                            <a
                                href={`/shop/?category=${category}`}
                                className="course-page-main-text-subinfo__category"
                            >
                                {categories[category]
                                    ? categories[category].title
                                    : null}
                            </a>
                        </div>
                        <h2 className="course-page__title course-page-main-text__title">
                            {title}
                        </h2>
                        <p className="course-page-main-text__description">
                            {description}
                        </p>
                        <Link
                            to={`/master/${masterId}`}
                            className="course-page-main-text-master"
                        >
                            <div
                                className="course-page-main-text-master-avatar"
                                style={{
                                    backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${masters[masterId].avatar}')`,
                                }}
                            ></div>
                            <h4 className="course-page-main-text-master__name">
                                {masters[masterId] ? (
                                    <>
                                        {masters[masterId].name}{" "}
                                        {masters[masterId].surname}
                                    </>
                                ) : null}
                            </h4>
                        </Link>

                        {!percentSale ? (
                            pro ? (
                                <div className="course-page-main-text-price">
                                    <p className="course-page-main-text-price__subprice">
                                        <NumberFormat
                                            value={price}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                    <p className="course-page-main-text-price__price">
                                        <NumberFormat
                                            value={proPrice}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                </div>
                            ) : (
                                <div className="course-page-main-text-price">
                                    <p className="course-page-main-text-price__price">
                                        <NumberFormat
                                            value={price}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                </div>
                            )
                        ) : (
                            <div className="course-page-main-text-price">
                                <p className="course-page-main-text-price__subprice">
                                    <NumberFormat
                                        value={discountNotPrice}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                    ₽
                                </p>
                                {pro ? (
                                    <p className="course-page-main-text-price__price">
                                        <NumberFormat
                                            value={proPrice}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                ) : (
                                    <p className="course-page-main-text-price__price">
                                        <NumberFormat
                                            value={price}
                                            displayType={"text"}
                                            thousandSeparator={" "}
                                            renderText={(value) => value}
                                        />
                                        ₽
                                    </p>
                                )}
                            </div>
                        )}

                        {isBuy ? (
                            <button className="btn disabled course-page-main-text__btn buy-btn">
                                Приобретен
                            </button>
                        ) : addState ? (
                            <Link
                                to="/cart"
                                className="btn-regular course-page-main-text__btn buy-btn"
                            >
                                Перейти в корзину
                            </Link>
                        ) : (
                            <button
                                className="btn course-page-main-text__btn buy-btn"
                                onClick={addCart}
                            >
                                Добавить в корзину
                            </button>
                        )}
                    </div>
                    <div className="course-page-main-video">
                        <ReactPlayer
                            url={videoTrailerUrl}
                            controls={true}
							width="100%"
							height="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageMain;
