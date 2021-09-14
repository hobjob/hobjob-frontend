import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "400px",
                alignItems: "center",
                width: "100%",
            }}
        >
            <ContentLoader
                title="Загрузка"
                viewBox="0 0 400 200"
                height={200}
                width="100%"
                speed={2}
                backgroundColor="#E6E5E5"
                foregroundColor="#FAF9F9"
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>
        </div>
    );
};

export default Loader;
