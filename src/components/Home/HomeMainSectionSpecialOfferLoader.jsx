import React from "react";
import ContentLoader from "react-content-loader";

const HomeMainSectionSpecialOfferLoader = () => {
    return (
        <div className="main-special-offer-shop-block">
            <ContentLoader
                title="Загрузка"
                speed={2}
                width="100%"
                height="175"
                style={{borderRadius: "15px"}}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="175" />
            </ContentLoader>
        </div>
    );
};

export default HomeMainSectionSpecialOfferLoader;
