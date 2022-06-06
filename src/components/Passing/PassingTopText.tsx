import React from "react";

interface PassingTopTextProps {
    title: string;
}

const PassingTopText: React.FC<PassingTopTextProps> = ({title}) => {
    return (
        <div className="passing-top-text">
            <h2 className="passing-top-text__title">{title}</h2>
        </div>
    );
};

export default PassingTopText;
