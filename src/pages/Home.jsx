import React from "react";
import {Helmet} from "react-helmet";
import queryString from "query-string";

import {HomeMainSection, ShopSection, CategoriesSection} from "../components/";

const Home = ({
    history: {
        location: {search},
    },
}) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);

        const {ref} = queryString.parse(search, {
            arrayFormat: "comma",
        });

        if (ref) {
            localStorage.setItem("ref", ref);
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>HobJob - курсы для творческих людей</title>
            </Helmet>

            <HomeMainSection />

            <ShopSection
                title="Учитесь на практике"
                description="Обучайтесь у лучших профессионалов своего дела и раскройте самые сокровенные секреты творческого мира"
            />

            <CategoriesSection />
        </>
    );
};

export default Home;
