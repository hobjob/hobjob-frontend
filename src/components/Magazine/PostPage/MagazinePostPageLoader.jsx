import React from "react";
import ContentLoader from "react-content-loader";

const MagazinePostPageLoader = () => {
    return (
        <>
            <div className="magazine-post-page-block">
                <ContentLoader
                    title="Загрузка"
                    speed={2}
                    width="100%"
                    height={500}
                    style={{borderRadius: "4px"}}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
                </ContentLoader>
            </div>
            <div className="magazine-post-page-block">
                <ContentLoader
                    title="Загрузка"
                    speed={2}
                    width="100%"
                    height={500}
                    style={{borderRadius: "4px"}}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
                </ContentLoader>
            </div>
            <div className="magazine-post-page-block">
                <ContentLoader
                    title="Загрузка"
                    speed={2}
                    width="100%"
                    height={500}
                    style={{borderRadius: "4px"}}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
                </ContentLoader>
            </div>
        </>
    );
};

export default MagazinePostPageLoader;
