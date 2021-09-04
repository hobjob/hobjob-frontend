import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCourseById} from "../redux/actions/courses";
import {addCourseCart} from "../redux/actions/cart";

import {AboutSection, Loader} from "../components";

const CoursePage = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {itemById, isLoadedCourseById} = useSelector(({courses}) => courses);
    const {cart} = useSelector(({cart}) => cart);
    const {courses} = useSelector(({user}) => user);

    const [visibleButton, setVisibleButton] = React.useState(false);
    const [addState, setAddState] = React.useState(false);

    React.useEffect(() => {
        if (cart[id]) {
            setAddState(true);
        } else {
            setAddState(false);
        }
    }, [Object.keys(cart).length]);

    React.useEffect(() => {
        const arrayBtn = document.querySelectorAll(".buy-btn");

        if (addState) {
            if (courses[id]) {
                for (let i = 0; i < arrayBtn.length; i++) {
                    var link = document.createElement("button");

                    link.innerHTML = "Приобретен";

                    link.classList.add("btn");
                    link.classList.add("disabled");
                    link.classList.add("course-flax-bears-main-text__btn");

                    arrayBtn[i].parentNode.replaceChild(link, arrayBtn[i]);
                }
            } else {
                for (let i = 0; i < arrayBtn.length; i++) {
                    var link = document.createElement("a");

                    link.innerHTML = "Перейти в корзину";
                    link.setAttribute("href", "/cart");

                    link.classList.add("btn-regular");
                    link.classList.add("course-flax-bears-main-text__btn");

                    arrayBtn[i].parentNode.replaceChild(link, arrayBtn[i]);
                }
            }
        } else if (courses[id]) {
            for (let i = 0; i < arrayBtn.length; i++) {
                var link = document.createElement("button");

                link.innerHTML = "Приобретен";

                link.classList.add("btn");
                link.classList.add("disabled");
                link.classList.add("course-flax-bears-main-text__btn");

                arrayBtn[i].parentNode.replaceChild(link, arrayBtn[i]);
            }
        }
    }, [Object.keys(courses).length, addState, isLoadedCourseById]);

    React.useEffect(() => {
        if (isLoadedCourseById) {
            const arrayBtn = document.querySelectorAll(".buy-btn");

            for (let i = 0; i < arrayBtn.length; i++) {
                arrayBtn[i].addEventListener("click", () => {
                    dispatch(addCourseCart({_id: id}));
                });
            }
        }
    }, [isLoadedCourseById]);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        window.addEventListener("scroll", () => {
            if (Math.floor(window.pageYOffset) > 200) {
                setVisibleButton(true);
            } else {
                setVisibleButton(false);
            }
        });

        dispatch(fetchCourseById(id));
    }, []);

    return (
        <>
            {isLoadedCourseById ? (
                <>
                    <Helmet>
                        <title>{itemById.title} - HobJob</title>
                    </Helmet>
                    {addState || courses[id] ? null : (
                        <button
                            className={`btn-small-round buy-btn course-flax-bears__btn ${
                                visibleButton ? "active" : ""
                            }`}
                        >
                            Добавить в корзину{" "}
                            {document.documentElement.clientWidth > 500
                                ? ""
                                : ` за ${itemById.price}₽`}
                        </button>
                    )}
                    <section className="course-flax-bears-main">
                        <div className="container">
                            <div className="course-flax-bears-main-wrapper">
                                <div className="course-flax-bears-main-text">
                                    <div className="course-flax-bears-main-text-subinfo">
                                        <a
                                            href=""
                                            className="course-flax-bears-main-text-subinfo__category"
                                        >
                                            Ремесло и Технология
                                        </a>
                                        <span className="course-flax-bears-main-text-subinfo__time">
                                            Длительность курса 1 час
                                        </span>
                                    </div>

                                    <h2 className="course-flax-bears__title course-flax-bears-main-text__title">
                                        Шитьё мишек изо льна
                                    </h2>

                                    <p className="course-flax-bears-main-text__description">
                                        Узнайте, как за несколько часов сшить
                                        уникальную игрушу из натурального льна
                                    </p>

                                    <a
                                        href="/master/610bd1d248914c0390aa9a36"
                                        className="course-flax-bears-main-text-master"
                                    >
                                        <div
                                            className="course-flax-bears-main-text-master-avatar"
                                            style={{
                                                backgroundImage:
                                                    "url('http://localhost:5000/uploads/user_avatar/78581a85-6767-482d-b723-bf1e75c1a383-IMG_2410_1.jpg')",
                                            }}
                                        ></div>
                                        <h4 className="course-flax-bears-main-text-master__name">
                                            Ирина Нагибина
                                        </h4>
                                    </a>
                                    <span className="course-flax-bears-main-text__price">
                                        1 790₽
                                    </span>
                                    <button className="btn course-flax-bears-main-text__btn buy-btn">
                                        Добавить в корзину
                                    </button>
                                </div>
                                <div className="course-flax-bears-main-video">
                                    <video
                                        controls
                                        playsInline
                                        poster="http://localhost:5000/uploads/courses/dad3aa21-5cb9-487a-8333-56411e655805-IMG_2410.jpg"
                                    >
                                        <source
                                            src="http://localhost:5000/uploads/courses/course-flax-bears-tiser.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-about">
                        <div className="container">
                            <div className="course-flax-bears-about-wrapper">
                                <div
                                    className="course-flax-bears-about-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2440.jpg')",
                                    }}
                                ></div>
                                <div className="course-flax-bears-about-text">
                                    <h2 className="course-flax-bears__title course-flax-bears-about-text__title">
                                        О чём курс
                                    </h2>
                                    <p className="course-flax-bears-about-text__description">
                                        С помощью данного курса вы научитесь
                                        делать чудесного мишку из натурального
                                        льна, который впишется в любой интерьер.
                                        Ирина поделится своей авторской
                                        выкройкой, расскажет и покажет, как
                                        выбирать ткань, кроить, наполнять и
                                        сшивать игрушку
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-for">
                        <div className="container">
                            <div className="course-flax-bears-for-wrapper">
                                <h2 className="course-flax-bears__title__mb course-flax-bears-for__title">
                                    Кому подойдёт
                                </h2>
                                <div className="course-flax-bears-for-items-wrapper">
                                    <div className="course-flax-bears-for-item">
                                        <div className="course-flax-bears-for-item-icon">
                                            <svg
                                                width="153"
                                                height="92"
                                                viewBox="0 0 153 92"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M150.941 44.9911C151.424 69.2869 118.468 89.6464 77.3313 90.4654C36.1942 91.2844 2.45392 72.2527 1.97021 47.957"
                                                    stroke="#DFAB7D"
                                                    strokeWidth="3"
                                                />
                                                <path
                                                    d="M1.96995 47.9572C1.48624 23.6615 34.4423 3.302 75.5794 2.483C116.716 1.66399 150.457 20.6956 150.94 44.9913"
                                                    stroke="#DFAB7D"
                                                    strokeWidth="3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="course-flax-bears-for-item-text">
                                            <h3 className="course-flax-bears-for-item__title">
                                                Новичкам в шитье
                                            </h3>
                                            <p className="course-flax-bears-for-item__description">
                                                Даже если вы ни разу не держали
                                                в руках иголку и ножницы - не
                                                беда! Всё гораздо проще, чем
                                                кажется
                                            </p>
                                        </div>
                                    </div>

                                    <div className="course-flax-bears-for-item">
                                        <div className="course-flax-bears-for-item-icon">
                                            <svg
                                                width="163"
                                                height="51"
                                                viewBox="0 0 163 51"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M152.383 0.746919C151.778 0.180572 150.829 0.211583 150.263 0.816184L141.034 10.6687C140.467 11.2733 140.498 12.2226 141.103 12.7889C141.708 13.3553 142.657 13.3243 143.223 12.7197L151.427 3.96184L160.185 12.1655C160.789 12.7319 161.738 12.7009 162.305 12.0963C162.871 11.4917 162.84 10.5424 162.236 9.97608L152.383 0.746919ZM149.858 1.89062C150.231 13.2891 142.744 24.1323 129.76 32.3843C116.809 40.6153 98.6257 46.087 78.285 46.7516L78.383 49.75C99.1655 49.071 117.891 43.482 131.369 34.9162C144.814 26.3714 153.278 14.6817 152.857 1.79267L149.858 1.89062ZM78.285 46.7516C57.9442 47.4161 39.443 43.1428 25.982 35.7746C12.4868 28.3877 4.30859 18.0563 3.93621 6.65781L0.937812 6.75577C1.35889 19.6448 10.5675 30.7572 24.5416 38.4062C38.5499 46.074 57.6004 50.4289 78.383 49.75L78.285 46.7516Z"
                                                    fill="#DFAB7D"
                                                />
                                                <path
                                                    d="M2.43687 48.8417C1.64341 24.5541 34.3372 3.77607 75.4605 2.43259C116.584 1.08912 150.564 19.689 151.357 43.9766"
                                                    stroke="#DFAB7D"
                                                    strokeWidth="3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="course-flax-bears-for-item-text">
                                            <h3 className="course-flax-bears-for-item__title">
                                                Тем, кто хочет улучшить свои
                                                навыки
                                            </h3>
                                            <p className="course-flax-bears-for-item__description">
                                                Ирина поделится своим
                                                многолетним опытм и секретами,
                                                которые в дальнейшем пригодятся
                                                в творчестве и не только
                                            </p>
                                        </div>
                                    </div>

                                    <div className="course-flax-bears-for-item">
                                        <div className="course-flax-bears-for-item-icon">
                                            <svg
                                                width="164"
                                                height="101"
                                                viewBox="0 0 164 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M154.102 24.5619C154.82 24.1495 155.068 23.2327 154.656 22.5142L147.936 10.8058C147.523 10.0873 146.606 9.83918 145.888 10.2516C145.169 10.664 144.921 11.5807 145.334 12.2992L151.307 22.7067L140.9 28.6803C140.181 29.0927 139.933 30.0095 140.346 30.728C140.758 31.4465 141.675 31.6946 142.393 31.2822L154.102 24.5619ZM153.747 21.813C141.929 18.6143 134.181 20.1563 128.798 24.9176C123.572 29.5407 120.898 36.9644 118.527 44.6158C116.108 52.422 113.972 60.5895 109.983 67.4686C106.05 74.2508 100.358 79.6842 90.828 81.9711L91.528 84.8883C102.002 82.3749 108.315 76.3253 112.578 68.9736C116.786 61.7187 119.038 53.1014 121.392 45.5037C123.795 37.7512 126.278 31.1519 130.786 27.1647C135.137 23.3158 141.7 21.6604 152.963 24.7088L153.747 21.813ZM90.828 81.9711C71.0382 86.7198 52.0554 86.2614 37.386 81.7561C22.6793 77.2393 12.5874 68.7673 9.92638 57.6775L7.00919 58.3775C10.0182 70.9175 21.2768 79.9469 36.5052 84.6239C51.7711 89.3124 71.3083 89.7401 91.528 84.8883L90.828 81.9711Z"
                                                    fill="#DFAB7D"
                                                />
                                                <path
                                                    d="M94.4188 0.926911C94.0182 0.201757 93.1057 -0.0613861 92.3805 0.339171L80.5634 6.86655C79.8383 7.2671 79.5751 8.17966 79.9757 8.90482C80.3762 9.62997 81.2888 9.89311 82.0139 9.49256L92.518 3.69045L98.3201 14.1945C98.7207 14.9197 99.6332 15.1828 100.358 14.7823C101.084 14.3817 101.347 13.4691 100.946 12.744L94.4188 0.926911ZM16.5926 86.7135C15.2797 81.2419 16.4377 77.267 19.3569 74.0932C22.3793 70.8072 27.4097 68.2495 34.1107 66.0533C40.78 63.8674 48.8903 62.1041 57.8969 60.2787C66.8755 58.459 76.7263 56.5811 86.7626 54.1728L86.0626 51.2556C76.0942 53.6476 66.324 55.5098 57.301 57.3384C48.3061 59.1615 40.0342 60.9548 33.1763 63.2025C26.3501 65.4398 20.7082 68.1925 17.1489 72.0623C13.4865 76.0441 12.1534 81.0703 13.6755 87.4135L16.5926 86.7135ZM86.7626 54.1728C96.821 51.7592 102.439 48.5354 104.809 44.3189C107.23 40.0126 105.961 35.2434 103.9 30.6932C102.855 28.3844 101.54 25.9968 100.243 23.6165C98.9331 21.2149 97.6317 18.8052 96.5501 16.3674C94.3792 11.4741 93.2083 6.71043 94.547 2.06778L91.6645 1.23658C90.0316 6.89926 91.5395 12.471 93.8079 17.584C94.946 20.1493 96.3044 22.6605 97.6087 25.0526C98.9246 27.466 100.178 29.7451 101.168 31.9308C103.178 36.3697 103.851 39.9015 102.194 42.8489C100.487 45.8861 96.0089 48.8689 86.0626 51.2556L86.7626 54.1728Z"
                                                    fill="#DFAB7D"
                                                />
                                            </svg>
                                        </div>
                                        <div className="course-flax-bears-for-item-text">
                                            <h3 className="course-flax-bears-for-item__title">
                                                Тем, кто хочет научиться чему-то
                                                новому
                                            </h3>
                                            <p className="course-flax-bears-for-item__description">
                                                Шитьё помагает улучшить
                                                координацию глаз и рук, а так же
                                                выработать концентрацию
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-skills">
                        <div className="container">
                            <div className="course-flax-bears-skills-wrapper">
                                <div className="course-flax-bears-skills-title">
                                    <h2 className="course-flax-bears__title course-flax-bears-skills__title">
                                        Чему вы научитесь?
                                    </h2>
                                </div>
                                <div className="course-flax-bears-skills-items-wrapper">
                                    <div className="course-flax-bears-skills-item">
                                        <p className="course-flax-bears-skills-item__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-skills-item__title">
                                            Выбирать ткань
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-skills-item">
                                        <p className="course-flax-bears-skills-item__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-skills-item__title">
                                            Делать выкройки
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-skills-item">
                                        <p className="course-flax-bears-skills-item__subtitle">
                                            03
                                        </p>
                                        <p className="course-flax-bears-skills-item__title">
                                            Разбираться в иголках
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-skills-item">
                                        <p className="course-flax-bears-skills-item__subtitle">
                                            04
                                        </p>
                                        <p className="course-flax-bears-skills-item__title">
                                            Сшивать вырезанные части
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-skills-item">
                                        <p className="course-flax-bears-skills-item__subtitle">
                                            05
                                        </p>
                                        <p className="course-flax-bears-skills-item__title">
                                            Набивать игрушку
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-skills-item">
                                        <p className="course-flax-bears-skills-item__subtitle">
                                            06
                                        </p>
                                        <p className="course-flax-bears-skills-item__title">
                                            Формировать голову изделия
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-skills-images">
                        <div className="container">
                            <div className="course-flax-bears-skills-images-wrapper">
                                <div
                                    className="course-flax-bears-skills-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/P1140428.jpg')",
                                    }}
                                ></div>

                                <div
                                    className="course-flax-bears-skills-img long"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2529.jpg')",
                                    }}
                                ></div>

                                <div
                                    className="course-flax-bears-skills-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/P1140435.jpg')",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-result">
                        <div className="container">
                            <div className="course-flax-bears-result-wrapper">
                                <div className="course-flax-bears-result-block">
                                    <h2 className="course-flax-bears__title course-flax-bears-result__title">
                                        Конечный результат курса
                                    </h2>
                                </div>
                                <div className="course-flax-bears-result-block">
                                    <p className="course-flax-bears-result__description">
                                        Прекрасный мишка из цветного льна,
                                        который станет отличным подарком и
                                        впишется в любой интерьер.
                                    </p>
                                </div>
                                <div className="course-flax-bears-result-block">
                                    <div
                                        className="course-flax-bears-result-img"
                                        style={{
                                            backgroundImage:
                                                "url('http://localhost:5000/uploads/courses/IMG_2170.jpg')",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-programm">
                        <div className="container">
                            <div className="course-flax-bears-programm-wrapper">
                                <h2 className="course-flax-bears__title__mb course-flax-bears-programm__title">
                                    Программа
                                </h2>
                                <div className="course-flax-bears-programm-items-wrapper">
                                    <div className="course-flax-bears-programm-item">
                                        <div className="course-flax-bears-programm-item-title">
                                            <p className="course-flax-bears-programm-item-title__subtitle">
                                                01
                                            </p>
                                            <h3 className="course-flax-bears-programm-item-title__title">
                                                Введение
                                            </h3>
                                        </div>
                                        <ul className="course-flax-bears-programm-item-ul">
                                            <li className="course-flax-bears-programm-item__li">
                                                Обо мне
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Что будем делать на курсе?
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="course-flax-bears-programm-item">
                                        <div className="course-flax-bears-programm-item-title">
                                            <p className="course-flax-bears-programm-item-title__subtitle">
                                                02
                                            </p>
                                            <h3 className="course-flax-bears-programm-item-title__title">
                                                Вырезание выкроек
                                            </h3>
                                        </div>
                                        <ul className="course-flax-bears-programm-item-ul">
                                            <li className="course-flax-bears-programm-item__li">
                                                Правильное расположение выкроек
                                                на ткани
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Формирование отступа для
                                                красивых швов
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Вырезание выкроек
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="course-flax-bears-programm-item">
                                        <div className="course-flax-bears-programm-item-title">
                                            <p className="course-flax-bears-programm-item-title__subtitle">
                                                03
                                            </p>
                                            <h3 className="course-flax-bears-programm-item-title__title">
                                                Сшивание деталей мишки
                                            </h3>
                                        </div>
                                        <ul className="course-flax-bears-programm-item-ul">
                                            <li className="course-flax-bears-programm-item__li">
                                                Правило сшивания обратным швом
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Расположение вырезанных деталей
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Прокатывание швов
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="course-flax-bears-programm-item">
                                        <div className="course-flax-bears-programm-item-title">
                                            <p className="course-flax-bears-programm-item-title__subtitle">
                                                04
                                            </p>
                                            <h3 className="course-flax-bears-programm-item-title__title">
                                                Наполнение игрушки
                                            </h3>
                                        </div>
                                        <ul className="course-flax-bears-programm-item-ul">
                                            <li className="course-flax-bears-programm-item__li">
                                                Набивание деталей
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Формирование туловища
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Формирование головы
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Секрет красивых ушек
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="course-flax-bears-programm-item">
                                        <div className="course-flax-bears-programm-item-title">
                                            <p className="course-flax-bears-programm-item-title__subtitle">
                                                05
                                            </p>
                                            <h3 className="course-flax-bears-programm-item-title__title">
                                                Украшение и детализация
                                            </h3>
                                        </div>
                                        <ul className="course-flax-bears-programm-item-ul">
                                            <li className="course-flax-bears-programm-item__li">
                                                Сшивание набитых деталей
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Создание глаз
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Создание улыбки
                                            </li>
                                            <li className="course-flax-bears-programm-item__li">
                                                Завязывание шарфа
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="course-flax-bears-programm-item">
                                        <div className="course-flax-bears-programm-item-title">
                                            <p className="course-flax-bears-programm-item-title__subtitle">
                                                06
                                            </p>
                                            <h3 className="course-flax-bears-programm-item-title__title">
                                                Готовый мишка
                                            </h3>
                                        </div>
                                        <ul className="course-flax-bears-programm-item-ul">
                                            <li className="course-flax-bears-programm-item__li">
                                                Прекрасный мишка который,
                                                украсит любой интерьер
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="course-flax-bears-middle">
                        <div className="course-flax-bears-middle-image">
                            <svg
                                width="1211"
                                height="204"
                                viewBox="0 0 1211 204"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.5188 30.6086C18.1039 27.8589 30.8985 23.9722 44.9053 23.2964C57.4859 22.6895 70.0854 22.3588 82.6721 21.8902C97.2163 21.3486 111.34 24.3078 126.047 23.7601C143.378 23.1148 161.909 20.5249 179.121 22.6874C196.841 24.9137 215.95 25.0593 233.784 24.3952C290.36 22.2886 347.365 21.3277 403.971 19.22C418.523 18.6781 433.165 20.4563 447.946 19.9059C459.684 19.4688 471.261 21.3611 483.157 20.9182C493.082 20.5486 503.007 20.179 512.932 19.8095C532.749 19.0716 552.742 20.6505 572.698 19.9074C586.799 19.3824 599.968 21.2154 614.031 20.6917"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M613.915 162.158C600.264 159.757 587.374 156.2 573.355 155.883C560.763 155.599 548.159 155.591 535.564 155.445C521.011 155.277 506.968 158.597 492.252 158.427C474.91 158.226 456.319 156.111 439.167 158.714C421.51 161.394 402.411 162.029 384.566 161.823C327.955 161.167 270.944 161.667 214.303 161.011C199.742 160.842 185.15 162.995 170.359 162.824C158.614 162.688 147.089 164.876 135.186 164.738C125.254 164.623 115.323 164.508 105.392 164.393C85.5632 164.163 65.6167 166.254 45.6484 166.023C31.5385 165.859 18.4204 168.029 4.34876 167.866"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M8.02476 29.2249C11.7971 32.051 15.0174 37.3989 15.0174 42.2867C15.0174 45.6947 15.4152 53.5338 10.3556 53.8118C8.77988 53.8983 7.2478 55.6114 7.2478 53.0007C7.2478 50.0981 8.26635 45.2359 10.3556 43.055C12.8255 40.4768 14.9136 36.14 18.9021 36.14C26.8397 36.14 41.5136 34.7871 45.4912 26.9199C46.7808 24.3693 48.5023 18.7285 43.7647 18.4682C39.3373 18.225 37.7207 20.7758 36.1678 24.6149C34.885 27.7863 33.7292 34.4507 37.7217 35.9692C44.0605 38.3802 50.4516 40.1321 56.8003 42.4574C60.7262 43.8953 66.8983 47.7736 67.0733 52.4458C67.139 54.2007 68.8769 58.0895 67.4186 59.5316C64.7674 62.1535 61.7359 57.4471 61.0303 55.6899C59.7975 52.6193 57.3653 49.4699 57.793 46.0857C58.3225 41.8965 61.6996 39.4901 65.1741 37.6767C68.1658 36.1152 71.0803 34.3192 74.0228 32.6825C76.7487 31.1661 79.9206 30.4503 81.8355 27.859C83.3807 25.768 85.188 23.7179 85.7634 21.1574C85.9596 20.2841 87.4849 15.7292 85.3749 17.6999C81.4997 21.3192 81.0585 24.0058 81.0585 29.2249C81.0585 35.3385 86.4433 34.643 91.3316 35.5424C96.3903 36.4731 105.279 38.7301 108.252 43.2258C111.596 48.2835 111.959 53.645 104.54 53.8118C97.5351 53.9692 94.6882 49.7341 95.0437 43.055C95.2139 39.8567 99.3207 39.2145 101.648 38.4023C106.659 36.6532 112.268 33.7053 116.021 29.9933C119.413 26.6391 122.119 21.1325 122.237 16.3339C122.42 8.93457 113.498 17.0022 112.309 20.1756C109.142 28.6334 116.734 30.9605 124.223 32.469C131.106 33.8556 135.457 38.4888 139.503 43.8234C143.695 49.3513 142.01 51.7447 135.273 51.5067C132.743 51.4174 130.453 48.1793 131.992 45.7869C134.451 41.9652 136.041 40.0922 140.711 39.0426C147.86 37.4359 159.393 32.0994 162.034 24.7856C164.055 19.1918 163.708 16.9315 157.2 16.9315C153.403 16.9315 151.49 17.82 149.862 21.4989C149.044 23.349 147.79 27.6028 148.999 29.3957C152.539 34.647 161.212 35.2337 165.919 39.0426C169.338 41.8086 170.847 49.8348 165.747 52.1043C164.867 52.4959 161.643 53.0434 160.696 53.0434C157.501 53.0434 161.116 48.0056 161.689 47.0675C166.519 39.1685 178.012 38.3563 185.947 34.4326C190.807 32.0298 202.672 29.2381 203.04 22.3099C203.264 18.1016 192.127 12.6984 189.228 15.5656C185.191 19.5573 184.472 27.6753 189.832 30.5909C194.55 33.1571 204.693 33.6765 207.529 38.445C210.155 42.8586 208.831 47.7921 203.817 50.1408C198.953 52.4196 194.177 50.8449 194.494 45.36C194.921 37.9601 207.574 34.9723 213.141 33.0666C216.942 31.7653 220.46 30.7958 223.975 28.8408C227.117 27.093 226.895 24.8464 228.853 22.4806C232.27 18.3499 221.564 21.1562 220.306 23.0782C217.562 27.2719 217.173 34.0892 224.191 34.6033C227.36 34.8354 230.894 36.89 234.075 37.6767C236.662 38.3162 237.252 39.3485 238.176 41.5183C240.312 46.5349 239.672 50.596 233.342 49.9701C229.548 49.5949 225.96 43.4714 229.63 40.75C234.836 36.8884 242.141 33.1767 248.708 31.7007C255.173 30.2478 259.758 27.156 259.758 20.0049C259.758 15.6523 253.55 15.9971 251.816 19.2365C250.556 21.5905 250.435 23.5026 250.435 26.1516C250.435 29.2322 255.432 30.6213 257.427 32.2983C260.896 35.2137 263.643 40.4047 263.643 45.1893C263.643 47.2365 263.182 50.2847 260.924 50.7811C258.794 51.249 253.787 53.0495 252.938 49.9701C251.543 44.9114 258.204 36.6949 262.866 35.5424C268.695 34.1013 276.863 31.1646 279.786 25.3832C280.791 23.3953 282.29 20.3306 282.29 18.084C282.29 16.0858 278.217 16.8707 276.678 16.9315C274.004 17.0373 272.153 19.9161 271.024 21.9257C269.213 25.1498 273.628 26.8731 275.47 28.6273C279.048 32.0348 285.186 33.3823 285.398 39.0426C285.452 40.4963 286.127 44.5534 284.966 45.7015C283.478 47.1735 281.575 46.0803 281.513 44.421C281.332 39.5815 279.755 34.9779 286.952 34.6033C290.916 34.397 298.458 34.2953 301.541 31.3592C303.668 29.3335 310.298 20.7043 305.598 18.6389C301.791 16.9656 297.981 19.774 297.829 23.6758C297.577 30.1483 307.818 30.8034 310.26 35.0302C310.989 36.2907 315.292 45.36 311.382 45.36C308.817 45.36 307.79 45.7927 306.375 43.6526C304.971 41.5284 303.885 39.3708 305.987 37.2925C307.678 35.6199 311.103 35.717 313.368 34.774C315.319 33.9618 317.182 33.1829 319.195 32.2983C323.743 30.2994 324.555 25.5993 327.742 23.0782C328.764 22.2698 329.002 15.7293 329.511 14.0289C330.362 11.1886 328.451 11.5532 326.231 11.5532C321.705 11.5532 321.347 19.33 321.958 22.6514C322.337 24.7134 324.488 24.9307 325.195 26.7492C326.471 30.031 329.286 32.766 330.763 36.0119C332.469 39.7617 336.068 49.9701 329.339 49.9701C324.129 49.9701 322.122 37.5 326.965 35.3716C332.549 32.9172 339.584 32.8438 344.792 29.5664C349.172 26.8095 352.993 21.3268 352.993 16.1205C352.993 8.61998 348.331 18.9569 348.331 21.9257C348.331 28.7764 357.198 26.3216 358.431 32.7251C358.764 34.4535 360.553 40.6158 359.036 42.1159C357.561 43.5747 353.457 40.9269 352.259 40.4085C344.886 37.2188 355.72 29.6058 359.165 28.1151C364.924 25.6238 372.088 25.2951 377.51 21.883C379.535 20.6087 382.517 20.4116 382.517 17.6999C382.517 15.5619 380.756 16.1632 379.021 16.1632C373.165 16.1632 371.731 19.5758 372.46 25.3406C373.313 32.0882 386.389 34.1627 391.495 36.1827C394.442 37.3483 397.566 38.5682 397.279 42.1159C397.13 43.9576 392.06 44.3332 390.977 43.3965C387.224 40.149 381.97 35.6849 389.51 31.9568C392.261 30.5964 394.428 28.9271 397.452 27.859C401.4 26.4644 405.134 23.9386 406.905 20.0476C408.257 17.0759 409.989 10.7848 405.092 10.7848C403.051 10.7848 401.086 10.3378 400.214 12.4922C399.283 14.7943 397.649 17.693 399.653 20.0049C405.332 26.5573 416.754 24.9445 421.365 33.4935C423.616 37.6684 424.564 43.055 418.645 43.055C414.227 43.055 406.996 40.9205 408.243 35.3716C409.083 31.6327 414.391 30.7064 416.876 28.6273C420.077 25.9482 424.612 24.9922 427.969 22.6941C429.983 21.3148 437.886 16.4514 434.141 12.7483C430.186 8.83648 425.276 12.3701 424.516 16.5047C423.504 22.0088 431.863 22.7031 434.961 25.7674C439.762 30.5145 442.648 35.3018 443.853 41.8598C444.692 46.4194 431.407 43.5739 430.257 43.3965C426.223 42.7744 426.026 40.1701 426.026 36.4388C426.026 30.0761 440.105 29.1966 445.062 27.6883C448.202 26.7329 452.242 24.8527 455.033 23.0782C458.238 21.0405 458.67 20.4266 460.644 17.3584C463.664 12.6657 456.253 9.50047 452.875 12.3642C447.139 17.226 466.231 24.0489 469.061 25.3406C473.829 27.5168 473.421 33.712 473.421 38.0181C473.421 41.2416 464.138 38.3927 463.363 35.7131C462.821 33.8367 463.101 32.3696 465.047 32.2983C471.959 32.0451 479.724 31.4743 486.154 28.8834C489.197 27.6575 515.983 16.7848 505.707 13.0898C501.163 11.4557 497.506 14.6337 497.506 19.6207C497.506 23.9536 501.863 25.63 504.11 28.8408C506.338 32.0234 508.526 37.9752 504.456 40.3231C498.975 43.4846 491.426 39.5177 495.564 33.152C497.467 30.2239 501.331 30.3737 504.326 29.8225C508.139 29.1211 513.34 27.9597 516.542 25.7674C518.897 24.1546 523.163 22.5642 523.75 19.6634C524.218 17.352 525.477 15.0254 525.477 12.7057C525.477 8.23602 514.585 16.8325 518.959 21.1574C520.292 22.4754 522.507 22.7995 524.268 23.0782C527.49 23.588 530.537 25.4708 533.505 26.7492C536.417 28.0033 538.133 28.5875 539.807 31.1885C540.317 31.9811 540.884 36.6076 540.066 37.5059C537.985 39.7927 532.745 37.9381 530.311 37.7193C522.331 37.0019 524.364 29.6956 530.095 26.5784C534.321 24.2801 539.283 25.5134 543.778 23.249C546.652 21.8011 549.985 19.0844 551.461 16.1632C552.362 14.3816 552.387 12.3215 550.167 12.3215C546.582 12.3215 546.269 15.0612 545.721 18.0413C544.978 22.0807 551.638 23.9918 554.656 25.0418C558.787 26.4792 561.232 27.835 563.936 31.1031C565.748 33.2936 566.655 35.5906 566.655 38.445C566.655 42.5157 562.69 40.3731 560.051 39.2133C557.743 38.199 557.43 32.7303 558.454 30.7616C560.124 27.5497 564.983 27.2359 567.821 25.7247C570.49 24.3034 574.932 22.7457 575.806 19.578C576.519 16.9917 576.179 15.3948 573.303 15.3948C569.9 15.3948 569.763 16.1964 569.763 19.4073C569.763 23.8382 570.544 24.8917 574.338 27.3041C580.488 31.2136 588.269 32.0343 590.698 39.6402C593.728 49.1306 580.64 45.5154 580.64 38.4023C580.64 28.8949 589.853 29.3345 595.403 23.8466C599.656 19.6406 597.807 11.5532 591.129 11.5532C587.856 11.5532 586.686 17.0409 587.978 19.6634C589.666 23.0883 592.861 24.2107 595.834 25.7674C601.221 28.5877 609.617 31.2154 612.496 36.9083"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M7.2478 163.522C9.05263 167.876 11.7592 171.684 13.8562 175.879C14.9831 178.134 16.5772 178.854 16.5772 181.409C16.5772 183.922 16.0563 185.336 13.4674 186.076C9.61893 187.176 9.58016 183.48 9.58016 180.243C9.58016 172.363 13.5999 171.373 18.9528 167.022C21.6919 164.796 25.1287 162.424 26.5114 159.029C28.0299 155.3 27.4362 154.967 23.5743 154.967C19.0726 154.967 20.2707 161.588 20.4645 165.078C20.5316 166.285 23.868 169.023 24.7405 170.089C26.7111 172.499 29.4252 173.97 30.9601 176.7C31.9387 178.44 36.5847 183.471 32.8606 185.644C26.9645 189.084 24.7992 178.078 27.6344 175.015C32.1757 170.109 38.1734 167.291 43.6154 163.522C47.8495 160.59 47.1896 151.748 42.622 158.856C39.8838 163.117 39.4894 166.882 44.1769 168.966C48.6369 170.949 55.965 176.616 58.387 180.977C59.3762 182.759 59.3372 184.545 59.3372 186.508C59.3372 189.798 55.5329 189.314 53.1176 189.187C48.7047 188.954 45.4562 178.245 47.3299 174.497C50.2397 168.675 58.061 168.456 62.447 164.3C63.8104 163.008 65.7753 161.785 66.2911 159.979C67.188 156.839 63.8182 158.411 62.8358 159.59C61.1774 161.581 61.8579 171.032 64.0883 172.466C67.3637 174.572 75.0137 176.195 77.0459 179.854C78.873 183.144 79.5481 192.044 75.6637 193.68C67.7347 197.02 67.9417 182.86 69.8328 179.076C71.987 174.767 76.7539 173.205 80.7604 171.126C86.2934 168.257 92.899 164.33 97.5188 160.195C99.0944 158.785 99.1518 157.196 98.9874 155.14C98.7964 152.752 92.1544 153.357 90.6081 153.412C85.8011 153.584 86.3057 164.884 88.1462 167.8C93.5178 176.307 102.836 178.644 110.649 184.348C113.99 186.787 123.351 193.514 121.361 198.692C118.187 206.947 106.574 197.771 105.207 192.643C104.158 188.706 103.903 184.114 105.207 180.2C106.955 174.955 111.17 171.998 114.493 167.843C118.325 163.052 125.054 158.833 124.643 151.857C124.45 148.573 119.98 151.92 119.244 153.023C118.044 154.824 118.133 157.766 118.596 159.806C120.954 170.184 136.567 169.53 143.216 174.756C144.961 176.127 146.462 181.586 147.017 183.743C147.869 187.058 146.771 188.663 143.475 188.409C138.823 188.051 136.747 177.369 138.249 174.064C140.396 169.338 147.197 167.422 151.422 164.732C155.249 162.296 156.585 156.829 151.077 156.523C146.952 156.294 147.031 164.412 149.695 166.287C153.615 169.047 157.783 171.733 161.529 174.799C163.384 176.317 163.665 179.986 164.293 182.187C164.849 184.131 166.147 187.265 163.343 188.236C161.768 188.782 158.057 188.703 156.605 187.977C154.547 186.947 154.68 180.47 155.137 178.644C156.177 174.483 160.929 170.626 164.725 169.312C171.106 167.102 179.329 163.208 182.002 156.523C183.578 152.582 172.068 150.26 172.068 157.733C172.068 162.584 174.818 164.722 179.065 166.806C184.719 169.581 190.208 172.417 191.418 179.379C192.874 187.754 179.559 185.011 179.843 178.904C180.255 170.033 193.936 171.639 199.279 168.966C203.203 167.003 214.504 160.951 208.22 154.665C206.708 153.153 199.321 152.464 197.724 153.758C195.458 155.592 195.148 158.079 195.435 160.8C196.29 168.929 211.262 166.968 214.828 172.855C217.146 176.681 222.69 185.298 214.051 185.298C211.707 185.298 208.906 185.492 207.053 183.743C203.872 180.737 206.834 178.173 208.608 175.188C211.419 170.46 216.272 170.622 220.616 168.188C224.651 165.928 229.244 164.547 231.932 160.584C237.402 152.521 217.698 151.964 216.426 157.689C216.159 158.89 217.235 159.788 218.067 160.455C221.341 163.074 224.472 165.768 227.699 168.448C229.999 170.358 233.229 170.813 235.474 172.855C236.755 174.02 246.384 184 239.102 184.52C236.261 184.723 230.58 184.637 228.433 182.49C225.982 180.038 227.466 176.815 230.463 175.966C239.236 173.479 252.686 173.87 259.575 166.979C261.602 164.95 263.808 162.092 263.808 159.029C263.808 156.135 259.573 157.162 258.538 158.856C257.24 160.98 255.256 160.746 255.256 163.911C255.256 167.278 258.804 169.06 261.518 170.522C265.487 172.659 273.137 176.982 273.137 182.187C273.137 187.919 261.743 189.359 261.475 183.743C261.102 175.904 266.584 172.589 273.137 169.312C278.896 166.431 284.211 163.647 287.52 157.689C290.077 153.086 282.411 151.538 279.357 153.066C276.127 154.682 273.874 163.609 275.815 166.806C277.66 169.846 280.328 172.125 282.466 174.799C283.354 175.909 285.519 178.402 286.699 179.076C289.184 180.496 289.412 191.533 285.749 188.236C282.627 185.426 280.947 177.638 281.862 173.632C282.619 170.319 285.826 168.631 287.909 166.201C289.437 164.417 290.996 162.102 293.351 161.362C294.526 160.993 295.845 160.761 296.849 159.979C299.679 157.778 307.345 156.205 307.345 151.468C307.345 149.641 304.001 150.301 302.68 150.301C299.573 150.301 298.88 151.51 297.843 153.844C294.805 160.681 300.281 164.705 304.84 168.793C311.262 174.553 320.431 177.158 323.24 185.989C323.559 186.994 324.487 191.914 323.499 192.902C322.269 194.132 316.152 192.843 314.731 192.211C312.055 191.022 310.818 183.887 311.405 181.409C312.69 175.984 316.069 172.152 321.339 170.349C326.832 168.469 329.994 161.153 332.051 156.523C333.208 153.917 329.448 154.002 327.948 154.233C324.908 154.701 325.226 158.137 325.226 160.411C325.226 167.127 342.418 168.797 347.038 172.552C349.524 174.573 354.142 185.739 346.822 183.57C342.08 182.164 340.466 175.391 343.108 171.559C347.508 165.177 364.877 168.178 364.877 158.467C364.877 153.6 351.485 151.34 351.66 157.646C351.806 162.904 357.341 164.992 361.033 167.454C364.647 169.865 366.702 171.656 369.8 174.756C374.54 179.497 370.932 185.238 364.574 182.619C362.967 181.957 358.668 181.08 361.508 178.126C363.823 175.717 371.279 174.387 374.379 173.805C382.018 172.372 390.661 173.379 393.038 163.868C393.758 160.984 393.827 157.298 390.144 156.523C386.92 155.844 380.744 154.5 378.914 158.467C374.345 168.37 387.986 168.924 393.599 172.855C395.626 174.274 399.085 174.738 399.085 177.521C399.085 180.922 396.629 180.632 393.815 180.632C388.441 180.632 390.876 173.964 394.074 171.775C397.312 169.558 401.774 169.968 405.131 168.016C408.16 166.254 411.799 163.401 413.856 160.584C415.259 158.664 416.619 156.003 414.159 154.19C412.013 152.608 405.536 151.296 403.145 152.98C400.945 154.528 400.746 160.766 403.447 161.967C408.485 164.207 413.702 165.795 418.823 167.8C421.336 168.783 423.186 170.159 423.186 173.028C423.186 175.367 423.967 178.299 420.853 178.299C418.583 178.299 411.639 178.239 411.524 175.015C411.372 170.753 413.763 168.396 417.916 167.584C422.319 166.722 435.267 163.752 435.625 157.3C435.821 153.775 427.073 154.042 427.073 159.245C427.073 165.155 433.062 165.279 436.748 168.966C438.556 170.775 440.168 172.282 441.067 174.756C442.63 179.055 437.085 177.521 433.811 177.521C427.232 177.521 432.447 168.188 437.612 168.188C447.437 168.188 451.731 162.957 455.839 154.967C459.913 147.042 448.992 153.046 448.842 155.745C448.713 158.069 449.509 159.069 451.606 160.022C455.413 161.753 456.481 165.135 458.517 168.837C461.32 173.935 462.681 176.743 455.061 176.743C452.525 176.743 453.208 171.145 453.679 169.312C454.725 165.244 459.453 166.384 462.058 164.3C467.921 159.608 476.025 162.418 479.335 154.967C480.564 152.201 478.817 151.559 476.096 151.9C473.309 152.248 472.632 153.996 471.777 156.22C469.464 162.234 475.059 168.13 479.551 171.256C482.052 172.996 485.326 173.866 486.764 176.743C487.781 178.778 488.483 181.297 485.209 181.409C475.506 181.744 476.136 174.016 482.618 168.793C488.076 164.395 497.382 164.206 501.32 158.078C502.279 156.585 504.149 154.581 504.041 152.634C503.901 150.116 499.388 149.949 497.821 150.733C495.047 152.121 494.898 155.146 496.266 157.733C497.226 159.546 500.403 160.673 502.097 161.535C505.764 163.4 517.611 166.365 518.64 170.867C518.957 172.254 519.692 176.743 517.603 176.743C515.112 176.743 511.221 177.188 509.094 175.533C503.391 171.096 515.257 166.081 518.035 164.473C521.939 162.212 521.372 155.713 521.145 151.857C520.908 147.837 509.006 146.678 516.523 155.702C520.567 160.556 525.721 163.1 531.079 166.115C534.321 167.939 539.893 169.232 541.704 172.855C543.797 177.041 539.922 177.087 536.867 176.138C533.191 174.997 529.925 172.545 528.315 168.966C527.816 167.857 527.503 161.476 528.963 161.232C532.964 160.565 537.523 161.483 540.581 158.424C545.415 153.589 545.146 144.857 537.169 144.857C534.27 144.857 533.847 147.251 535.485 149.264C540.503 155.432 548.762 156.278 555.266 160.239C559.475 162.801 560.497 163.715 562.695 167.8C564.859 171.819 559.606 170.273 557.685 169.312C550.825 165.881 566.704 160.844 569.001 159.59C572.16 157.867 578.83 152.883 574.444 148.746C573.087 147.466 566.237 143.798 566.237 147.233C566.237 154.795 569.686 156.827 576.43 160.239C581.235 162.669 586.491 164.34 590.338 168.188C594.21 172.062 596.024 174.43 588.351 172.423C585.275 171.618 577.688 171.192 576.517 167.238C574.96 161.983 588.011 161.774 590.9 161.232C594.034 160.644 597.055 160.555 600.229 160.368C602.896 160.211 602.678 158.962 603.9 157.128C604.702 155.925 607.443 152.203 605.715 150.474C604.091 148.85 604.332 153.327 604.332 153.844C604.332 156.358 605.36 157.825 607.097 159.72C608.618 161.38 609.428 162.747 611.416 163.954C613.354 165.131 616.024 165.187 617.722 166.46C619.313 167.654 621.324 169.966 622.991 170.522"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M2 89.9847C14.185 96.0359 28.0072 98.4816 40.0952 104.656C45.5251 107.43 50.5341 115.004 49.3815 121.301C48.9709 123.544 42.2044 127.667 39.9225 128.422C36.4401 129.575 34.1521 129.344 30.9386 127.993C26.9412 126.314 26.7108 117.787 27.6992 114.351C29.2857 108.836 37.8754 105.485 42.9027 104.27C50.7179 102.382 58.6483 100.889 66.5287 99.2509C71.6236 98.1918 80.6737 96.7845 84.5829 92.9019C87.8141 89.6926 90.5282 86.4854 91.364 81.9197C91.9251 78.8545 85.7999 79.531 83.9782 80.3754C82.3445 81.1326 80.5811 81.3324 78.9679 82.0913C77.347 82.8539 77.4369 84.3016 76.4628 85.6948C73.2778 90.2502 73.7498 93.5774 78.1905 96.7628C80.819 98.6483 86.6374 100.148 89.8955 100.795C94.4249 101.695 97.7948 105.001 102.637 105.385C106.553 105.697 109.963 105.987 113.608 107.745C116.9 109.333 119.297 112.649 122.505 114.523C123.432 115.065 126.818 120.65 127.127 122.03C128.099 126.375 124.05 127.053 120.95 128.251C119.013 128.999 115.378 131.06 113.176 129.967C109.036 127.911 110.066 121.798 110.066 118.212C110.066 104.843 124.648 103.128 134.988 100.409C141.86 98.6024 148.689 95.5255 153.776 90.5853C156.37 88.0668 163.19 85.8227 162.933 81.4907C162.768 78.7134 147.384 78.5342 147.384 85.0085C147.384 90.4841 148.675 91.9555 153.431 94.7894C158.711 97.9361 164.946 99.9514 170.88 101.567C178.68 103.692 188.62 103.093 195.197 108.174C197.084 109.631 207.002 114.801 201.028 117.612C197.056 119.48 186.943 123.872 184.27 118.942C179.341 109.85 186.232 104.996 194.204 102.168C200.566 99.9112 207.198 98.7846 213.597 96.4625C217.209 95.1515 226.895 93.1119 228.239 88.4404C228.979 85.8695 230.092 82.215 226.684 81.3191C223.34 80.44 218.461 79.8239 215.8 82.6061C210.302 88.3543 217.979 96.1664 222.84 98.8219C227.065 101.13 231.238 102.898 236.186 103.112C242.256 103.374 248.182 105.873 254.068 107.144C262.112 108.881 270.999 111.296 270.999 120.872C270.999 123.674 263.86 123.641 261.497 124.132C257.764 124.908 253.445 123.281 253.118 118.727C252.144 105.194 270.639 104.232 279.853 101.181C287.145 98.7672 292.49 98.4159 291.99 89.9847C291.884 88.1852 287.676 86.1238 286.116 86.1238C282.802 86.1238 282.32 86.7332 280.717 89.5986C277.879 94.6734 284.512 100.623 288.88 101.739C293.749 102.983 298.464 103.549 303.263 104.999C308.129 106.47 313.063 108.127 318.035 109.289C325.399 111.01 328.818 116.228 328.531 123.36C328.355 127.717 316.181 130.346 315.357 125.848C314.055 118.736 319.48 111.311 325.896 108.817C329.501 107.416 332.93 105.294 336.478 103.712C342.534 101.012 349.613 99.5798 355.31 96.248C359.712 93.6733 367.631 88.8166 369.563 83.6357C374.913 69.2871 351.513 75.7294 346.887 81.5765C344.841 84.1627 344.464 86.8426 343.129 89.6415C342.226 91.5359 345.473 92.426 347.103 93.0735C355.023 96.2198 363.277 98.653 371.291 101.567C375.705 103.173 381.045 103.93 385.112 106.372C391.303 110.09 396.169 111.369 396.169 119.328C396.169 123.149 391.987 125.361 388.567 125.505C383.112 125.736 377.405 127.049 372.068 127.049C368.47 127.049 367.677 119.204 368.31 116.582C370.465 107.666 381.722 107.113 388.956 106.201C399.638 104.853 409.803 100.509 419.665 96.3338C424.767 94.1743 427.253 93.223 428.995 87.8398C431.46 80.223 417.009 73.2193 413.273 81.1046C407.63 93.0146 415.264 98.1158 425.367 102.94C429.466 104.898 433.933 105.772 438.152 107.402C442.82 109.205 443.112 111.512 444.76 115.767C447.499 122.839 435.192 122.416 431.154 122.416C427.158 122.416 427.226 119.622 428.477 115.896C429.807 111.931 437.712 106.225 441.305 104.313C448.96 100.239 464.955 97.1414 468.3 87.8398C469.454 84.6296 469.374 81.7309 468.515 78.7452C467.798 76.2498 461.735 77.7983 459.963 78.7881C457.086 80.3955 456.122 83.2941 456.033 86.467C455.849 93.0461 461.46 95.6407 467.004 97.7924C476.887 101.628 489.387 102.182 496.029 111.177C498.627 114.695 498.868 117.734 494.733 119.156C493.021 119.745 490.846 121.264 489.636 119.928C487.52 117.593 487.615 112.605 487.174 109.761C486.687 106.614 488.263 103.517 491.062 101.954C495.069 99.7146 499.68 98.8894 503.803 96.7628C507.739 94.7331 511.578 92.605 515.379 90.3279C518.417 88.5079 518.82 85.994 520.562 83.2067C522.105 80.7363 522.894 78.5831 522.894 75.6994C522.894 72.6148 514.457 71.6525 512.917 73.4686C509.793 77.1534 513.231 83.4267 515.897 86.1238C522.808 93.1156 534.409 98.6177 544.058 100.624C550.542 101.972 557.879 106.493 557.879 113.536C557.879 116.859 557.775 118.242 554.77 119.499C551.996 120.659 548.647 121.86 547.168 118.555C542.635 108.425 554.349 98.3822 561.421 93.0306C563.317 91.5961 565.501 89.9124 567.036 88.0972C568.36 86.5323 568.91 82.7117 570.319 81.6623C571.823 80.5422 571.583 77.7491 569.541 77.6298C567.841 77.5305 566.282 76.3238 565.697 79.5174C565.296 81.7077 565.297 85.1401 565.697 87.325C566.555 92.013 572.158 92.5765 575.329 94.7894C580.077 98.103 585.524 100.664 589.755 104.656C592.434 107.184 598.55 114.73 596.666 118.942C595.35 121.882 591.36 121.12 589.928 123.189C588.028 125.933 584.114 121.98 582.931 120.443C580.756 117.618 578.871 114.557 578.871 110.877C578.871 106.154 584.69 104.101 588.287 102.64C593.399 100.563 597.956 98.0043 600.639 93.0735C601.589 91.3292 604.507 86.1337 606.082 85.3516"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M31.8941 69.0383C29.4308 76.328 29.9834 79.6407 37.2187 83.1366C42.9045 85.8837 45.1944 76.4965 46.0576 72.743C47.4376 66.7421 43.061 66.2599 37.8577 66.2599C33.3769 66.2599 30.9356 65.1048 30.9356 69.9645"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M69.2117 130.263C66.7484 137.552 67.301 140.865 74.5363 144.361C80.2222 147.108 82.5121 137.721 83.3753 133.967C84.7553 127.967 80.3787 127.484 75.1753 127.484C70.6945 127.484 68.2533 126.329 68.2533 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M108.862 69.0383C106.399 76.328 106.951 79.6407 114.186 83.1366C119.872 85.8837 122.162 76.4965 123.025 72.743C124.405 66.7421 120.029 66.2599 114.825 66.2599C110.345 66.2599 107.903 65.1048 107.903 69.9645"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M146.714 130.263C144.342 137.552 144.874 140.865 151.841 144.361C157.316 147.108 159.522 137.721 160.353 133.967C161.682 127.967 157.467 127.484 152.456 127.484C148.142 127.484 145.791 126.329 145.791 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M184.081 66.2195C181.617 73.7521 182.17 77.1753 189.405 80.7877C195.091 83.6264 197.381 73.9263 198.244 70.0476C199.624 63.8467 195.248 63.3484 190.044 63.3484C185.563 63.3484 183.122 62.1548 183.122 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M223.148 130.263C220.684 137.552 221.237 140.865 228.472 144.361C234.158 147.108 236.448 137.721 237.311 133.967C238.691 127.967 234.315 127.484 229.111 127.484C224.631 127.484 222.189 126.329 222.189 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M253.419 66.2195C251.047 73.7521 251.579 77.1753 258.547 80.7877C264.022 83.6264 266.227 73.9263 267.058 70.0476C268.387 63.8467 264.173 63.3484 259.162 63.3484C254.847 63.3484 252.496 62.1548 252.496 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M289.62 130.263C287.157 137.552 287.709 140.865 294.945 144.361C300.63 147.108 302.92 137.721 303.783 133.967C305.163 127.967 300.787 127.484 295.584 127.484C291.103 127.484 288.661 126.329 288.661 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M311.194 66.2195C308.731 73.7521 309.284 77.1753 316.519 80.7877C322.205 83.6264 324.495 73.9263 325.358 70.0476C326.738 63.8467 322.361 63.3484 317.158 63.3484C312.677 63.3484 310.236 62.1548 310.236 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M343.798 130.263C341.426 137.552 341.959 140.865 348.926 144.361C354.401 147.108 356.606 137.721 357.437 133.967C358.766 127.967 354.552 127.484 349.541 127.484C345.226 127.484 342.876 126.329 342.876 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M386.364 66.2195C383.992 73.7521 384.524 77.1753 391.491 80.7877C396.967 83.6264 399.172 73.9263 400.003 70.0476C401.332 63.8467 397.117 63.3484 392.107 63.3484C387.792 63.3484 385.441 62.1548 385.441 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M406.238 130.263C403.775 137.552 404.327 140.865 411.563 144.361C417.249 147.108 419.538 137.721 420.402 133.967C421.782 127.967 417.405 127.484 412.202 127.484C407.721 127.484 405.28 126.329 405.28 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M437.093 66.2195C434.721 73.7521 435.253 77.1753 442.22 80.7877C447.696 83.6264 449.901 73.9263 450.732 70.0476C452.061 63.8467 447.846 63.3484 442.836 63.3484C438.521 63.3484 436.17 62.1548 436.17 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M458.716 130.263C456.253 137.552 456.805 140.865 464.041 144.361C469.727 147.108 472.016 137.721 472.88 133.967C474.26 127.967 469.883 127.484 464.68 127.484C460.199 127.484 457.758 126.329 457.758 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M483.789 66.2195C481.326 73.7521 481.878 77.1753 489.114 80.7877C494.8 83.6264 497.089 73.9263 497.953 70.0476C499.333 63.8467 494.956 63.3484 489.753 63.3484C485.272 63.3484 482.831 62.1548 482.831 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M515.227 130.263C512.855 137.552 513.387 140.865 520.354 144.361C525.83 147.108 528.035 137.721 528.866 133.967C530.195 127.967 525.98 127.484 520.97 127.484C516.655 127.484 514.304 126.329 514.304 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M537.967 66.2195C535.595 73.7521 536.127 77.1753 543.095 80.7877C548.57 83.6264 550.775 73.9263 551.606 70.0476C552.935 63.8467 548.721 63.3484 543.71 63.3484C539.395 63.3484 537.044 62.1548 537.044 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M561.34 130.263C558.877 137.552 559.429 140.865 566.665 144.361C572.351 147.108 574.64 137.721 575.504 133.967C576.884 127.967 572.507 127.484 567.304 127.484C562.823 127.484 560.382 126.329 560.382 131.189"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M581.699 66.2195C579.327 73.7521 579.859 77.1753 586.827 80.7877C592.302 83.6264 594.507 73.9263 595.338 70.0476C596.667 63.8467 592.453 63.3484 587.442 63.3484C583.127 63.3484 580.776 62.1548 580.776 67.1765"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M37.5686 71.3878C38.0577 73.0002 39.9284 76.6356 37.5686 76.6356"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M77.2188 134.362C74.602 138.825 75.6966 141.238 75.6966 136.25"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M114.536 75.4694C114.577 75.1221 115.119 69.0556 115.119 72.3798"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M153.603 133.195C151.527 142.353 154.583 135.203 152.437 135.203"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M192.671 69.6385C190.844 72.0491 186.443 77.1993 188.567 70.8263C188.824 70.0552 188.002 75.4694 186.84 75.4694"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M228.239 131.446C229.827 133.409 232.321 140.921 232.321 135.116"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M260.309 70.8047C260.276 72.4794 259.726 75.5333 259.726 72.2884C259.726 71.143 260.003 71.203 259.726 72.1861"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M295.398 134.945C296.23 137.079 294.458 138.321 295.846 136.115C296.562 134.977 297.549 134.712 296.741 136.094"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M319.201 72.1399C318.979 72.5977 318.456 74.6115 318.074 74.8817C317.88 75.0186 318.464 72.0533 318.557 71.8025C319.249 69.9372 318.978 69.6292 318.235 71.3807"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M350.705 131.446C350.705 132.906 350.763 134.363 350.513 135.806C350.487 135.955 350.213 137.901 350.151 137.859C349.823 137.642 351.334 134.371 351.854 134.113"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M390.338 68.4723C390.421 71.3341 392.439 70.5013 393.254 72.5539"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M414.114 134.945C414.114 135.182 414.467 137.621 414.014 137.855C413.752 137.991 413.662 135.292 413.662 134.945"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M443.399 72.5539H446.898"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M464.974 136.111C465.286 136.116 467.581 136.053 466.376 136.537C466.14 136.632 466.025 136.806 466.025 136.59"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M488.297 73.2482C488.478 73.2459 491.159 73.0663 491.204 73.1684C491.29 73.3624 490.689 73.8757 490.689 73.674C490.689 73.2191 491.416 73.2482 490.153 73.2482"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M521.534 133.338C521.067 135.579 521.484 135.555 520.292 135.519C518.316 135.46 518.637 133.491 518.637 132.029"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M544.274 70.2216C543.705 70.7074 543.203 71.0261 542.525 71.3878"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M567.598 137.86C566.877 136.224 566.431 134.993 566.431 133.195"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M587.423 71.2401C585.856 72.0794 584.185 73.6975 585.663 71.2857C586.055 70.6441 586.786 70.8295 587.423 70.8295"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1206.48 30.5395C1192.89 27.7898 1180.1 23.903 1166.09 23.2273C1153.51 22.6203 1140.91 22.2897 1128.32 21.821C1113.78 21.2795 1099.66 24.2386 1084.95 23.691C1067.62 23.0457 1049.09 20.4558 1031.88 22.6183C1014.16 24.8446 995.047 24.9901 977.213 24.3261C920.637 22.2195 863.632 21.2585 807.026 19.1508C792.474 18.609 777.832 20.3871 763.05 19.8367C751.313 19.3997 739.736 21.292 727.84 20.849C717.915 20.4795 707.99 20.1099 698.065 19.7403C678.248 19.0025 658.255 20.5814 638.299 19.8383C624.198 19.3132 611.028 21.1462 596.966 20.6226"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M597.082 162.089C610.733 159.688 623.623 156.131 637.643 155.814C650.234 155.53 662.838 155.522 675.433 155.376C689.986 155.208 704.029 158.528 718.745 158.357C736.087 158.156 754.678 156.042 771.83 158.645C789.487 161.325 808.586 161.96 826.431 161.754C883.042 161.098 940.053 161.598 996.694 160.942C1011.26 160.773 1025.85 162.926 1040.64 162.755C1052.38 162.619 1063.91 164.807 1075.81 164.669C1085.74 164.554 1095.67 164.439 1105.61 164.324C1125.43 164.094 1145.38 166.185 1165.35 165.954C1179.46 165.79 1192.58 167.96 1206.65 167.797"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1202.97 29.1558C1199.2 31.9819 1195.98 37.3298 1195.98 42.2175C1195.98 45.6256 1195.58 53.4646 1200.64 53.7426C1202.22 53.8292 1203.75 55.5423 1203.75 52.9316C1203.75 50.029 1202.73 45.1668 1200.64 42.9859C1198.17 40.4077 1196.08 36.0708 1192.09 36.0708C1184.16 36.0708 1169.48 34.7179 1165.51 26.8508C1164.22 24.3002 1162.49 18.6593 1167.23 18.3991C1171.66 18.1558 1173.28 20.7066 1174.83 24.5458C1176.11 27.7172 1177.27 34.3815 1173.28 35.9001C1166.94 38.3111 1160.55 40.063 1154.2 42.3883C1150.27 43.8262 1144.1 47.7044 1143.92 52.3767C1143.86 54.1316 1142.12 58.0203 1143.58 59.4625C1146.23 62.0843 1149.26 57.378 1149.97 55.6208C1151.2 52.5502 1153.63 49.4008 1153.2 46.0165C1152.67 41.8274 1149.3 39.4209 1145.82 37.6075C1142.83 36.046 1139.92 34.2501 1136.97 32.6133C1134.25 31.097 1131.08 30.3812 1129.16 27.7899C1127.62 25.6988 1125.81 23.6488 1125.23 21.0882C1125.04 20.2149 1123.51 15.6601 1125.62 17.6307C1129.5 21.2501 1129.94 23.9367 1129.94 29.1558C1129.94 35.2694 1124.55 34.5739 1119.67 35.4732C1114.61 36.4039 1105.72 38.661 1102.75 43.1566C1099.4 48.2144 1099.04 53.5759 1106.46 53.7426C1113.46 53.9 1116.31 49.665 1115.95 42.9859C1115.78 39.7876 1111.68 39.1454 1109.35 38.3332C1104.34 36.5841 1098.73 33.6361 1094.98 29.9241C1091.58 26.5699 1088.88 21.0633 1088.76 16.2648C1088.58 8.86542 1097.5 16.933 1098.69 20.1065C1101.86 28.5642 1094.26 30.8913 1086.77 32.3999C1079.89 33.7864 1075.54 38.4196 1071.49 43.7542C1067.3 49.2821 1068.99 51.6756 1075.72 51.4376C1078.25 51.3482 1080.54 48.1101 1079 45.7177C1076.55 41.8961 1074.96 40.023 1070.29 38.9734C1063.14 37.3667 1051.6 32.0302 1048.96 24.7165C1046.94 19.1227 1047.29 16.8624 1053.8 16.8624C1057.59 16.8624 1059.51 17.7509 1061.13 21.4297C1061.95 23.2798 1063.21 27.5337 1062 29.3265C1058.46 34.5779 1049.79 35.1645 1045.08 38.9734C1041.66 41.7395 1040.15 49.7656 1045.25 52.0352C1046.13 52.4268 1049.35 52.9743 1050.3 52.9743C1053.5 52.9743 1049.88 47.9365 1049.31 46.9983C1044.48 39.0993 1032.99 38.2871 1025.05 34.3634C1020.19 31.9606 1008.33 29.1689 1007.96 22.2407C1007.73 18.0325 1018.87 12.6292 1021.77 15.4964C1025.81 19.4881 1026.53 27.6062 1021.16 30.5217C1016.45 33.088 1006.3 33.6074 1003.47 38.3758C1000.84 42.7895 1002.17 47.7229 1007.18 50.0717C1012.04 52.3505 1016.82 50.7757 1016.5 45.2909C1016.08 37.891 1003.42 34.9031 997.856 32.9975C994.055 31.6961 990.537 30.7267 987.022 28.7716C983.88 27.0239 984.102 24.7772 982.144 22.4115C978.727 18.2808 989.433 21.0871 990.691 23.0091C993.435 27.2028 993.824 34.0201 986.806 34.5342C983.637 34.7663 980.103 36.8209 976.922 37.6075C974.335 38.247 973.745 39.2794 972.821 41.4492C970.685 46.4658 971.325 50.5269 977.655 49.9009C981.45 49.5257 985.037 43.4022 981.368 40.6809C976.161 36.8192 968.856 33.1075 962.289 31.6315C955.825 30.1786 951.239 27.0869 951.239 19.9357C951.239 15.5831 957.447 15.928 959.181 19.1674C960.441 21.5213 960.562 23.4334 960.562 26.0824C960.562 29.1631 955.565 30.5522 953.57 32.2291C950.101 35.1445 947.354 40.3356 947.354 45.1201C947.354 47.1673 947.815 50.2156 950.074 50.7119C952.203 51.1799 957.21 52.9804 958.059 49.9009C959.454 44.8422 952.793 36.6258 948.131 35.4732C942.302 34.0321 934.134 31.0954 931.211 25.3141C930.206 23.3261 928.707 20.2615 928.707 18.0149C928.707 16.0166 932.78 16.8015 934.319 16.8624C936.993 16.9682 938.844 19.8469 939.973 21.8566C941.784 25.0806 937.369 26.8039 935.527 28.5582C931.949 31.9657 925.811 33.3132 925.599 38.9734C925.545 40.4271 924.87 44.4843 926.031 45.6324C927.52 47.1043 929.422 46.0111 929.484 44.3518C929.665 39.5124 931.242 34.9087 924.046 34.5342C920.081 34.3278 912.539 34.2261 909.456 31.2901C907.329 29.2643 900.699 20.6352 905.399 18.5698C909.206 16.8965 913.016 19.7049 913.168 23.6067C913.42 30.0791 903.179 30.7343 900.737 34.961C900.009 36.2215 895.705 45.2909 899.615 45.2909C902.18 45.2909 903.207 45.7236 904.622 43.5835C906.026 41.4593 907.112 39.3017 905.01 37.2233C903.319 35.5508 899.894 35.6479 897.629 34.7049C895.678 33.8927 893.815 33.1137 891.802 32.2291C887.254 30.2303 886.442 25.5301 883.255 23.0091C882.234 22.2006 881.995 15.6602 881.486 13.9598C880.635 11.1195 882.546 11.484 884.766 11.484C889.292 11.484 889.65 19.2608 889.039 22.5822C888.66 24.6442 886.509 24.8616 885.802 26.68C884.526 29.9618 881.711 32.6968 880.234 35.9428C878.528 39.6926 874.93 49.9009 881.658 49.9009C886.868 49.9009 888.875 37.4308 884.032 35.3025C878.448 32.8481 871.413 32.7746 866.206 29.4973C861.825 26.7403 858.004 21.2576 858.004 16.0514C858.004 8.55084 862.666 18.8878 862.666 21.8566C862.666 28.7072 853.799 26.2525 852.566 32.656C852.233 34.3843 850.444 40.5466 851.961 42.0468C853.437 43.5056 857.54 40.8578 858.738 40.3394C866.111 37.1497 855.277 29.5367 851.832 28.046C846.074 25.5546 838.909 25.226 833.487 21.8139C831.462 20.5395 828.48 20.3424 828.48 17.6307C828.48 15.4927 830.242 16.094 831.976 16.094C837.832 16.094 839.266 19.5066 838.537 25.2714C837.684 32.0191 824.609 34.0935 819.502 36.1135C816.555 37.2792 813.431 38.4991 813.718 42.0468C813.867 43.8885 818.937 44.264 820.02 43.3274C823.773 40.0798 829.027 35.6157 821.488 31.8877C818.736 30.5273 816.57 28.8579 813.545 27.7899C809.597 26.3952 805.863 23.8694 804.092 19.9784C802.74 17.0068 801.008 10.7157 805.905 10.7157C807.946 10.7157 809.911 10.2686 810.783 12.4231C811.714 14.7252 813.348 17.6239 811.344 19.9357C805.665 26.4881 794.243 24.8754 789.632 33.4243C787.381 37.5993 786.433 42.9859 792.352 42.9859C796.77 42.9859 804.001 40.8514 802.754 35.3025C801.914 31.5635 796.606 30.6373 794.121 28.5582C790.92 25.8791 786.385 24.923 783.028 22.6249C781.014 21.2456 773.111 16.3823 776.856 12.6792C780.811 8.76734 785.721 12.301 786.481 16.4355C787.493 21.9397 779.134 22.634 776.036 25.6983C771.235 30.4454 768.35 35.2327 767.144 41.7907C766.306 46.3502 779.59 43.5048 780.741 43.3274C784.774 42.7053 784.971 40.101 784.971 36.3696C784.971 30.0069 770.892 29.1275 765.935 27.6191C762.795 26.6637 758.756 24.7835 755.964 23.0091C752.759 20.9714 752.327 20.3574 750.353 17.2892C747.333 12.5965 754.744 9.43133 758.123 12.295C763.858 17.1569 744.766 23.9798 741.936 25.2714C737.168 27.4477 737.576 33.6429 737.576 37.949C737.576 41.1725 746.859 38.3236 747.634 35.644C748.176 33.7675 747.896 32.3004 745.95 32.2291C739.039 31.976 731.274 31.4051 724.843 28.8143C721.8 27.5883 695.014 16.7157 705.29 13.0207C709.834 11.3866 713.491 14.5646 713.491 19.5516C713.491 23.8845 709.134 25.5609 706.887 28.7716C704.659 31.9542 702.471 37.9061 706.541 40.254C712.022 43.4155 719.571 39.4485 715.433 33.0829C713.53 30.1547 709.666 30.3045 706.671 29.7534C702.858 29.052 697.658 27.8906 694.455 25.6983C692.1 24.0855 687.834 22.4951 687.247 19.5942C686.78 17.2829 685.52 14.9562 685.52 12.6365C685.52 8.16687 696.412 16.7633 692.038 21.0882C690.705 22.4063 688.491 22.7304 686.729 23.0091C683.507 23.5189 680.46 25.4017 677.492 26.68C674.58 27.9342 672.864 28.5183 671.19 31.1193C670.68 31.912 670.113 36.5384 670.931 37.4368C673.012 39.7235 678.252 37.869 680.686 37.6502C688.666 36.9327 686.633 29.6265 680.902 26.5093C676.676 24.211 671.714 25.4443 667.219 23.1798C664.345 21.732 661.013 19.0152 659.536 16.094C658.635 14.3125 658.61 12.2523 660.831 12.2523C664.415 12.2523 664.729 14.9921 665.276 17.9722C666.019 22.0116 659.359 23.9227 656.341 24.9726C652.21 26.4101 649.765 27.7659 647.061 31.0339C645.249 33.2245 644.342 35.5215 644.342 38.3758C644.342 42.4466 648.307 40.3039 650.946 39.1442C653.254 38.1298 653.567 32.6612 652.543 30.6925C650.873 27.4806 646.014 27.1668 643.176 25.6556C640.507 24.2343 636.065 22.6765 635.191 19.5089C634.478 16.9225 634.818 15.3257 637.695 15.3257C641.097 15.3257 641.234 16.1272 641.234 19.3381C641.234 23.7691 640.453 24.8225 636.659 27.2349C630.509 31.1445 622.728 31.9651 620.299 39.571C617.269 49.0615 630.357 45.4462 630.357 38.3332C630.357 28.8257 621.144 29.2654 615.594 23.7774C611.341 19.5715 613.19 11.484 619.868 11.484C623.141 11.484 624.311 16.9717 623.019 19.5942C621.331 23.0192 618.136 24.1416 615.163 25.6983C609.776 28.5186 601.38 31.1463 598.501 36.8392"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1203.75 163.453C1201.94 167.807 1199.24 171.615 1197.14 175.81C1196.01 178.065 1194.42 178.785 1194.42 181.34C1194.42 183.853 1194.94 185.267 1197.53 186.007C1201.38 187.107 1201.42 183.411 1201.42 180.174C1201.42 172.294 1197.4 171.303 1192.04 166.953C1189.31 164.726 1185.87 162.354 1184.49 158.96C1182.97 155.231 1183.56 154.898 1187.42 154.898C1191.92 154.898 1190.73 161.518 1190.53 165.008C1190.47 166.216 1187.13 168.954 1186.26 170.02C1184.29 172.43 1181.57 173.901 1180.04 176.631C1179.06 178.371 1174.41 183.401 1178.14 185.575C1184.03 189.015 1186.2 178.009 1183.36 174.946C1178.82 170.04 1172.82 167.222 1167.38 163.453C1163.15 160.521 1163.81 151.679 1168.38 158.787C1171.11 163.047 1171.51 166.813 1166.82 168.897C1162.36 170.88 1155.03 176.547 1152.61 180.908C1151.62 182.689 1151.66 184.476 1151.66 186.439C1151.66 189.729 1155.46 189.245 1157.88 189.117C1162.29 188.885 1165.54 178.176 1163.67 174.427C1160.76 168.606 1152.94 168.387 1148.55 164.231C1147.19 162.939 1145.22 161.716 1144.71 159.91C1143.81 156.77 1147.18 158.342 1148.16 159.521C1149.82 161.512 1149.14 170.962 1146.91 172.397C1143.63 174.503 1135.98 176.126 1133.95 179.785C1132.12 183.075 1131.45 191.975 1135.33 193.611C1143.26 196.951 1143.06 182.791 1141.16 179.007C1139.01 174.698 1134.24 173.135 1130.24 171.057C1124.7 168.187 1118.1 164.261 1113.48 160.126C1111.9 158.716 1111.85 157.127 1112.01 155.071C1112.2 152.683 1118.84 153.288 1120.39 153.343C1125.2 153.515 1124.69 164.815 1122.85 167.73C1117.48 176.238 1108.16 178.575 1100.35 184.278C1097.01 186.717 1087.65 193.445 1089.64 198.623C1092.81 206.878 1104.42 197.702 1105.79 192.574C1106.84 188.637 1107.09 184.044 1105.79 180.131C1104.04 174.885 1099.83 171.928 1096.5 167.774C1092.67 162.983 1085.94 158.764 1086.35 151.787C1086.55 148.503 1091.02 151.85 1091.75 152.954C1092.95 154.755 1092.86 157.696 1092.4 159.737C1090.04 170.115 1074.43 169.461 1067.78 174.687C1066.04 176.058 1064.53 181.517 1063.98 183.673C1063.13 186.989 1064.23 188.593 1067.52 188.34C1072.17 187.982 1074.25 177.3 1072.75 173.995C1070.6 169.269 1063.8 167.353 1059.57 164.663C1055.75 162.227 1054.41 156.76 1059.92 156.454C1064.04 156.224 1063.97 164.343 1061.3 166.218C1057.38 168.978 1053.21 171.664 1049.47 174.73C1047.61 176.248 1047.33 179.917 1046.7 182.118C1046.15 184.062 1044.85 187.196 1047.65 188.167C1049.23 188.713 1052.94 188.634 1054.39 187.908C1056.45 186.878 1056.32 180.401 1055.86 178.575C1054.82 174.414 1050.07 170.557 1046.27 169.243C1039.89 167.033 1031.67 163.139 1028.99 156.454C1027.42 152.513 1038.93 150.191 1038.93 157.663C1038.93 162.515 1036.18 164.653 1031.93 166.737C1026.28 169.511 1020.79 172.348 1019.58 179.31C1018.12 187.685 1031.44 184.942 1031.15 178.834C1030.74 169.964 1017.06 171.57 1011.72 168.897C1007.79 166.934 996.493 160.882 1002.78 154.596C1004.29 153.084 1011.68 152.395 1013.27 153.688C1015.54 155.523 1015.85 158.01 1015.56 160.731C1014.71 168.86 999.736 166.899 996.169 172.786C993.851 176.612 988.307 185.229 996.947 185.229C999.29 185.229 1002.09 185.423 1003.94 183.673C1007.13 180.667 1004.16 178.103 1002.39 175.119C999.578 170.39 994.726 170.553 990.381 168.119C986.346 165.859 981.753 164.478 979.065 160.515C973.596 152.452 993.299 151.895 994.571 157.62C994.838 158.82 993.762 159.719 992.93 160.385C989.656 163.005 986.525 165.699 983.298 168.379C980.998 170.288 977.768 170.744 975.523 172.786C974.242 173.951 964.613 183.931 971.895 184.451C974.736 184.654 980.417 184.568 982.564 182.42C985.015 179.968 983.531 176.746 980.534 175.896C971.762 173.41 958.311 173.801 951.422 166.91C949.395 164.881 947.189 162.023 947.189 158.96C947.189 156.066 951.424 157.092 952.459 158.787C953.757 160.911 955.741 160.676 955.741 163.842C955.741 167.209 952.193 168.99 949.479 170.452C945.51 172.59 937.86 176.912 937.86 182.118C937.86 187.85 949.254 189.289 949.522 183.673C949.895 175.834 944.413 172.52 937.86 169.243C932.101 166.362 926.786 163.578 923.477 157.62C920.92 153.016 928.586 151.469 931.64 152.997C934.87 154.613 937.123 163.54 935.182 166.737C933.337 169.777 930.669 172.056 928.531 174.73C927.643 175.84 925.478 178.332 924.298 179.007C921.814 180.427 921.586 191.464 925.248 188.167C928.37 185.357 930.051 177.569 929.135 173.563C928.378 170.249 925.171 168.562 923.088 166.132C921.56 164.348 920.001 162.033 917.646 161.293C916.471 160.923 915.152 160.692 914.148 159.91C911.318 157.709 903.652 156.136 903.652 151.399C903.652 149.572 906.996 150.232 908.317 150.232C911.424 150.232 912.117 151.441 913.154 153.775C916.192 160.612 910.716 164.636 906.157 168.724C899.735 174.484 890.566 177.089 887.757 185.92C887.438 186.925 886.51 191.845 887.498 192.833C888.728 194.063 894.845 192.774 896.266 192.142C898.942 190.952 900.179 183.818 899.592 181.34C898.307 175.915 894.928 172.083 889.658 170.28C884.165 168.4 881.003 161.084 878.946 156.454C877.789 153.848 881.549 153.933 883.05 154.164C886.089 154.631 885.771 158.067 885.771 160.342C885.771 167.058 868.579 168.728 863.959 172.483C861.473 174.503 856.855 185.67 864.175 183.501C868.917 182.095 870.531 175.321 867.889 171.489C863.489 165.107 846.12 168.109 846.12 158.398C846.12 153.531 859.512 151.271 859.337 157.577C859.191 162.835 853.656 164.923 849.965 167.385C846.35 169.795 844.295 171.587 841.197 174.687C836.457 179.428 840.065 185.169 846.423 182.55C848.03 181.888 852.329 181.011 849.489 178.057C847.174 175.648 839.718 174.317 836.618 173.736C828.979 172.303 820.336 173.309 817.959 163.799C817.239 160.915 817.17 157.229 820.853 156.454C824.077 155.775 830.253 154.431 832.083 158.398C836.652 168.301 823.011 168.855 817.398 172.786C815.371 174.205 811.913 174.669 811.913 177.452C811.913 180.852 814.368 180.563 817.182 180.563C822.556 180.563 820.121 173.894 816.923 171.705C813.685 169.489 809.223 169.899 805.866 167.946C802.838 166.185 799.198 163.331 797.141 160.515C795.738 158.594 794.378 155.934 796.839 154.121C798.984 152.539 805.461 151.227 807.852 152.911C810.052 154.459 810.251 160.697 807.55 161.898C802.512 164.138 797.295 165.726 792.174 167.73C789.661 168.714 787.811 170.089 787.811 172.958C787.811 175.298 787.03 178.23 790.144 178.23C792.414 178.23 799.358 178.169 799.473 174.946C799.625 170.683 797.234 168.327 793.081 167.514C788.678 166.653 775.73 163.683 775.372 157.231C775.176 153.706 783.924 153.973 783.924 159.176C783.924 165.086 777.935 165.21 774.249 168.897C772.441 170.706 770.829 172.213 769.93 174.687C768.367 178.986 773.912 177.452 777.186 177.452C783.765 177.452 778.55 168.119 773.385 168.119C763.561 168.119 759.266 162.888 755.158 154.898C751.084 146.973 762.006 152.977 762.155 155.676C762.285 158 761.488 159 759.391 159.953C755.584 161.684 754.516 165.066 752.48 168.767C749.677 173.866 748.316 176.674 755.936 176.674C758.472 176.674 757.789 171.076 757.318 169.243C756.272 165.175 751.544 166.315 748.939 164.231C743.076 159.539 734.972 162.349 731.662 154.898C730.433 152.132 732.18 151.49 734.901 151.831C737.688 152.179 738.365 153.927 739.221 156.151C741.533 162.165 735.938 168.061 731.446 171.187C728.945 172.927 725.671 173.796 724.233 176.674C723.216 178.709 722.514 181.227 725.788 181.34C735.491 181.675 734.861 173.947 728.379 168.724C722.922 164.326 713.615 164.137 709.677 158.009C708.718 156.516 706.848 154.512 706.956 152.565C707.096 150.047 711.609 149.88 713.176 150.664C715.95 152.052 716.1 155.077 714.731 157.663C713.771 159.477 710.594 160.604 708.9 161.466C705.233 163.331 693.386 166.296 692.357 170.798C692.041 172.185 691.305 176.674 693.394 176.674C695.885 176.674 699.776 177.119 701.903 175.464C707.606 171.027 695.74 166.012 692.962 164.404C689.058 162.143 689.625 155.644 689.852 151.787C690.089 147.768 701.991 146.609 694.474 155.633C690.43 160.487 685.276 163.031 679.918 166.045C676.676 167.87 671.104 169.163 669.293 172.786C667.2 176.972 671.075 177.018 674.13 176.069C677.806 174.928 681.072 172.476 682.682 168.897C683.181 167.788 683.494 161.406 682.035 161.163C678.033 160.496 673.474 161.414 670.416 158.355C665.582 153.519 665.852 144.788 673.828 144.788C676.727 144.788 677.151 147.182 675.513 149.195C670.494 155.363 662.235 156.209 655.731 160.169C651.522 162.732 650.5 163.646 648.302 167.73C646.138 171.75 651.391 170.204 653.312 169.243C660.172 165.812 644.293 160.775 641.996 159.521C638.837 157.798 632.167 152.814 636.553 148.677C637.91 147.397 644.76 143.729 644.76 147.164C644.76 154.725 641.311 156.758 634.567 160.169C629.762 162.6 624.506 164.271 620.659 168.119C616.787 171.993 614.974 174.361 622.646 172.353C625.722 171.549 633.309 171.123 634.48 167.169C636.037 161.914 622.986 161.705 620.097 161.163C616.963 160.575 613.942 160.486 610.768 160.299C608.101 160.142 608.319 158.893 607.097 157.059C606.295 155.856 603.554 152.134 605.283 150.405C606.906 148.781 606.665 153.258 606.665 153.775C606.665 156.289 605.637 157.756 603.9 159.651C602.379 161.311 601.569 162.678 599.581 163.885C597.643 165.062 594.973 165.118 593.275 166.391C591.684 167.585 589.673 169.896 588.006 170.452"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1209 89.9156C1196.81 95.9668 1182.99 98.4125 1170.9 104.587C1165.47 107.361 1160.46 114.935 1161.62 121.232C1162.03 123.475 1168.79 127.598 1171.07 128.353C1174.56 129.506 1176.85 129.274 1180.06 127.924C1184.06 126.244 1184.29 117.718 1183.3 114.282C1181.71 108.767 1173.12 105.416 1168.09 104.201C1160.28 102.313 1152.35 100.82 1144.47 99.1818C1139.37 98.1226 1130.32 96.7154 1126.41 92.8327C1123.18 89.6234 1120.47 86.4162 1119.63 81.8506C1119.07 78.7854 1125.2 79.4619 1127.02 80.3062C1128.65 81.0634 1130.42 81.2632 1132.03 82.0222C1133.65 82.7848 1133.56 84.2325 1134.53 85.6257C1137.72 90.1811 1137.25 93.5083 1132.81 96.6936C1130.18 98.5791 1124.36 100.079 1121.1 100.726C1116.57 101.626 1113.2 104.932 1108.36 105.316C1104.44 105.628 1101.03 105.918 1097.39 107.676C1094.1 109.264 1091.7 112.58 1088.49 114.454C1087.56 114.995 1084.18 120.581 1083.87 121.961C1082.9 126.306 1086.95 126.984 1090.05 128.182C1091.98 128.93 1095.62 130.991 1097.82 129.897C1101.96 127.842 1100.93 121.729 1100.93 118.143C1100.93 104.774 1086.35 103.058 1076.01 100.34C1069.14 98.5333 1062.31 95.4564 1057.22 90.5162C1054.63 87.9977 1047.81 85.7536 1048.06 81.4216C1048.23 78.6443 1063.61 78.4651 1063.61 84.9393C1063.61 90.415 1062.32 91.8864 1057.57 94.7203C1052.29 97.867 1046.05 99.8823 1040.12 101.498C1032.32 103.623 1022.38 103.024 1015.8 108.105C1013.91 109.562 1004 114.732 1009.97 117.543C1013.94 119.411 1024.05 123.803 1026.73 118.872C1031.66 109.781 1024.77 104.927 1016.79 102.099C1010.43 99.842 1003.8 98.7155 997.4 96.3934C993.788 95.0824 984.102 93.0428 982.758 88.3712C982.018 85.8003 980.905 82.1459 984.313 81.25C987.657 80.3709 992.536 79.7548 995.197 82.537C1000.7 88.2852 993.018 96.0972 988.157 98.7528C983.932 101.061 979.759 102.829 974.811 103.043C968.741 103.305 962.815 105.804 956.929 107.075C948.885 108.812 939.998 111.227 939.998 120.803C939.998 123.605 947.137 123.572 949.5 124.063C953.233 124.839 957.552 123.212 957.879 118.658C958.853 105.125 940.358 104.163 931.144 101.112C923.852 98.698 918.507 98.3468 919.007 89.9156C919.113 88.116 923.321 86.0547 924.881 86.0547C928.195 86.0547 928.677 86.6641 930.28 89.5295C933.118 94.6043 926.485 100.554 922.117 101.67C917.248 102.913 912.533 103.479 907.734 104.93C902.868 106.401 897.934 108.058 892.962 109.22C885.598 110.941 882.179 116.159 882.466 123.291C882.642 127.648 894.817 130.277 895.64 125.779C896.942 118.667 891.517 111.242 885.101 108.748C881.496 107.347 878.067 105.225 874.519 103.643C868.463 100.943 861.384 99.5107 855.688 96.1789C851.286 93.6042 843.366 88.7474 841.434 83.5665C836.084 69.2179 859.484 75.6603 864.11 81.5074C866.156 84.0936 866.533 86.7735 867.868 89.5724C868.771 91.4668 865.524 92.3568 863.894 93.0043C855.974 96.1506 847.72 98.5839 839.707 101.498C835.293 103.104 829.952 103.861 825.885 106.303C819.694 110.021 814.828 111.3 814.828 119.259C814.828 123.08 819.01 125.291 822.43 125.436C827.885 125.667 833.592 126.98 838.929 126.98C842.527 126.98 843.32 119.135 842.687 116.513C840.532 107.597 829.275 107.044 822.041 106.131C811.359 104.784 801.194 100.44 791.332 96.2647C786.231 94.1052 783.744 93.1538 782.002 87.7707C779.537 80.1538 793.988 73.1502 797.724 81.0355C803.367 92.9455 795.734 98.0467 785.63 102.871C781.531 104.828 777.064 105.703 772.845 107.333C768.177 109.136 767.885 111.443 766.237 115.698C763.499 122.77 775.806 122.347 779.843 122.347C783.839 122.347 783.771 119.552 782.52 115.827C781.19 111.862 773.285 106.156 769.692 104.244C762.037 100.17 746.042 97.0722 742.698 87.7707C741.543 84.5604 741.623 81.6618 742.482 78.6761C743.199 76.1807 749.262 77.7291 751.034 78.719C753.911 80.3263 754.875 83.2249 754.964 86.3979C755.148 92.9769 749.537 95.5715 743.993 97.7232C734.11 101.559 721.61 102.113 714.968 111.108C712.371 114.626 712.129 117.665 716.264 119.087C717.976 119.675 720.151 121.194 721.361 119.859C723.477 117.524 723.382 112.536 723.823 109.692C724.31 106.545 722.734 103.448 719.935 101.884C715.928 99.6455 711.318 98.8203 707.194 96.6936C703.258 94.664 699.419 92.5359 695.618 90.2588C692.58 88.4387 692.177 85.9249 690.435 83.1376C688.892 80.6672 688.103 78.5139 688.103 75.6302C688.103 72.5456 696.541 71.5834 698.08 73.3995C701.205 77.0843 697.766 83.3575 695.1 86.0547C688.189 93.0464 676.588 98.5486 666.939 100.555C660.455 101.902 653.118 106.424 653.118 113.467C653.118 116.79 653.222 118.173 656.227 119.43C659.001 120.59 662.35 121.791 663.829 118.486C668.362 108.356 656.648 98.3131 649.576 92.9614C647.68 91.527 645.496 89.8432 643.961 88.028C642.637 86.4632 642.087 82.6425 640.678 81.5932C639.175 80.473 639.414 77.68 641.456 77.5607C643.156 77.4613 644.715 76.2546 645.3 79.4482C645.701 81.6386 645.7 85.0709 645.3 87.2559C644.442 91.9438 638.839 92.5074 635.668 94.7203C630.92 98.0338 625.473 100.595 621.242 104.587C618.563 107.114 612.447 114.661 614.331 118.872C615.647 121.813 619.637 121.051 621.069 123.119C622.969 125.864 626.883 121.911 628.066 120.374C630.241 117.549 632.126 114.488 632.126 110.807C632.126 106.085 626.308 104.032 622.711 102.571C617.598 100.494 613.041 97.9352 610.358 93.0043C609.408 91.26 606.49 86.0645 604.915 85.2825"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1179.1 68.9692C1181.57 76.2588 1181.01 79.5716 1173.78 83.0674C1168.09 85.8146 1165.8 76.4274 1164.94 72.6738C1163.56 66.673 1167.94 66.1907 1173.14 66.1907C1177.62 66.1907 1180.06 65.0356 1180.06 69.8954"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1141.79 130.194C1144.25 137.483 1143.7 140.796 1136.46 144.292C1130.77 147.039 1128.48 137.652 1127.62 133.898C1126.24 127.897 1130.62 127.415 1135.82 127.415C1140.3 127.415 1142.74 126.26 1142.74 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1102.14 68.9692C1104.6 76.2588 1104.05 79.5716 1096.81 83.0674C1091.12 85.8146 1088.83 76.4274 1087.97 72.6738C1086.59 66.673 1090.97 66.1907 1096.17 66.1907C1100.65 66.1907 1103.09 65.0356 1103.09 69.8954"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1064.28 130.194C1066.66 137.483 1066.12 140.796 1059.16 144.292C1053.68 147.039 1051.48 137.652 1050.64 133.898C1049.32 127.897 1053.53 127.415 1058.54 127.415C1062.86 127.415 1065.21 126.26 1065.21 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1026.92 66.1504C1029.38 73.683 1028.83 77.1061 1021.59 80.7185C1015.91 83.5573 1013.62 73.8571 1012.75 69.9785C1011.37 63.7776 1015.75 63.2793 1020.95 63.2793C1025.43 63.2793 1027.87 62.0857 1027.87 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M987.849 130.194C990.313 137.483 989.76 140.796 982.525 144.292C976.839 147.039 974.549 137.652 973.686 133.898C972.306 127.897 976.682 127.415 981.886 127.415C986.367 127.415 988.808 126.26 988.808 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M957.578 66.1504C959.95 73.683 959.418 77.1061 952.45 80.7185C946.975 83.5573 944.77 73.8571 943.939 69.9785C942.61 63.7776 946.824 63.2793 951.835 63.2793C956.15 63.2793 958.501 62.0857 958.501 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M921.377 130.194C923.84 137.483 923.288 140.796 916.053 144.292C910.367 147.039 908.077 137.652 907.214 133.898C905.834 127.897 910.21 127.415 915.414 127.415C919.894 127.415 922.336 126.26 922.336 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M899.803 66.1504C902.266 73.683 901.714 77.1061 894.478 80.7185C888.792 83.5573 886.503 73.8571 885.639 69.9785C884.259 63.7776 888.636 63.2793 893.839 63.2793C898.32 63.2793 900.761 62.0857 900.761 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M867.199 130.194C869.571 137.483 869.039 140.796 862.071 144.292C856.596 147.039 854.391 137.652 853.56 133.898C852.231 127.897 856.445 127.415 861.456 127.415C865.771 127.415 868.122 126.26 868.122 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M824.633 66.1504C827.005 73.683 826.473 77.1061 819.506 80.7185C814.031 83.5573 811.825 73.8571 810.994 69.9785C809.665 63.7776 813.88 63.2793 818.89 63.2793C823.205 63.2793 825.556 62.0857 825.556 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M804.759 130.194C807.222 137.483 806.67 140.796 799.434 144.292C793.749 147.039 791.459 137.652 790.595 133.898C789.215 127.897 793.592 127.415 798.795 127.415C803.276 127.415 805.717 126.26 805.717 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M773.904 66.1504C776.276 73.683 775.744 77.1061 768.777 80.7185C763.302 83.5573 761.096 73.8571 760.265 69.9785C758.936 63.7776 763.151 63.2793 768.161 63.2793C772.476 63.2793 774.827 62.0857 774.827 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M752.281 130.194C754.744 137.483 754.192 140.796 746.956 144.292C741.271 147.039 738.981 137.652 738.117 133.898C736.737 127.897 741.114 127.415 746.317 127.415C750.798 127.415 753.239 126.26 753.239 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M727.208 66.1504C729.671 73.683 729.119 77.1061 721.884 80.7185C716.198 83.5573 713.908 73.8571 713.045 69.9785C711.665 63.7776 716.041 63.2793 721.245 63.2793C725.725 63.2793 728.167 62.0857 728.167 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M695.77 130.194C698.142 137.483 697.61 140.796 690.643 144.292C685.167 147.039 682.962 137.652 682.131 133.898C680.802 127.897 685.017 127.415 690.027 127.415C694.342 127.415 696.693 126.26 696.693 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M673.03 66.1504C675.402 73.683 674.87 77.1061 667.902 80.7185C662.427 83.5573 660.222 73.8571 659.391 69.9785C658.062 63.7776 662.276 63.2793 667.287 63.2793C671.602 63.2793 673.953 62.0857 673.953 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M649.657 130.194C652.12 137.483 651.568 140.796 644.332 144.292C638.646 147.039 636.357 137.652 635.493 133.898C634.113 127.897 638.49 127.415 643.693 127.415C648.174 127.415 650.615 126.26 650.615 131.12"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M629.298 66.1504C631.67 73.683 631.138 77.1061 624.17 80.7185C618.695 83.5573 616.49 73.8571 615.659 69.9785C614.33 63.7776 618.544 63.2793 623.555 63.2793C627.87 63.2793 630.221 62.0857 630.221 67.1074"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1173.43 71.3186C1172.94 72.9311 1171.07 76.5664 1173.43 76.5664"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1133.78 134.292C1136.4 138.756 1135.3 141.169 1135.3 136.181"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1096.46 75.4002C1096.42 75.053 1095.88 68.9865 1095.88 72.3106"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1057.39 133.126C1059.47 142.284 1056.41 135.134 1058.56 135.134"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1018.33 69.5693C1020.15 71.98 1024.55 77.1302 1022.43 70.7571C1022.17 69.986 1023 75.4002 1024.16 75.4002"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M982.758 131.377C981.17 133.34 978.676 140.852 978.676 135.047"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M950.688 70.7355C950.722 72.4102 951.271 75.4642 951.271 72.2193C951.271 71.0738 950.994 71.1338 951.271 72.117"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M915.599 134.875C914.767 137.01 916.539 138.252 915.151 136.046C914.435 134.908 913.448 134.643 914.256 136.025"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M891.796 72.0708C892.018 72.5286 892.541 74.5423 892.923 74.8126C893.117 74.9495 892.533 71.9842 892.44 71.7333C891.748 69.8681 892.019 69.5601 892.762 71.3115"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M860.293 131.377C860.293 132.837 860.234 134.294 860.484 135.737C860.51 135.886 860.784 137.831 860.846 137.79C861.174 137.573 859.663 134.302 859.143 134.044"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M820.659 68.4032C820.576 71.265 818.558 70.4321 817.743 72.4848"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M796.883 134.875C796.883 135.113 796.53 137.552 796.983 137.786C797.245 137.921 797.335 135.223 797.335 134.875"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M767.598 72.4848H764.099"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M746.023 136.042C745.711 136.047 743.416 135.984 744.621 136.468C744.857 136.563 744.972 136.737 744.972 136.521"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M722.7 73.1791C722.519 73.1768 719.838 72.9971 719.793 73.0993C719.707 73.2932 720.308 73.8065 720.308 73.6048C720.308 73.1499 719.581 73.1791 720.844 73.1791"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M689.463 133.269C689.93 135.51 689.514 135.486 690.705 135.45C692.681 135.391 692.36 133.421 692.36 131.96"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M666.723 70.1524C667.292 70.6383 667.794 70.9569 668.472 71.3186"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M643.399 137.791C644.12 136.154 644.566 134.924 644.566 133.126"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M623.574 71.171C625.142 72.0103 626.812 73.6284 625.335 71.2166C624.942 70.575 624.211 70.7604 623.574 70.7604"
                                    stroke="#DFAB7D"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                    <section className="course-flax-bears-materials">
                        <div className="container">
                            <div className="course-flax-bears-materials-wrapper">
                                <div className="course-flax-bears-materials-title">
                                    <h2 className="course-flax-bears__title course-flax-bears-materials__title">
                                        Что понадобится для курса:
                                    </h2>
                                </div>
                                <div className="course-flax-bears-materials-items-wrapper">
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Цветной лён
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Однотонный лён (по желанию)
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            03
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Синтепон
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            04
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Нитки в цвет ткани
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            05
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Плотные нитки
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            06
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Иголки (маленькая, средня и большая)
                                        </p>
                                    </div>
                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            07
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            2 иголки с наконечниками
                                        </p>
                                    </div>

                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            08
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Нитки мулине
                                        </p>
                                    </div>

                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            09
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Две бусины (для глаз)
                                        </p>
                                    </div>

                                    <div className="course-flax-bears-materials-item">
                                        <p className="course-flax-bears-materials-item__subtitle">
                                            10
                                        </p>
                                        <p className="course-flax-bears-materials-item__title">
                                            Тесьма (какая нравится)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-master">
                        <div className="container">
                            <div className="course-flax-bears-master-wrapper">
                                <div className="course-flax-bears-master-text">
                                    <h2 className="course-flax-bears__title course-flax-bears-master__title">
                                        О мастере
                                    </h2>
                                    <p className="course-flax-bears-master__description">
                                        Ирина очень творческий и приятный
                                        человек, занимается шитьём более 15 лет,
                                        продаёт своих медвежат в инстаграм
                                    </p>
                                    <a
                                        href="/master/610bd1d248914c0390aa9a36"
                                        className="btn course-flax-bears-master__btn"
                                    >
                                        Перейти на страницу мастера
                                    </a>
                                </div>
                                <div
                                    className="course-flax-bears-master-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2458.jpg')",
                                    }}
                                ></div>
                                <a
                                    href="/master/610bd1d248914c0390aa9a36"
                                    className="btn course-flax-bears-master-media__btn"
                                >
                                    Перейти на страницу мастера
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-contest">
                        <div className="container">
                            <div className="course-flax-bears-contest-wrapper">
                                <div className="course-flax-bears-contest-text">
                                    <h2 className="course-flax-bears__title course-flax-bears-contest__title">
                                        Конкурс лучших работ
                                    </h2>
                                    <p className="course-flax-bears-contest__description">
                                        Каждый месяц мы выбираем лучшую работу
                                        среди тех, кто прошёл курс и дарим Pro
                                        Подписку HobJob на год. Для участия в
                                        конкурсе нужно выложить пост с
                                        фотографией вашей работы и указать
                                        специальный хештег, который будет
                                        объявлен на последнем уроке курса
                                    </p>
                                </div>
                                <div className="course-flax-bears-contest-img">
                                    <svg
                                        viewBox="0 0 597 507"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M281.972 3.73755C250.974 80.4183 212.436 154.044 182.627 231.227C148.55 319.462 122.417 412.372 96.4929 503.105"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M434.16 6.11554C409.272 113.529 380.48 217.853 337.854 319.607C312.688 379.681 283.55 439.722 267.704 503.105"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M3.75317 191.595C51.013 191.025 97.3217 180.742 144.58 178.648C197.383 176.309 250.273 177.634 303.109 177.327C332.438 177.157 361.177 171.15 390.432 170.325C419.091 169.518 447.88 170.555 476.435 173.1C504.419 175.593 535.396 172.912 562.569 179.705"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M3.75317 355.673C55.7487 349.966 107.554 346.784 159.64 342.33C209.731 338.046 259.345 329.821 309.186 323.438C358.568 317.114 408.206 314.043 457.675 308.642C502.129 303.789 548.668 300.98 593.482 300.98"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M20.3987 203.484C201.249 203.484 379.973 174.448 560.191 165.437"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M27.5325 367.562C102.688 356.474 178.97 353.371 254.494 345.632C321.215 338.796 388.104 333.285 454.769 325.948C476.801 323.524 498.42 320.94 519.766 315.248"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M260.571 18.0052C221.694 110.127 188.158 204.19 148.279 295.96C127.753 343.195 108.019 390.055 91.7371 438.9"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M410.381 25.139C409.812 45.3375 404.958 63.7424 400.473 83.3985C386.433 144.928 375.178 207.077 361.765 268.746C347.005 336.606 329.979 401.886 308.129 467.436"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-chat">
                        <div className="container">
                            <div className="course-flax-bears-chat-wrapper">
                                <div className="course-flax-bears-chat-img">
                                    <svg
                                        viewBox="0 0 477 384"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M128.394 233.028C119.723 233.028 112.064 230.88 104.403 230.029C96.0757 229.104 88.6779 224.491 80.4122 224.031C71.6411 223.544 63.8615 216.167 55.5885 213.869C47.9664 211.751 42.4375 204.592 35.0964 201.873C26.7688 198.789 11.7415 196.671 5.77431 189.212C3.82779 186.778 3.94168 179.236 3.94168 176.05C3.94168 170.063 5.32236 166.286 10.6891 163.305C21.0829 157.531 37.3874 147.423 50.1739 146.145C57.3336 145.429 63.7172 141.075 70.8326 139.98C79.3155 138.675 90.8022 134.202 98.4053 130.401C106.261 126.473 115.509 124.195 123.812 121.321C133.253 118.053 141.898 112.119 151.468 109.992C172.728 105.268 197.053 97.9366 217.526 89.0834C232.125 82.7704 248.054 79.7699 262.509 72.923C282.076 63.6544 303.67 58.4234 323.319 48.599C333.597 43.4597 344.558 37.8375 355.14 33.6047C364.198 29.9817 375.393 24.3602 384.795 21.9426C400.094 18.0086 420.561 17.4361 434.276 8.86427C458.012 -5.97051 478.704 13.8064 471.428 39.2692C467.542 52.8732 459.786 67.4554 454.102 80.0869C451.059 86.8488 449.768 94.0064 448.104 101.079C446.607 107.441 448.259 115.215 445.522 121.238C442.895 127.017 442.662 134.588 441.023 140.813C438.818 149.195 433.905 157.073 432.693 165.554C431.464 174.161 424.804 182.106 423.697 190.961C422.603 199.71 420.55 208.499 419.199 217.284C416.052 237.736 407.993 257.237 405.704 277.844C403.561 297.125 395.291 315.822 395.291 335.322C395.291 347.302 392.289 361.195 385.961 370.975C383.071 375.442 372.018 379.697 366.802 379.971C359.121 380.376 355.897 377.832 348.809 375.806C343.03 374.155 337.885 368.706 334.981 363.478C332.932 359.79 322.417 352.948 318.82 351.149C310.913 347.195 304.265 340.677 296.329 336.488C285.795 330.929 275.101 324.556 267.174 315.496C257.85 304.841 244.155 303.171 232.604 296.753C226.25 293.224 221.234 290.034 215.36 286.258C210.838 283.35 208.621 277.142 204.781 274.262C200.366 270.951 197.146 267.21 194.368 262.35C190.532 255.637 187.751 268.762 186.871 271.18C182.191 284.052 179.374 300.095 179.374 313.997C179.374 321.494 179.374 328.991 179.374 336.488C179.374 343.052 181.454 355.473 176.709 360.812C176.187 361.398 168.667 343.73 167.712 341.819C163.932 334.26 162.948 324.159 157.633 317.662C147.958 305.838 152.732 286.949 145.72 274.929C143.705 271.473 143.09 263.098 141.972 259.185C140.374 253.592 135.236 251.21 132.892 246.523"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M182.373 360.479C189.866 354.575 193.866 346.237 201.199 340.237C206.369 336.007 211.549 332.407 217.526 328.991C221.951 326.463 225.909 324.181 230.355 321.827C232.865 320.498 241.717 315.262 242.35 313.997"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M132.892 225.531C143.575 214.848 157.17 211.324 168.212 202.29C171.648 199.478 176.899 198.339 181.04 196.959C188.425 194.497 198.482 189.606 204.864 185.047C225.078 170.608 249.318 162.106 270.506 149.394C295.346 134.49 319.009 117.123 342.145 99.4961C354.732 89.9059 394.725 64.6695 382.963 75.2554C368.367 88.3912 360.745 109.882 344.227 121.238C323.895 135.216 302.926 149.294 285.833 166.387C264.79 187.43 235.533 202.981 219.109 228.53C215.041 234.857 208.662 239.842 203.698 245.357C200.697 248.691 197.17 257.019 191.37 257.019"
                                            stroke="#DFAB7D"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="course-flax-bears-chat-text">
                                    <h2 className="course-flax-bears__title course-flax-bears-chat__title">
                                        Общий чат участников
                                    </h2>
                                    <p className="course-flax-bears-chat__description">
                                        После покупки вы получите ссылку на вход
                                        в Telegram-чат, где сможете поделиться с
                                        другими учениками своими работами или
                                        задать интересующий вопрос.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-work">
                        <div className="container">
                            <div className="course-flax-bears-work-wrapper">
                                <h2 className="course-flax-bears__title__mb course-flax-bears-work__title">
                                    Работы учеников
                                </h2>
                                <div className="course-flax-bears-work-cols-wrapper">
                                    <div className="course-flax-bears-work-col">
                                        <div
                                            className="course-flax-bears-work-img"
                                            style={{
                                                backgroundImage:
                                                    "url('http://localhost:5000/uploads/courses/IMG_5144.JPG')",
                                            }}
                                        ></div>
                                        <div
                                            className="course-flax-bears-work-img"
                                            style={{
                                                backgroundImage:
                                                    "url('http://localhost:5000/uploads/courses/IMG_5149.JPG')",
                                            }}
                                        ></div>
                                    </div>
                                    <div className="course-flax-bears-work-col">
                                        <div
                                            className="course-flax-bears-work-img"
                                            style={{
                                                backgroundImage:
                                                    "url('http://localhost:5000/uploads/courses/photo_2021-08-30_10-30-10.jpg')",
                                            }}
                                        ></div>
                                        <div
                                            className="course-flax-bears-work-img"
                                            style={{
                                                backgroundImage:
                                                    "url('http://localhost:5000/uploads/courses/photo_2021-09-01_10-25-45.jpg')",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="course-flax-bears-work-media-wrapper">
                                    <div
                                        className="course-flax-bears-work-media-img"
                                        style={{
                                            backgroundImage:
                                                "url('http://localhost:5000/uploads/courses/IMG_5144.JPG')",
                                        }}
                                    ></div>
                                    <div
                                        className="course-flax-bears-work-media-img"
                                        style={{
                                            backgroundImage:
                                                "url('http://localhost:5000/uploads/courses/IMG_5149.JPG')",
                                        }}
                                    ></div>
                                    <div
                                        className="course-flax-bears-work-media-img"
                                        style={{
                                            backgroundImage:
                                                "url('http://localhost:5000/uploads/courses/photo_2021-08-30_10-30-10.jpg')",
                                        }}
                                    ></div>
                                    <div
                                        className="course-flax-bears-work-media-img"
                                        style={{
                                            backgroundImage:
                                                "url('http://localhost:5000/uploads/courses/photo_2021-09-01_10-25-45.jpg')",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="course-flax-bears-faq">
                        <div className="container">
                            <div className="course-flax-bears-faq-wrapper">
                                <h2 className="course-flax-bears__title__mb course-flax-bears-faq__title">
                                    Часто задаваемые вопросы
                                </h2>
                            </div>
                            <div className="course-flax-bears-faq-items-wrapper">
                                <div className="course-flax-bears-faq-item">
                                    <h3 className="course-flax-bears-faq-item__title">
                                        Будут ли меня курировать в течение
                                        курса?
                                    </h3>
                                    <p className="course-flax-bears-faq-item__description">
                                        Нет, курс вы проходите самомтоятельно по
                                        зарание записанным урокам. Если у вас
                                        возникнут вопросы вы можете задать их в
                                        общем чате учеников курса
                                    </p>
                                </div>

                                <div className="course-flax-bears-faq-item">
                                    <h3 className="course-flax-bears-faq-item__title">
                                        Сохранится ли доступ к курсу после
                                        прохождения?
                                    </h3>
                                    <p className="course-flax-bears-faq-item__description">
                                        Да, доступ к курсу сохраняется навсегда.
                                        Все материалы будут храниться в личном
                                        кабинете
                                    </p>
                                </div>

                                <div className="course-flax-bears-faq-item">
                                    <h3 className="course-flax-bears-faq-item__title">
                                        Могу ли я сшить не только мишку, а
                                        что-нибудь на свой выбор?
                                    </h3>
                                    <p className="course-flax-bears-faq-item__description">
                                        Нет, данный курс рассчитан на шитьё
                                        мишки. Но вы сможете применить
                                        полученные навыки и в дальнейшем сшить
                                        любое другое изделие по своему выбору.
                                        Или же можно пройти дополнительный курс
                                        на нашей платформе
                                    </p>
                                </div>

                                <div className="course-flax-bears-faq-item">
                                    <h3 className="course-flax-bears-faq-item__title">
                                        Будут ли методические материалы?
                                    </h3>
                                    <p className="course-flax-bears-faq-item__description">
                                        Да, к курсу прилагаются подробные
                                        PDF-файлы с инструкцией по изготовлению
                                        мишки
                                    </p>
                                </div>

                                <div className="course-flax-bears-faq-item">
                                    <h3 className="course-flax-bears-faq-item__title">
                                        Какие условия участие в конкурсе на
                                        лучшую работу ?
                                    </h3>
                                    <p className="course-flax-bears-faq-item__description">
                                        После прохождения купленного курса нужно
                                        выложить пост в инстаграм с фотографией
                                        вашей работы и специальным хештегом,
                                        который будет указан в последнем уроке
                                        курса. Отметить наш аккаунт @hobjob.ru В
                                        конце каждого месяца мы будем выбирать
                                        лучшую работу и связываться с
                                        победителем в директе. Для участия в
                                        конкурсе аккаунт должен быть открытым.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <AboutSection />
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
