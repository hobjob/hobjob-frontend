import React from "react";

import {CoursePageFaqItem} from "../../";

const CoursePageFaq: React.FC = () => {
    const items = [
        {
            title: "Что будет после активации подписки?",
            description:
                "Вы получите полноценный доступ ко всей платформе и сможете добавить в своё обучение любой курс.",
        },
        {
            title: "Будут ли в курсе дополнительные материалы?",
            description:
                "Да, под каждым уроком вы найдёте дополнительные материалы по теме урока. Ссылки на товары, используемые в курсе, инструкции, дополнительные рекомендации.",
        },
        {
            title: "Будут ли меня курировать в течение курса?",
            description:
                "Нет, курс вы проходите самостоятельно по заранее записанным урокам.",
        },
        {
            title: "Сохранится ли доступ к курсу после прохождения?",
            description:
                "Доступ к курсу сохраняется на всём протяжении подписки. Вы можете смотреть любой курс, который есть у нас на платформе. ",
        },
        {
            title: "Где я могу найти список курсов, которые я добавил(а) в своё обучение? ",
            description:
                "Вкладку «моё обучение» можно найти, нажав на меню в мобильной версии или на аватарку в компьютерной версии.",
        },
    ];

    return (
        <section className="course-page-faq">
            <div className="container">
                <div className="course-page-faq-wrapper">
                    <h2 className="title__mb course-page-faq__title">
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
