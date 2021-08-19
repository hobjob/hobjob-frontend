import React from "react";

const CoursePage = ({
    match: {
        params: {id},
    },
}) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);

        const arrayBtn = document.querySelectorAll(".buy-btn");

        for (let i = 0; i < arrayBtn.length; i++) {
            arrayBtn[i].addEventListener("click", () => {
                console.log("buy");
            });
        }
    }, []);

    return (
        <>
            <section className="course-page-main">
                <div className="container">
                    <div className="course-page-main-wrapper">
                        <div className="course-page-main-text">
                            <div className="course-page-main-text-subinfo">
                                <a
                                    href=""
                                    className="course-page-main-text-subinfo__category"
                                >
                                    Ремесло и Технология
                                </a>
                                <span className="course-page-main-text-subinfo__time">
                                    Длительность курса 1 час
                                </span>
							</div>
							
                            <h2 className="course-page-main-text__title">
                                Шитьё мишек изо льна
							</h2>
							
                            <p className="course-page-main-text__description">
                                Узнайте, как за несколько часов сшить уникальную
                                игрушу из натурального льна
                            </p>

                            <a href="" className="course-page-main-text-master">
                                <div
                                    className="course-page-main-text-master-avatar"
                                    style={{
                                        backgroundImage:
                                            "url('http://localhost:5000/uploads/user_avatar/78581a85-6767-482d-b723-bf1e75c1a383-IMG_2410_1.jpg')",
                                    }}
                                ></div>
                                <h4 className="course-page-main-text-master__name">
                                    Ирина Нагибина
                                </h4>
                            </a>
                            <span className="course-page-main-text__price">
                                1 790 ₽
                            </span>
                            <button className="btn course-page-main-text__btn buy-btn">
                                Добавить в корзину
                            </button>
                        </div>
                        <div
                            className="course-page-main-video"
                            style={{
                                backgroundImage:
                                    "url('http://localhost:5000/uploads/courses/bcc78dc3-02e0-45ab-8649-f0f18c1a4a48-IMG_2410_1.jpg')",
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursePage;
