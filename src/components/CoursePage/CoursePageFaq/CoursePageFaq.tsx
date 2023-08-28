import React from "react";

import {CoursePageFaqItem} from "../../";

const CoursePageFaq: React.FC = () => {
    const items = [
        {
            title: "Что будет после того, как я куплю курс?",
            description:
                "Вы получите доступ к приобретенному курсу и сможете найти его у себя в личном кабинете во вкладке «Моё обучение».",
        },
        {
            title: "Что будет после того как я активирую подписку?",
            description:
                "Вы получите полноценный доступ ко всей платформе и сможете добавить в своё обучение любой курс.",
        },
        {
            title: "Будут ли в курсе дополнительные материалы?",
            description:
                "Да, под уроками вы найдете дополнительные материалы по теме урока в pdf формате. Ссылки на товары, используемые в курсе, инструкции и дополнительные рекомендации.",
        },
        {
            title: "Будут ли меня курировать в течение курса?",
            description:
                "Нет, курс вы проходите самостоятельно по заранее записанным урокам.",
        },
        {
            title: "Сохранится ли доступ к курсу после прохождения?",
            description:
                "Да доступ к курсу сохраняется после его прохождения. Если вы оформили подписку, то доступ к пройденным курсам закроется, когда закончится действие подписки. Посмотреть, когда заканчивается подписка, можно в личном кабинете в разделе «Мой профиль» в самом низу страницы. Если вы купили курс навсегда, то он будет доступен в любое время.",
        },
        {
            title: "Где я могу найти список курсов, которые  добавил(а) в своё обучение?",
            description:
                "Вкладку «Моё обучение» можно найти в правом верхнем углу в компьютерной версии или, нажав на смайлик в правом верхнем углу, в мобильной версии.",
        },
    ];

    return (
        <section className="course-page-faq">
            <div className="container">
                <div className="course-page-faq-wrapper">
                    <h2 className="course-page__title mb course-page-faq__title">
                        Часто задаваемые вопросы
                    </h2>

                    <div className="course-page-faq-items-wrapper">
                        {items.map((item, index) => (
                            <CoursePageFaqItem
                                {...item}
                                key={`course-page-faq-item-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursePageFaq;
