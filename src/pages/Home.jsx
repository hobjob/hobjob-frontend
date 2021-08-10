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
            {/* <form action="https://gramotadel.express/api/v1/webform-create/">
                <div
                    class="alert alert-success"
                    id="result-success"
                    role="alert"
                    style={{display: "none"}}
                >
                    Спасибо за обучение!
                </div>
                <div
                    class="alert alert-danger"
                    id="result-danger"
                    role="alert"
                    style={{display: "none"}}
                ></div>
                <div class="form-group">
                    <label>Ваши фамилия имя отчество</label>
                    <input type="text" class="form-control" name="mask_name" />
                </div>
                <div class="form-group">
                    <label>Адрес электронной почты</label>
                    <input type="email" class="form-control" name="email" />
                </div>
                <input
                    type="hidden"
                    name="secure"
                    value="a2f018c3-dfdb-4ed1-b620-949e206be252"
                />
                <input
                    type="hidden"
                    name="doc_id"
                    value="965e81f0-fe70-48c4-abfc-05a8b896dd38"
                />
                <button class="btn btn-primary" type="submit">
                    Получить сертификат
                </button>
            </form> */}
			
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
