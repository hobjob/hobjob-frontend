import React from "react";
import {
    useNavigate,
    createSearchParams,
    useSearchParams,
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    fetchCourses,
    fetchAddPaginationCourses,
    setLoadedCourseByUrl,
    setCoursesFilters,
} from "../redux/actions/courses";
import {addUserCourse} from "../redux/actions/user";

import {
    CoursesBlock,
    CoursesNotFound,
    CoursesCategories,
    Loader,
} from "../components/";

import {Master} from "../models/IMaster";
import {Category} from "../models/ICategory";

import {checkIsAddCourse} from "../functions/checkIsAddCourse";

const Courses: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query] = useSearchParams();

    const {
        courses,
        totalCount,
        page,
        isLoadedAllCoursesFirst,
        isFetchAllCourses,
        filters,
    } = useTypedSelector(({courses}) => courses);

    const categories: {[key: string]: Category} = useTypedSelector(
        ({categories}) => categories.items
    );
    const isLoadedAllCategories = useTypedSelector(
        ({categories}) => categories.isLoadedAllCategories
    );

    const masters: {[key: string]: Master} = useTypedSelector(
        ({masters}) => masters.items
    );
    const isLoadedMasters = useTypedSelector(({masters}) => masters.isLoaded);

    const {userInfo, isLoadedUserInfo} = useTypedSelector(({user}) => user);

    const categoriesArray = Object.keys(filters.categories).map(
        (category) => category
    );
    const mastersArray = Object.keys(filters.masters).map((master) => master);

    React.useEffect(() => {
        const categoriesObject: {[key: string]: string} = {};
        const mastersObject: {[key: string]: string} = {};

        query.getAll("categories").map((category) => {
            categoriesObject[category] = category;
        });

        query.getAll("masters").map((master) => {
            mastersObject[master] = master;
        });

        dispatch(
            setCoursesFilters({
                isParse: true,

                categories: categoriesObject,
                masters: mastersObject,
                search: query.getAll("q")[0] ? query.getAll("q")[0] : "",
            })
        );

        dispatch(setLoadedCourseByUrl(false));

        return () => {
            dispatch(
                setCoursesFilters({
                    isParse: false,

                    categories: {},
                    masters: {},
                    search: "",
                })
            );
        };
    }, []);

    React.useEffect(() => {
        if (filters.isParse) {
            navigate({
                pathname: "/course",
                search: `?${createSearchParams({
                    categories: categoriesArray,
                    masters: mastersArray,
                    q: filters.search ? [filters.search] : [],
                })}`,
            });

            dispatch(
                fetchCourses({
                    limit: 18,
                    page: 1,
                    categories: categoriesArray,
                    masters: mastersArray,
                    q: filters.search ? [filters.search] : [],
                }) as any
            );
        }
    }, [
        Object.keys(filters.categories).length,
        filters.search,
        Object.keys(filters.masters).length,
        filters.isParse,
    ]);

    const onClickaddPaginationPageCourses = () => {
        dispatch(
            fetchAddPaginationCourses({
                limit: 18,
                page: page + 1,
                categories: categoriesArray,
                masters: mastersArray,
                q: filters.search ? [filters.search] : [],
            }) as any
        );
    };

    const onClickAddCourse = (_id: string) => {
        dispatch(addUserCourse(_id) as any);
    };

    return (
        <>
            <Helmet>
                <title>Курсы - HobJob</title>
            </Helmet>

            <section className="courses">
                <div className="container">
                    <div className="courses-wrapper">
                        {isLoadedMasters && isLoadedAllCategories ? (
                            <>
                                <div className="courses-text">
                                    <h2 className="title courses-text__title">
                                        Курсы
                                    </h2>
                                    <p className="description courses-text__description">
                                        Новые курсы добавляются каждый месяц
                                    </p>
                                </div>

                                <CoursesCategories />

                                <div className="courses-catalog">
                                    {isLoadedAllCoursesFirst ? (
                                        courses.length ? (
                                            <>
                                                <div className="courses-catalog-block-wrapper">
                                                    {courses.map(
                                                        (course, index) => (
                                                            <CoursesBlock
                                                                {...course}
                                                                key={`courses-catalog-block-${index}`}
                                                                master={
                                                                    masters[
                                                                        course
                                                                            .masterId
                                                                    ]
                                                                }
                                                                categoryItem={
                                                                    categories[
                                                                        course
                                                                            .category
                                                                    ]
                                                                }
                                                                onClickAddCourse={
                                                                    onClickAddCourse
                                                                }
                                                                isLogin={
                                                                    localStorage.getItem(
                                                                        "accessToken"
                                                                    ) &&
                                                                    isLoadedUserInfo
                                                                        ? true
                                                                        : false
                                                                }
                                                                isAdd={checkIsAddCourse(
                                                                    userInfo.courses,
                                                                    course._id
                                                                )}
                                                                isSubscribe={
                                                                    userInfo
                                                                        .subscribe
                                                                        .working
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </div>

                                                {courses.length >=
                                                totalCount ? (
                                                    <p className="courses-catalog__totalcount">
                                                        Показано {totalCount}{" "}
                                                        курсов из {totalCount}
                                                    </p>
                                                ) : (
                                                    <div className="courses-catalog-btn-pagination">
                                                        <button
                                                            className="courses-catalog-btn-pagination__btn btn__gray"
                                                            onClick={
                                                                onClickaddPaginationPageCourses
                                                            }
                                                        >
                                                            Загрузить еще
                                                            <svg
                                                                width="16"
                                                                height="17"
                                                                viewBox="0 0 16 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className={
                                                                    isFetchAllCourses
                                                                        ? "rotate"
                                                                        : ""
                                                                }
                                                            >
                                                                <path
                                                                    d="M3.69711 3.25332C6.11923 1.06235 9.74404 1.02885 12.1997 3.02886L10.2533 3.10257C10.002 3.11262 9.80769 3.32032 9.81774 3.57158C9.82779 3.81614 10.0288 4.0071 10.27 4.0071C10.2767 4.0071 10.2801 4.0071 10.2868 4.0071L13.275 3.89654C13.5196 3.88649 13.7106 3.68884 13.7106 3.44428V3.41078C13.7106 3.40408 13.7106 3.40073 13.7106 3.39403V3.39068L13.6 0.43588C13.59 0.184621 13.3789 -0.00968503 13.131 0.000365301C12.8797 0.0104156 12.6854 0.218122 12.6955 0.469381L12.7658 2.32199C11.5497 1.32701 10.0522 0.75079 8.4509 0.670387C6.46764 0.569884 4.56143 1.24996 3.09074 2.5833C1.06728 4.41581 0.20965 7.2031 0.85287 9.85639C0.903122 10.0641 1.08738 10.2014 1.29173 10.2014C1.32858 10.2014 1.36209 10.1981 1.39894 10.188C1.64014 10.1277 1.7909 9.88319 1.7306 9.64198C1.16778 7.31031 1.9182 4.86137 3.69711 3.25332Z"
                                                                    fill="black"
                                                                />
                                                                <path
                                                                    d="M15.4325 6.54983C15.3722 6.30862 15.1277 6.15787 14.8865 6.21817C14.6452 6.27847 14.4945 6.52303 14.5548 6.76424C15.121 9.09591 14.3672 11.5448 12.5883 13.1529C11.3387 14.2819 9.77085 14.838 8.2097 14.838C6.71891 14.838 5.23146 14.3321 4.03212 13.3338L6.00198 13.1562C6.24989 13.1328 6.43415 12.915 6.4107 12.6638C6.38725 12.4125 6.16949 12.2316 5.91823 12.2551L2.93999 12.5231C2.69208 12.5465 2.50783 12.7643 2.53128 13.0155L2.79929 15.9938C2.81939 16.2283 3.01704 16.4058 3.2482 16.4058C3.2616 16.4058 3.275 16.4058 3.2884 16.4025C3.53631 16.379 3.72056 16.1613 3.69711 15.91L3.53631 14.0976C4.7524 15.0825 6.24319 15.6554 7.83449 15.7358C7.96179 15.7425 8.0891 15.7459 8.21305 15.7459C10.059 15.7459 11.8144 15.0691 13.1947 13.8229C15.2181 11.9904 16.0757 9.20646 15.4325 6.54983Z"
                                                                    fill="black"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <CoursesNotFound />
                                        )
                                    ) : (
                                        <Loader />
                                    )}
                                </div>
                            </>
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;
