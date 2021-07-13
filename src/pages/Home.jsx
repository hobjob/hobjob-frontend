import React from "react";

import {
    HomeMainSection,
    ShopSection,
    CategoriesSection,
	AboutSection,
	MastersSection
} from "../components/";

const Home = () => {
	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    return (
        <>
            <HomeMainSection />

            <ShopSection title="Учитесь на практике" />

            <CategoriesSection />

			<AboutSection />
			
			<MastersSection />
        </>
    );
};

export default Home;
