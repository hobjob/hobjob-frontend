import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import {checkDeclension} from "../Functions/checkDeclension";
import {abbreviateNumber} from "../Functions/abbreviateNumber";

import {fetchMasterById} from "../redux/actions/masters";
import {addCourseCart} from "../redux/actions/cart";

import {Err404} from "../pages/";

import {
    MasterCardInfo,
    ShopBlock,
    Loader,
    MagazineBlockBig,
    MagazineBlock,
} from "../components/";

const MasterCard = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {cart} = useSelector(({cart}) => cart);
    const {itemById, isLoadedById} = useSelector(({masters}) => masters);
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);

        dispatch(fetchMasterById(id));
    }, []);

    const onClickAddCourseCart = (obj) => {
        dispatch(addCourseCart(obj));
    };

    return (
        <>
            {isLoadedById && isLoadedAllCategories ? (
                Object.keys(itemById).length ? (
                    <>
                        <Helmet>
                            <title>
                                {itemById.name} {itemById.surname} (мастер) -
                                HobJob
                            </title>
                        </Helmet>
                        <section className="master-card">
                            <div className="container">
                                <div className="master-card-wrapper">
                                    <MasterCardInfo
                                        {...itemById}
                                        categories={categories}
                                    />

                                    {itemById.courses &&
                                    itemById.courses.length ? (
                                        <div className="master-card-course">
                                            <h2 className="title__mb master-card-course__title">
                                                Курсы
                                            </h2>
                                            <div className="master-card-course-block-wrapper">
                                                {itemById.courses.map(
                                                    (item, index) => (
                                                        <ShopBlock
                                                            {...item}
                                                            onClickAddCourseCart={
                                                                onClickAddCourseCart
                                                            }
                                                            transitTime={
                                                                checkDeclension(
                                                                    item.transitTime,
                                                                    [
                                                                        "час",
                                                                        "часа",
                                                                        "часов",
                                                                    ]
                                                                ).title
                                                            }
                                                            cartItems={cart}
                                                            key={`shop-master-card-block-${index}`}
                                                            masters={{
                                                                [itemById._id]:
                                                                    itemById,
                                                            }}
                                                            categories={
                                                                categories
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className="master-card-course-btn">
                                                <Link
                                                    to={`/shop?masters=${itemById._id}`}
                                                    className="btn-arrow master-card-course__btn"
                                                >
                                                    Показать еще
                                                    <svg
                                                        width="31"
                                                        height="12"
                                                        viewBox="0 0 31 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M30.5303 6.53033C30.8232 6.23744 30.8232 5.76256 30.5303 5.46967L25.7574 0.696699C25.4645 0.403806 24.9896 0.403806 24.6967 0.696699C24.4038 0.989592 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM0 6.75H30V5.25H0V6.75Z"
                                                            fill="#D89350"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}

                                    {itemById.posts && itemById.posts.length ? (
                                        <div className="master-card-magazine">
                                            <h2 className="title__mb master-card-magazine__title">
                                                Журнал
                                            </h2>

                                            <div className="master-card-magazine-block-wrapper">
                                                <>
                                                    {window.innerWidth > 900 ? (
                                                        <MagazineBlockBig
                                                            {...itemById
                                                                .posts[0]}
                                                            masters={{
                                                                [itemById._id]:
                                                                    itemById,
                                                            }}
                                                            categories={
                                                                categories
                                                            }
                                                            views={abbreviateNumber(
                                                                itemById
                                                                    .posts[0].views
                                                            )}
                                                        />
                                                    ) : null}

                                                    <div className="magazine-block-wrapper">
                                                        {itemById.posts.map(
                                                            (item, index) =>
                                                                window.innerWidth >
                                                                900 ? (
                                                                    index !==
                                                                    0 ? (
                                                                        <MagazineBlock
                                                                            {...item}
                                                                            masters={{
                                                                                [itemById._id]:
                                                                                    itemById,
                                                                            }}
                                                                            categories={
                                                                                categories
                                                                            }
                                                                            views={abbreviateNumber(
                                                                                item.views
                                                                            )}
                                                                            key={`master-card-magazine-block-${index}`}
                                                                        />
                                                                    ) : null
                                                                ) : (
                                                                    <MagazineBlock
                                                                        {...item}
                                                                        masters={{
                                                                            [itemById._id]:
                                                                                itemById,
                                                                        }}
                                                                        views={abbreviateNumber(
                                                                            item.views
                                                                        )}
                                                                        categories={
                                                                            categories
                                                                        }
                                                                        key={`master-card-magazine-block-${index}`}
                                                                    />
                                                                )
                                                        )}
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </section>
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

export default MasterCard;
