import React from "react";

import {AboutSection} from "../components";

const CoursePage = ({
    match: {
        params: {id},
    },
}) => {
    const [visibleButton, setVisibleButton] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const arrayBtn = document.querySelectorAll(".buy-btn");

        for (let i = 0; i < arrayBtn.length; i++) {
            arrayBtn[i].addEventListener("click", () => {
                console.log("buy");
            });
        }

        window.addEventListener("scroll", () => {
            if (Math.floor(window.pageYOffset) > 200) {
                setVisibleButton(true);
            } else {
                setVisibleButton(false);
            }
        });
    }, []);

    return (
        <>
            <button
                className={`btn-small-round buy-btn course-flax-bears__btn ${
                    visibleButton ? "active" : ""
                }`}
            >
                Добавить в корзину
            </button>

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

                            <h2 className="course-flax-bears-main-text__title">
                                Шитьё мишек изо льна
                            </h2>

                            <p className="course-flax-bears-main-text__description">
                                Узнайте, как за несколько часов сшить уникальную
                                игрушу из натурального льна
                            </p>

                            <a
                                href="http://localhost:3000/master/610bd1d248914c0390aa9a36"
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
                                1 790 ₽
                            </span>
                            <button className="btn course-flax-bears-main-text__btn buy-btn">
                                Добавить в корзину
                            </button>
                        </div>
                        <div
                            className="course-flax-bears-main-video"
                            style={{
                                backgroundImage:
                                    "url('http://localhost:5000/uploads/courses/dad3aa21-5cb9-487a-8333-56411e655805-IMG_2410.jpg')",
                            }}
                        ></div>
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
                                С помощью данного курса вы научитесь делать
                                чудесного мишку из натурального льна, который
                                впишется в любой интерьер. Ирина поделится своей
                                личноспроектированной выкройкой, расскажет и
                                покажет, как выбирать ткань, кроить, наполнять и
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
                                        Даже если вы ни разу не держали в руках
                                        иголку и ножницы - не беда! Всё гораздо
                                        проще, чем кажется
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
                                        Тем, кто хочет улучшить свои навыки
                                    </h3>
                                    <p className="course-flax-bears-for-item__description">
                                        Ирина поделится своим многолетним опытм
                                        и секретами, которые в дальнейшем
                                        пригодятся в творчестве и не только
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
                                        Тем, кто хочет научиться чему-то новому
                                    </h3>
                                    <p className="course-flax-bears-for-item__description">
                                        Шитьё помагает улучшить координацию глаз
                                        и рук, а так же выработать концентрацию
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
                                Прекрасный мишка из цветного льна, который
                                станет отличным подарком и впишется в любой
                                интерьер.
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
                                <h3 className="course-flax-bears-programm-item__title">
                                    Введение
                                </h3>
                                <ul className="course-flax-bears-programm-item-ul">
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Обо мне
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Что будем делать на курсе?
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="course-flax-bears-programm-item">
                                <h3 className="course-flax-bears-programm-item__title">
                                    Вырезание выкроек
                                </h3>
                                <ul className="course-flax-bears-programm-item-ul">
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Правильное расположение выкроек на
                                            ткани
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Формирование отступа для красивых
                                            швов
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            03
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Вырезание выкроек
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="course-flax-bears-programm-item">
                                <h3 className="course-flax-bears-programm-item__title">
                                    Сшивание деталей мишки
                                </h3>
                                <ul className="course-flax-bears-programm-item-ul">
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Правило сшивания обратным швом
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Расположение вырезанных деталей
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            03
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Прокатывание швов
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="course-flax-bears-programm-item">
                                <h3 className="course-flax-bears-programm-item__title">
                                    Наполнение игрушки
                                </h3>
                                <ul className="course-flax-bears-programm-item-ul">
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Набивание деталей
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Формирование туловища
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            03
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Формирование головы
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            04
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Секрет красивых ушек
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="course-flax-bears-programm-item">
                                <h3 className="course-flax-bears-programm-item__title">
                                    Украшение и детализация
                                </h3>
                                <ul className="course-flax-bears-programm-item-ul">
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Сшивание набитых деталей
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            02
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Создание глаз
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            03
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Создание улыбки
                                        </p>
                                    </li>
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            04
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Завязывание шарфа
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="course-flax-bears-programm-item">
                                <h3 className="course-flax-bears-programm-item__title">
                                    Готовый мишка
                                </h3>
                                <ul className="course-flax-bears-programm-item-ul">
                                    <li className="course-flax-bears-programm-item__li">
                                        <p className="course-flax-bears-programm-item__li__subtitle">
                                            01
                                        </p>
                                        <p className="course-flax-bears-programm-item__li__title">
                                            Прекрасный мишка который, украсит
                                            любой интерьер
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                Ирина очень творческий и приятный человек,
                                занимается шитьём более 15 лет, продаёт своих
                                медвежат в инстаграм
                            </p>
                            <a
                                href="http://localhost:3000/master/610bd1d248914c0390aa9a36"
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
                                Каждый месяц мы выбираем лучшую работу среди
                                тех, кто прошёл курс и дарим Pro Подписку HobJob
                                на год. Для участия в конкурсе нужно выложить
                                пост с фотографией вашей работы и указать
                                специальный хештег, который будет объявлен на
                                последнем уроке курса
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
                                После покупки вы получите ссылку на вход в
                                Telegram-чат, где сможете поделиться с другими
                                учениками своими работами или задать
                                интересующий вопрос.
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
                                    className="course-flax-bears-work-img long"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2529.jpg')",
                                    }}
                                ></div>
                                <div
                                    className="course-flax-bears-work-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2529.jpg')",
                                    }}
                                ></div>
                                <div
                                    className="course-flax-bears-work-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2529.jpg')",
                                    }}
                                ></div>
                            </div>
                            <div className="course-flax-bears-work-col">
                                <div
                                    className="course-flax-bears-work-img long"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2529.jpg')",
                                    }}
                                ></div>
                                <div
                                    className="course-flax-bears-work-img"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/courses/IMG_2529.jpg')",
                                    }}
                                ></div>
                            </div>
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
                                Будут ли меня курировать в течение курса?
                            </h3>
                            <p className="course-flax-bears-faq-item__description">
                                Нет, курс вы проходите самомтоятельно по зарание
                                записанным урокам. Если у вас возникнут вопросы
                                вы можете задать их в общем чате учеников курса
                            </p>
                        </div>

                        <div className="course-flax-bears-faq-item">
                            <h3 className="course-flax-bears-faq-item__title">
                                Сохранится ли доступ к курсу после прохождения?
                            </h3>
                            <p className="course-flax-bears-faq-item__description">
                                Да, доступ к курсу сохраняется навсегда. Все
                                материалы будут храниться в личном кабинете
                            </p>
                        </div>

                        <div className="course-flax-bears-faq-item">
                            <h3 className="course-flax-bears-faq-item__title">
                                Могу ли я сшить не только мишку, а что-нибудь на
                                свой выбор?
                            </h3>
                            <p className="course-flax-bears-faq-item__description">
                                Нет, данный курс рассчитан на шитьё мишки. Но вы
                                сможете применить полученные навыки и в
                                дальнейшем сшить любое другое изделие по своему
                                выбору. Или же можно пройти дополнительный курс
                                на нашей платформе
                            </p>
                        </div>

                        <div className="course-flax-bears-faq-item">
                            <h3 className="course-flax-bears-faq-item__title">
                                Будут ли методические материалы?
                            </h3>
                            <p className="course-flax-bears-faq-item__description">
                                Да, к курсу прилагаются подробные PDF-файлы с
                                инструкцией по изготовлению мишки
                            </p>
                        </div>

                        <div className="course-flax-bears-faq-item">
                            <h3 className="course-flax-bears-faq-item__title">
                                Какие условия участие в конкурсе на лучшую
                                работу ?
                            </h3>
                            <p className="course-flax-bears-faq-item__description">
                                После прохождения купленного курса нужно
                                выложить пост в инстаграм с фотографией вашей
                                работы и специальным хештегом, который будет
                                указан в последнем уроке курса. Отметить наш
                                аккаунт @hobjob.ru В конце каждого месяца мы
                                будем выбирать лучшую работу и связываться с
                                победителем в директе. Для участия в конкурсе
                                аккаунт должен быть открытым.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <AboutSection />
        </>
    );
};

export default CoursePage;
