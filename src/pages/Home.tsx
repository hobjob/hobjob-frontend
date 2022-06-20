import React from "react";
import {Helmet} from "react-helmet";
import {useSearchParams} from "react-router-dom";

<<<<<<< HEAD
import {HomeMainSection, ShopSection} from "../components/";
=======
import {HomeMainSection, ShopSection, CategoriesSection} from "../components/";
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8

const Home: React.FC = () => {
    const [search] = useSearchParams();

    React.useEffect(() => {
        window.scrollTo(0, 0);

        const ref = search.get("ref");

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
<<<<<<< HEAD
=======

            <CategoriesSection />
>>>>>>> b859d6b516abb382567162db483d6d3f7f4b6de8
        </>
    );
};

export default Home;
