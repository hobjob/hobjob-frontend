import React from "react";
import {Helmet} from "react-helmet";
import {useSelector} from "react-redux";
import queryString from "query-string";
import moment from "moment";

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

        const {ref} = queryString.parse(search, {
            arrayFormat: "comma",
        });

        if (ref) {
            localStorage.setItem(
                "ref",
                JSON.stringify({
                    refId: ref,
                    dateCreate: moment().format("DD.MM.YYYY, HH:mm"),
                })
            );
        }
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

            {/* <MastersSection /> */}
        </>
    );
};

export default Home;
