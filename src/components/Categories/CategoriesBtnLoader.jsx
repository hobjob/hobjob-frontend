import React from "react";
import ContentLoader from "react-content-loader";

const CategoriesBtnLoader = () => {
    return (
        <div style={{display: "inline-block", marginRight: "5px", marginBottom: "5px"}}>
            <ContentLoader
                title="Загрузка"
                speed={2}
                width="200"
                height="42"
                style={{borderRadius: "100px"}}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="200" height="42" />
            </ContentLoader>
        </div>
    );
};

export default CategoriesBtnLoader;
