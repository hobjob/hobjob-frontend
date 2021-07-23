import React from "react";
import {Helmet} from "react-helmet";

import {
    HomeMainSection,
    ShopSection,
    CategoriesSection,
    AboutSection,
    MastersSection,
} from "../components/";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - HobJob</title>
			</Helmet>
			
            <HomeMainSection />

            <ShopSection title="Учитесь на практике" />

            <CategoriesSection />

            <AboutSection />

            <MastersSection />
        </>
    );
};

export default Home;
