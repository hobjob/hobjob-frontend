import React from "react";
import ContentLoader from "react-content-loader";

const LoaderSmall = () => {
    return (
		<div
			className="loader-small-wrapper"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "5px",
                width: "50px",
				borderRadius: "100px",
				overflow: "hidden"
            }}
		>
            <ContentLoader
                title="Загрузка"
                height={5}
                speed={2}
                backgroundColor="#E6E5E5"
                foregroundColor="#FAF9F9"
            >
                <rect x="0" y="0" rx="0" ry="0" width="50" height="5" />
            </ContentLoader>
        </div>
    );
};

export default LoaderSmall;
