import React from "react";

interface PassingTopTextProps {
    subtitle: string;
    title: string;
}

const PassingTopText: React.FC<PassingTopTextProps> = ({subtitle, title}) => {
    return (
        <div className="passing-top-text">
            <p className="subtitle__mb passing-top-text__subtitle">
                {subtitle}
            </p>
            <h2 className="passing-top-text__title">{title}</h2>
        </div>
    );
};

export default PassingTopText;
