import React from "react";

interface PassingTopTextProps {
    subtitle: string;
    title: string;
}

const PassingTopText: React.FC<PassingTopTextProps> = ({subtitle, title}) => {
    return (
        <div className="passing-top-text">
            <div className="passing-top-text-title">
                <p className="passing-top-text-title__subtitle">
                    {subtitle}
                </p>
                <h2 className="passing-top-text-title__title">{title}</h2>
            </div>
        </div>
    );
};

export default PassingTopText;
