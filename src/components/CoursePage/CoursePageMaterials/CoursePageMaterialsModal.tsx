import React from "react";
import {Link} from "react-router-dom";

interface CoursePageMaterialsModalProps {
    isActiveCloseModalAnimation: boolean;
    closeModal: () => void;
}

const CoursePageMaterialsModal: React.FC<CoursePageMaterialsModalProps> = ({
    isActiveCloseModalAnimation,
    closeModal,
}) => {
    React.useEffect(() => {
        document.body.addEventListener("click", checkClickModalWrapper);
    });

    const ModalWrapperRef = React.useRef<HTMLDivElement>(null);

    const checkClickModalWrapper = (e: Event) => {
        if (e.target === ModalWrapperRef.current) {
            closeModal();
        }
    };

    return (
        <div
            className={`course-page-materials-modal-wrapper ${
                isActiveCloseModalAnimation ? "close" : ""
            }`}
            ref={ModalWrapperRef}
        >
            <div
                className={`course-page-materials-modal ${
                    isActiveCloseModalAnimation ? "close" : ""
                }`}
            >
                <p className="course-page-materials-modal__description">
                    Чтобы скачать материалы курса, зарегистрируйтесь и оформите
                    бесплатную пробную неделю
                </p>
                <Link
                    to="/go/register"
                    className="course-page-materials-modal__link"
                >
                    Начать бесплатно
                </Link>
                <div
                    className="course-page-materials-modal-close"
                    onClick={closeModal}
                >
                    <svg
                        width="20"
                        height="20"
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
        </div>
    );
};

export default CoursePageMaterialsModal;
