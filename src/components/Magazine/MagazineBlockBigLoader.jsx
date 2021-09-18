import React from "react";
import ContentLoader from "react-content-loader";

const MagazineBlockBigLoader = () => {
    return (
        <div className="magazine-block-big">
            <ContentLoader
                title="Загрузка"
                speed={2}
                width="100%"
                height={400}
                style={{borderRadius: "15px",}}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
            </ContentLoader>
        </div>
    );
};

export default MagazineBlockBigLoader;
