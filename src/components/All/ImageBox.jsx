import React from "react";

const ImageBox = ({image, closeFunc}) => {
    const [stateCloseAnimation, setStateCloseAnimation] = React.useState(false);

    const RefImageBox = React.useRef();

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const handlerImageBox = (e) => {
        if (e.target <= RefImageBox.current) {
            onClickClose();
        }
    };

    const onClickClose = () => {
        setStateCloseAnimation(true);
        document.body.style.overflow = "visible";

        setTimeout(() => {
            setStateCloseAnimation(false);

            closeFunc();
        }, 390);
    };

    return (
        <div
            className={`image-box ${stateCloseAnimation ? "close" : ""}`}
            ref={RefImageBox}
            onClick={(e) => handlerImageBox(e)}
        >
            <img
                src={image}
                alt=""
                className={`image-box__image ${
                    stateCloseAnimation ? "close" : ""
                }`}
            />

            <span className="image-box__close" onClick={onClickClose}>
                <svg
                    width="20"
                    height="21"
                    viewBox="0 0 39 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1.29289"
                        y1="36.2929"
                        x2="36.6482"
                        y2="0.937555"
                        stroke="black"
                        strokeWidth="2"
                    />
                    <line
                        x1="2.70711"
                        y1="1.29289"
                        x2="38.0624"
                        y2="36.6482"
                        stroke="black"
                        strokeWidth="2"
                    />
                </svg>
            </span>
        </div>
    );
};

export default ImageBox;
