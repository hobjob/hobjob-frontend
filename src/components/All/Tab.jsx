import React from "react";

const Tab = ({title, description}) => {
    const [open, setOpen] = React.useState(false);

    const onClickTab = () => {
        setOpen(!open);
    };

    return (
        <div className="tab" onClick={onClickTab}>
            <div className="tab-top">
                <h3 className="tab-top__title">{title}</h3>
                <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`tab-top-svg ${
                        open ? "active" : ""
                    }`}
                >
                    <line x1="1" y1="25.5" x2="51" y2="25.5" stroke="black" />
                    <line
                        x1="25.5"
                        y1="51.0001"
                        x2="25.5"
                        y2="1.00012"
                        stroke="black"
                    />
                </svg>
            </div>
            {open ? (
                <div className="tab-bottom">
                    <p className="description tab-bottom__description">
                        {description}
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default Tab;
