import React from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
import {Helmet} from "react-helmet";

import {ShopSection} from "../components/";

const Err404: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Страница не найдена - HobJob</title>
            </Helmet>
            <section className="err404">
                <div className="container">
                    <div className="err404-wrapper">
                        <div className="err404-text">
                            <h2 className="title err404-text__title">
                                Страница не найдена
                            </h2>
<<<<<<< HEAD
                            <Link to="/" className="btn err404-text__btn">
                                Перейти на главную страницу
                            </Link>
=======
                            <a href="/" className="btn err404-text__btn">
                                Перейти на главную страницу
                            </a>
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
                        </div>
                        <img
                            src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/404.svg`}
                            alt="404"
                            className="err404__img"
                        />
                    </div>
                </div>
            </section>

            <ShopSection
                title="Вам может понравиться"
                description="Новые курсы добавляются каждый месяц"
            />
        </>
    );
};

export default Err404;
