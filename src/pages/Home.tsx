import React from "react";
import {Helmet} from "react-helmet";

import {HomeMainSection, ShopSection, HobJobGood} from "../components/";

const Home: React.FC = () => {
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

            <HobJobGood />
        </>
    );
};

export default Home;
