import React from "react";

import {
    HomeMainSection,
    ShopSection,
    CategoriesSection,
	AboutSection,
	MasterSection
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
			
			<MasterSection />
        </>
    );
};

export default Home;
