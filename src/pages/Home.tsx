import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import {
    HomeMainSection,
    CoursesSection,
    ServicesSection,
    MasterSection,
} from "../components/";

const Home: React.FC = () => {
    const [visibleButton, setVisibleButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handlerScroll);

        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
    }, []);

    const handlerScroll = () => {
        if (Math.floor(window.pageYOffset) > 500) {
            setVisibleButton(true);
        } else {
            setVisibleButton(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>HobJob - Курсы для творческих людей</title>
            </Helmet>

            <Link
                to="/course"
                className={`btn-small-round main__btn ${
                    visibleButton ? "visible" : ""
                }`}
            >
                Начать обучение
            </Link>

            <HomeMainSection />

            <CoursesSection
                title="Учитесь на практике"
                description="Обучайтесь у лучших профессионалов своего дела и раскройте самые сокровенные секреты творческого мира"
            />

            <ServicesSection />

            <MasterSection />
        </>
    );
};

export default Home;
