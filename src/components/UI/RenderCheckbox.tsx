import React from "react";

interface RenderCheckboxProps {
    label: string;
    input: any;
    defaultState?: boolean;
}

const RenderCheckbox: React.FC<RenderCheckboxProps> = ({
    label,
    input: {onChange, ...input},
    defaultState,
}) => {
    const [isActive, setIsActive] = React.useState<boolean>(
        defaultState ? defaultState : false
    );

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    React.useEffect(() => {
        onChange(isActive);
    }, [isActive]);

    return (
        <div className="checkbox-wrapper" onClick={toggleActive}>
            <input type="hidden" {...input} />

            <div className={`checkbox ${isActive ? "active" : ""}`}></div>

            <p className="checkbox__label">{label}</p>
        </div>
    );
};

export default RenderCheckbox;
