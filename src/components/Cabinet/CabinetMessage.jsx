import React from "react";

const CabinetMessage = ({message, closeFunc}) => {
    return (
        <div className="cabinet-message">
            <p className="cabinet-message__title">{message}</p>

            <div className="cabinet-message-close" onClick={closeFunc}>
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 0.883783L14.1162 0L7.5 6.61621L0.883783 0L0 0.883783L6.61621 7.5L0 14.1162L0.883783 15L7.5 8.38378L14.1162 15L15 14.1162L8.38378 7.5L15 0.883783Z"
                        fill="black"
                    />
                </svg>
            </div>
        </div>
    );
};

export default CabinetMessage;
