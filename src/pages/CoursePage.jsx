import React from "react";
import {useHistory, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCourseById} from "../redux/actions/courses";
import {addCourseCart} from "../redux/actions/cart";

import {
    CoursePageMain,
    CoursePageAbout,
    CoursePageFor,
    CoursePageSkills,
    CoursePageResult,
    CoursePageProgramm,
    CoursePageMiddleIcon,
    CoursePageMaterials,
    CoursePageMaster,
    CoursePageContest,
    CoursePageChat,
    CoursePageWork,
    CoursePageFaq,
    AboutSection,
    Loader,
} from "../components";

const CoursePage = ({
    match: {
        params: {id},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {itemById, isLoadedCourseById} = useSelector(({courses}) => courses);
    const {cart} = useSelector(({cart}) => cart);
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);
    const {user, courses} = useSelector(({user}) => user);

    const [visibleButton, setVisibleButton] = React.useState(false);
    const [addState, setAddState] = React.useState(false);

    React.useEffect(() => {
        if (cart[id]) {
            setAddState(true);
        } else {
            setAddState(false);
        }
    }, [Object.keys(cart).length]);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        window.addEventListener("scroll", () => {
            if (Math.floor(window.pageYOffset) > 200) {
                setVisibleButton(true);
            } else {
                setVisibleButton(false);
            }
        });

        dispatch(fetchCourseById(id));
    }, []);

    const addCart = () => {
        dispatch(addCourseCart({_id: id}));

        history.push("/cart");
    };

    //склонение ["час", "часа", "часов"]
    const checkDeclension = (num, title) => {
        let result;

        if (num % 100 >= 5 && num % 100 <= 20) {
            result = num + " " + title[2];
        } else {
            if (num % 10 === 1) {
                result = num + " " + title[0];
            } else if (num % 10 >= 2 && num % 10 <= 4) {
                result = num + " " + title[1];
            } else {
                result = num + " " + title[2];
            }
        }

        return result;
    };

    return (
        <>
            {isLoadedCourseById && isLoadedMasters && isLoadedCategories ? (
                <>
                    <Helmet>
                        <title>{itemById.title} - HobJob</title>
                    </Helmet>

                    {courses[id] ? (
                        <button
                            className={`btn-small-round disabled course-page__btn ${
                                visibleButton ? "active" : ""
                            }`}
                        >
                            Приобретен
                        </button>
                    ) : addState ? (
                        <Link
                            to="/cart/"
                            className={`btn-small-round-regular course-page__btn ${
                                visibleButton ? "active" : ""
                            }`}
                        >
                            Перейти в корзину
                        </Link>
                    ) : (
                        <button
                            className={`btn-small-round course-page__btn ${
                                visibleButton ? "active" : ""
                            }`}
                            onClick={addCart}
                        >
                            Добавить в корзину{" "}
                            {document.documentElement.clientWidth > 500
                                ? ""
                                : ` за ${itemById.price}₽`}
                        </button>
                    )}

                    <CoursePageMain
                        {...itemById}
                        checkDeclension={checkDeclension(itemById.transitTime, [
                            "час",
                            "часа",
                            "часов",
                        ])}
                        pro={user.pro}
                        proPrice={itemById.price - (itemById.price / 100) * 20}
                        addCart={addCart}
                        masters={masters}
                        categories={categories}
                        addState={addState}
                        isBuy={courses[id]}
                    />

                    {itemById.page.map((item, index) => (
                        <div key={`course-page-${item.type}-${index}`}>
                            {item.type === "about" ? (
                                <CoursePageAbout
                                    {...item}
                                    path={itemById.path}
                                />
                            ) : null}
                            {item.type === "for" ? (
                                <CoursePageFor {...item} />
                            ) : null}
                            {item.type === "skills" ? (
                                <CoursePageSkills
                                    {...item}
                                    path={itemById.path}
                                />
                            ) : null}
                            {item.type === "result" ? (
                                <CoursePageResult
                                    {...item}
                                    path={itemById.path}
                                />
                            ) : null}
                            {item.type === "programm" ? (
                                <CoursePageProgramm {...item} />
                            ) : null}

                            {item.type === "middle-icon" ? (
                                <CoursePageMiddleIcon
                                    {...item}
                                    path={itemById.path}
                                />
                            ) : null}

                            {item.type === "materials" ? (
                                <CoursePageMaterials {...item} />
                            ) : null}

                            {item.type === "master" ? (
                                <CoursePageMaster
                                    {...itemById}
                                    {...item}
                                    masters={masters}
                                />
                            ) : null}

                            {item.type === "contest" ? (
                                <CoursePageContest />
                            ) : null}

                            {item.type === "chat" ? <CoursePageChat /> : null}

                            {item.type === "work" ? (
                                <CoursePageWork
                                    {...item}
                                    path={itemById.path}
                                />
                            ) : null}

                            {item.type === "faq" ? (
                                <CoursePageFaq {...item} />
                            ) : null}
                        </div>
                    ))}

                    <AboutSection />
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
