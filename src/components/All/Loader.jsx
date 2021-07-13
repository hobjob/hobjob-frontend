import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
    return (
        <div style={{display: "flex", alignItems: "center", height: "250px"}} className="loader">
            <ContentLoader
                viewBox="0 0 400 100"
                height={100}
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
