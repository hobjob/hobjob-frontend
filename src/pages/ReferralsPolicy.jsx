import React from "react";
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';

import {PolicyBlock} from "../components/";

const ReferralsPolicy = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documentContent = [
        {
            title: "Что нельзя делать по реферальной программе",
            content: [
                {
                    type: "text",
                    text: "1. Регистрировать и оплачивать продукты HobJob по собственной реферальной ссылке.",
                },
                {
                    type: "text",
                    text: "2. Давать рекламу по поисковым запросам HobJob",
                },
                {
                    type: "text",
                    text: "3. Спамить с помощью ссылок на форумах, сообществах и в рассылках.",
                },
                {
                    type: "text",
                    text: "4. Представлять акции и скидки от HobJob за свои.",
                },
                {
                    type: "text",
                    text: "5. Вводить других пользователей в заблуждение и распространять ложную информацию.",
                },
                {
                    type: "text",
                    text: "6. Распространять свою реферальную ссылку через сайты купонные-агрегаторы.",
                },
            ],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Правила реферальной программы - HobJob</title>
            </Helmet>
            <section className="policy">
                <div className="container">
                    <div className="policy-wrapper">
                        <Link to="/go/referrals" className="policy-back">← Назад</Link>
                        <h2 className="title__mb policy__title">
                            Правила реферальной программы
                        </h2>
                        <div className="policy-block-wrapper">
                            {documentContent.map((item, index) => (
                                <PolicyBlock
                                    {...item}
                                    blockIndex={index}
                                    key={`policy-block-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReferralsPolicy;
