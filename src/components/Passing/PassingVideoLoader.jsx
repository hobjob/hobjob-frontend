import React from "react";
import ContentLoader from "react-content-loader";

const PassingVideoLoader = ({percentLoading}) => {
    return (
        <div
            className="passing-video-wrapper"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px",
                width: "100%",
                borderRadius: "4px",
                overflow: "hidden",
            }}
        >
			<span className="passing-video-wrapper__title">Секундочку ({percentLoading}%)</span>
            <ContentLoader
                title="Загрузка"
                height={500}
                width="100%"
                speed={2}
                backgroundColor="#FAF9F9"
                foregroundColor="#FAF9F9"
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="500" />
            </ContentLoader>
        </div>
    );
};

export default PassingVideoLoader;
