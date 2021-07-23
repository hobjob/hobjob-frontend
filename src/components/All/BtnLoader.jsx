import React from "react";
import ContentLoader from "react-content-loader";

const BtnLoader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "20px",
                width: "100%",
                alignItems: "center",
            }}
        >
            <ContentLoader
                title="Загрузка"
                viewBox="0 0 400 160"
                height={50}
                width="100%"
                backgroundColor="#C3C3C3"
                foregroundColor="#D7D7D7"
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </div>
    );
};

export default BtnLoader;
