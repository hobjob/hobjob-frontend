import React from "react";

import {CoursePageMaterialsItem, CoursePageMaterialsModal} from "../../";

interface CoursePageMaterialsProps {
    materials: string[];

    _id: string;

    isLogin: boolean;
    isAdd: boolean;

    onClickAddCourse: (Navigate: string) => void;
}

const CoursePageMaterials: React.FC<CoursePageMaterialsProps> = ({
    materials,
    isLogin,
    isAdd,
    _id,
    onClickAddCourse,
}) => {
    const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
    const [isActiveCloseModalAnimation, setIsActiveCloseModalAnimation] =
        React.useState<boolean>(false);

    const closeModal = () => {
        setIsActiveCloseModalAnimation(true);

        setTimeout(() => {
            setIsOpenModal(false);
            setIsActiveCloseModalAnimation(false);
            document.body.style.overflow = "visible";
        }, 180);
    };

    const openModal = () => {
        document.body.style.overflow = "hidden";
        setIsOpenModal(true);
    };

    return (
        <>
            {isOpenModal ? (
                <CoursePageMaterialsModal
                    isActiveCloseModalAnimation={isActiveCloseModalAnimation}
                    closeModal={closeModal}
                />
            ) : null}

            <section className="course-page-materials">
                <div className="container">
                    <div className="course-page-materials-wrapper">
                        <h2 className="title course-page-materials__title">
                            Вы получите доступ к материалам курса:
                        </h2>

                        <div className="course-page-materials-items-wrapper">
                            {materials.map((material, index) => (
                                <CoursePageMaterialsItem
                                    openModal={openModal}
                                    title={material}
                                    isLogin={isLogin}
                                    isAdd={isAdd}
                                    courseId={_id}
                                    onClickAddCourse={onClickAddCourse}
                                    key={`course-page-materials-item-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CoursePageMaterials;
