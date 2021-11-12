import React from "react";

const ModalWindow = ({children, closeFunc}) => {
    const [stateModalWindowAnimation, setStateModalWindowAnimation] =
        React.useState(false);

    const RefModalWindow = React.useRef();

    React.useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const handlerModalWindow = (e) => {
        if (e.target === RefModalWindow.current) {
            onClickClose();
        }
    };

    const onClickClose = () => {
        setStateModalWindowAnimation(true);
        document.body.style.overflow = "visible";

        setTimeout(() => {
            setStateModalWindowAnimation(false);

            closeFunc();
        }, 390);
    };

    return (
        <div
            className={`modal-window ${
                stateModalWindowAnimation ? "close" : ""
            }`}
            onClick={(e) => handlerModalWindow(e)}
            ref={RefModalWindow}
        >
            <div
                className={`modal-window-content ${
                    stateModalWindowAnimation ? "close" : ""
                }`}
            >
                <div
                    className="modal-window-content-close"
                    onClick={onClickClose}
                >
                    <svg
                        width="39"
                        height="38"
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
                </div>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
