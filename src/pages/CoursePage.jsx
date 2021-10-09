import React from "react";
import {useHistory, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchCourseByUrl} from "../redux/actions/courses";
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
    CoursePageEducation,
	AboutSection,
	ShopSection,
	ReferralsSection,
    Loader,
} from "../components";

import {Err404} from '../pages';

const CoursePage = ({
    match: {
        params: {url},
    },
}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {itemByUrl, isLoadedCourseByUrl} = useSelector(
        ({courses}) => courses
    );
    const {cart} = useSelector(({cart}) => cart);
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const masters = useSelector(({masters}) => masters.items);
    const isLoadedMasters = useSelector(({masters}) => masters.isLoaded);
    const {userInfo, isLoadedUserInfo} = useSelector(({user}) => user);

    const [visibleButton, setVisibleButton] = React.useState(false);
    const [addState, setAddState] = React.useState(false);

    React.useEffect(() => {
        if (cart[itemByUrl._id]) {
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

        dispatch(fetchCourseByUrl(url));
    }, []);

    const addCart = () => {
        dispatch(addCourseCart({_id: itemByUrl._id}));

        history.push("/cart");
    };

    return (
        <>
            {isLoadedCourseByUrl && isLoadedMasters && isLoadedCategories ? (
                Object.keys(itemByUrl).length ? (
                    <>
                        <Helmet>
                            <title>{itemByUrl.title} - HobJob</title>
                        </Helmet>

                        {isLoadedUserInfo && userInfo.courses[itemByUrl._id] ? (
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
                                    : ` за ${itemByUrl.price}₽`}
                            </button>
                        )}

                        <CoursePageMain
                            {...itemByUrl}
                            pro={userInfo.pro}
                            proPrice={
                                itemByUrl.price -
                                (itemByUrl.price / 100) *
                                    process.env.REACT_APP_PAYMENT_PERCENT_PRO
                            }
                            addCart={addCart}
                            masters={masters}
                            categories={categories}
                            addState={addState}
                            isBuy={
                                isLoadedUserInfo
                                    ? userInfo.courses[itemByUrl._id]
                                        ? true
                                        : false
                                    : false
                            }
                        />

                        {itemByUrl.page.map((item, index) => (
                            <div key={`course-page-${item.type}-${index}`}>
                                {item.type === "about" ? (
                                    <CoursePageAbout
                                        {...item}
                                        path={itemByUrl.path}
                                    />
                                ) : null}
                                {item.type === "for" ? (
                                    <CoursePageFor {...item} />
                                ) : null}
                                {item.type === "skills" ? (
                                    <CoursePageSkills
                                        {...item}
                                        path={itemByUrl.path}
                                    />
                                ) : null}
                                {item.type === "result" ? (
                                    <CoursePageResult
                                        {...item}
                                        path={itemByUrl.path}
                                    />
                                ) : null}
                                {item.type === "programm" ? (
                                    <CoursePageProgramm {...item} />
                                ) : null}

                                {item.type === "middle-icon" ? (
                                    <CoursePageMiddleIcon
                                        {...item}
                                        path={itemByUrl.path}
                                    />
                                ) : null}

                                {item.type === "materials" ? (
                                    <CoursePageMaterials {...item} />
                                ) : null}

                                {item.type === "master" ? (
                                    <CoursePageMaster
                                        {...itemByUrl}
                                        {...item}
                                        masters={masters}
                                    />
                                ) : null}

                                {item.type === "education" ? (
                                    <CoursePageEducation />
                                ) : null}

                                {item.type === "contest" ? (
                                    <CoursePageContest />
                                ) : null}

                                {item.type === "chat" ? (
                                    <CoursePageChat />
                                ) : null}

                                {item.type === "work" ? (
                                    <CoursePageWork
                                        {...item}
                                        path={itemByUrl.path}
                                    />
                                ) : null}

                                {item.type === "faq" ? (
                                    <CoursePageFaq {...item} />
                                ) : null}
                            </div>
						))}
						
						<ReferralsSection />

                        <ShopSection title="Вам может понравиться" />

                        <AboutSection />
                    </>
                ) : (
                    <Err404 />
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CoursePage;
