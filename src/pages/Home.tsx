import React from "react";
import {Helmet} from "react-helmet";
import {useSearchParams} from "react-router-dom";

import {HomeMainSection, ShopSection} from "../components/";

const Home: React.FC = () => {
    const [search] = useSearchParams();

    React.useEffect(() => {
        const ref = search.get("ref");

        if (ref) {
            localStorage.setItem("ref", ref);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>HobJob - Курсы для творческих людей</title>
            </Helmet>

            <HomeMainSection />

            <ShopSection
                title="Учитесь на практике"
                description="Обучайтесь у лучших профессионалов своего дела и раскройте самые сокровенные секреты творческого мира"
            />
        </>
    );
};

export default Home;
