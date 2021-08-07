import React from "react";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import queryString from "query-string";

import {
    HomeMainSection,
    ShopSection,
    CategoriesSection,
    AboutSection,
    MastersSection,
} from "../components/";

const Home = ({
    history: {
        location: {search},
    },
}) => {
    const {user, isLoaded} = useSelector(({user}) => user);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        const {ref} = queryString.parse(search, {
            arrayFormat: "comma",
        });

        if (isLoaded && ref) {
            if (ref !== user._id) {
                localStorage.setItem("refId", ref);
            } else {
                localStorage.setItem("refId", "");
            }
        } else if (ref) {
            localStorage.setItem("refId", ref);
        } else {
            localStorage.setItem("refId", "");
        }
    }, [isLoaded]);

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
