import React from "react";

import CoursePageSubscribeBlockImage from "../../../assets/images/subscribe-block-image.jpg";
import CoursePageSubscribeBlockImageMedia from "../../../assets/images/subscribe-block-image-media.jpg";

interface CoursePagePriceSubscribeProps {
    openSubscribeRates: () => void;
}

const CoursePagePriceSubscribe: React.FC<CoursePagePriceSubscribeProps> = ({
    openSubscribeRates,
}) => {
    return (
        <div className="course-page-price-blocks-subscribe">
            <div className="course-page-price-blocks-subscribe-text">
                <p className="course-page-price-blocks-subscribe-text__subprice">
                    Подписка HobJob
                </p>
                <h3 className="course-page-price-blocks-subscribe-text__price">
                    <span>от</span> 249₽ <span>в месяц</span>
                </h3>
                <div className="course-page-price-blocks-subscribe-text-list">
                    <p className="course-page-price-blocks-subscribe-text-list__item">
                        <svg
                            width="17"
                            height="15"
                            viewBox="0 0 17 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 8.55319C1.35344 9.05484 1.99095 9.33443 2.51005 9.62884C3.73887 10.3258 4.87341 11.1718 6.02955 11.9811C6.50626 12.3148 7.24248 12.7081 7.56028 13.2281C7.65966 13.3907 7.69731 13.1197 7.76714 12.974C8.02023 12.446 8.16902 11.8806 8.43203 11.3546C9.10787 10.0029 9.9949 8.77056 10.8522 7.53073C12.1788 5.61236 13.4636 3.6302 14.9391 1.82151C15.113 1.60833 15.4142 1.13333 15.6809 1"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M1 8.50003C2.41662 9.60185 3.83312 10.6989 5.29669 11.7388C5.74638 12.0583 6.13423 12.464 6.60284 12.7524C6.78275 12.8631 6.96431 12.9421 7.14066 13.0479C7.30999 13.1495 7.63947 13.2222 7.75532 13.3671C7.78374 13.4026 7.92318 12.898 7.93853 12.8351C8.02205 12.4935 8.15014 12.1865 8.25768 11.8541C8.53994 10.9816 9.01757 10.1906 9.40426 9.36292C9.69347 8.7439 10.0651 8.18097 10.4149 7.59578C10.8269 6.90659 11.2086 6.22674 11.6797 5.5745C12.1232 4.96041 12.5754 4.36585 13.0745 3.79554C13.5955 3.20007 14.2342 2.7404 14.8298 2.22344C15.1097 1.9805 15.4824 1.59125 15.8286 1.43739C15.9239 1.39504 15.9667 1.36578 16 1.26599"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        Доступ ко всем курсам
                    </p>
                    <p className="course-page-price-blocks-subscribe-text-list__item">
                        <svg
                            width="17"
                            height="15"
                            viewBox="0 0 17 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 8.55319C1.35344 9.05484 1.99095 9.33443 2.51005 9.62884C3.73887 10.3258 4.87341 11.1718 6.02955 11.9811C6.50626 12.3148 7.24248 12.7081 7.56028 13.2281C7.65966 13.3907 7.69731 13.1197 7.76714 12.974C8.02023 12.446 8.16902 11.8806 8.43203 11.3546C9.10787 10.0029 9.9949 8.77056 10.8522 7.53073C12.1788 5.61236 13.4636 3.6302 14.9391 1.82151C15.113 1.60833 15.4142 1.13333 15.6809 1"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M1 8.50003C2.41662 9.60185 3.83312 10.6989 5.29669 11.7388C5.74638 12.0583 6.13423 12.464 6.60284 12.7524C6.78275 12.8631 6.96431 12.9421 7.14066 13.0479C7.30999 13.1495 7.63947 13.2222 7.75532 13.3671C7.78374 13.4026 7.92318 12.898 7.93853 12.8351C8.02205 12.4935 8.15014 12.1865 8.25768 11.8541C8.53994 10.9816 9.01757 10.1906 9.40426 9.36292C9.69347 8.7439 10.0651 8.18097 10.4149 7.59578C10.8269 6.90659 11.2086 6.22674 11.6797 5.5745C12.1232 4.96041 12.5754 4.36585 13.0745 3.79554C13.5955 3.20007 14.2342 2.7404 14.8298 2.22344C15.1097 1.9805 15.4824 1.59125 15.8286 1.43739C15.9239 1.39504 15.9667 1.36578 16 1.26599"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        Скачать дополнительные материалы
                    </p>
                    <p className="course-page-price-blocks-subscribe-text-list__item">
                        <svg
                            width="17"
                            height="15"
                            viewBox="0 0 17 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 8.55319C1.35344 9.05484 1.99095 9.33443 2.51005 9.62884C3.73887 10.3258 4.87341 11.1718 6.02955 11.9811C6.50626 12.3148 7.24248 12.7081 7.56028 13.2281C7.65966 13.3907 7.69731 13.1197 7.76714 12.974C8.02023 12.446 8.16902 11.8806 8.43203 11.3546C9.10787 10.0029 9.9949 8.77056 10.8522 7.53073C12.1788 5.61236 13.4636 3.6302 14.9391 1.82151C15.113 1.60833 15.4142 1.13333 15.6809 1"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M1 8.50003C2.41662 9.60185 3.83312 10.6989 5.29669 11.7388C5.74638 12.0583 6.13423 12.464 6.60284 12.7524C6.78275 12.8631 6.96431 12.9421 7.14066 13.0479C7.30999 13.1495 7.63947 13.2222 7.75532 13.3671C7.78374 13.4026 7.92318 12.898 7.93853 12.8351C8.02205 12.4935 8.15014 12.1865 8.25768 11.8541C8.53994 10.9816 9.01757 10.1906 9.40426 9.36292C9.69347 8.7439 10.0651 8.18097 10.4149 7.59578C10.8269 6.90659 11.2086 6.22674 11.6797 5.5745C12.1232 4.96041 12.5754 4.36585 13.0745 3.79554C13.5955 3.20007 14.2342 2.7404 14.8298 2.22344C15.1097 1.9805 15.4824 1.59125 15.8286 1.43739C15.9239 1.39504 15.9667 1.36578 16 1.26599"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        Новые курсы добавляются каждый месяц
                    </p>
                    <a
                        href="https://www.dobryaki.ru/wards"
                        className="course-page-price-blocks-subscribe-text-list-hobjob-good"
                    >
                        <svg
                            width="17"
                            height="15"
                            viewBox="0 0 17 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 8.55319C1.35344 9.05484 1.99095 9.33443 2.51005 9.62884C3.73887 10.3258 4.87341 11.1718 6.02955 11.9811C6.50626 12.3148 7.24248 12.7081 7.56028 13.2281C7.65966 13.3907 7.69731 13.1197 7.76714 12.974C8.02023 12.446 8.16902 11.8806 8.43203 11.3546C9.10787 10.0029 9.9949 8.77056 10.8522 7.53073C12.1788 5.61236 13.4636 3.6302 14.9391 1.82151C15.113 1.60833 15.4142 1.13333 15.6809 1"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M1 8.50003C2.41662 9.60185 3.83312 10.6989 5.29669 11.7388C5.74638 12.0583 6.13423 12.464 6.60284 12.7524C6.78275 12.8631 6.96431 12.9421 7.14066 13.0479C7.30999 13.1495 7.63947 13.2222 7.75532 13.3671C7.78374 13.4026 7.92318 12.898 7.93853 12.8351C8.02205 12.4935 8.15014 12.1865 8.25768 11.8541C8.53994 10.9816 9.01757 10.1906 9.40426 9.36292C9.69347 8.7439 10.0651 8.18097 10.4149 7.59578C10.8269 6.90659 11.2086 6.22674 11.6797 5.5745C12.1232 4.96041 12.5754 4.36585 13.0745 3.79554C13.5955 3.20007 14.2342 2.7404 14.8298 2.22344C15.1097 1.9805 15.4824 1.59125 15.8286 1.43739C15.9239 1.39504 15.9667 1.36578 16 1.26599"
                                stroke="#DFAB7D"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="course-page-price-blocks-subscribe-text-list-hobjob-good-text">
                            <img
                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/hobjob-good.svg`}
                                alt=""
                                className="course-page-price-blocks-subscribe-text-list-hobjob-good-text__logo"
                            />
                            <p className="course-page-price-blocks-subscribe-text-list-hobjob-good-text__text">
                                Обучаясь, вы помогаете детям
                            </p>
                        </div>
                    </a>
                </div>

                <button
                    onClick={openSubscribeRates}
                    className="btn course-page-price-blocks-subscribe-text__btn"
                >
                    Оформить подписку
                </button>
            </div>

            <div className="course-page-price-blocks-subscribe-image">
                <img
                    alt=""
                    className="course-page-price-blocks-subscribe-image__image"
                    src={CoursePageSubscribeBlockImage}
                />
            </div>

            <div
                className="course-page-price-blocks-subscribe-image-media"
                style={{
                    backgroundImage: `url(${CoursePageSubscribeBlockImageMedia})`,
                }}
            ></div>
        </div>
    );
};

export default CoursePagePriceSubscribe;
