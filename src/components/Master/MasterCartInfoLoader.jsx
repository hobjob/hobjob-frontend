import React from "react";
import ContentLoader from "react-content-loader";

const MasterCartInfoLoader = () => {
    return (
        <div
            className="master-cart-info"
            style={{justifyContent: "space-between"}}
        >
            <ContentLoader
                title="Загрузка"
                speed={2}
                width="200"
                height="200"
                style={{borderRadius: "50%"}}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
            </ContentLoader>

            <div style={{width: "78%"}}>
                <ContentLoader
                    title="Загрузка"
                    speed={2}
                    width="50%"
                    height="50"
                    style={{borderRadius: "5px"}}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
                </ContentLoader>
                <ContentLoader
                    title="Загрузка"
                    speed={2}
                    width="100%"
                    height="75"
                    style={{borderRadius: "5px", marginTop: "25px"}}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
                </ContentLoader>

                <ContentLoader
                    title="Загрузка"
                    speed={2}
                    width="35%"
                    height="40"
                    style={{borderRadius: "5px", marginTop: "50px"}}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="400" />
                </ContentLoader>
            </div>
        </div>
    );
};

export default MasterCartInfoLoader;
