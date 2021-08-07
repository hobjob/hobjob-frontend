import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

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
                                                            checkDeclension={checkDeclension(
                                                                item.transitTime,
                                                                [
                                                                    "час",
                                                                    "часа",
                                                                    "часов",
                                                                ]
                                                            )}
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
