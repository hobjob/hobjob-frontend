import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import {abbreviateNumber} from "../Functions/abbreviateNumber";

import {fetchMasterById} from "../redux/actions/masters";
import {addUserCourse, hiddenUserCourse} from "../redux/actions/user";

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

    const {itemById, isLoadedById} = useSelector(({masters}) => masters);
    const categories = useSelector(({categories}) => categories.items);
    const isLoadedAllCategories = useSelector(
        ({categories}) => categories.isLoadedAllCategories
    );
    const {userInfo, isLoadedUserInfo} = useSelector(({user}) => user);

    React.useEffect(() => {
		window.scrollTo(0, 0);
		
        dispatch(fetchMasterById(id));
    }, []);

    const onClickAddCourse = (id) => {
        dispatch(addUserCourse(id));
    };

    const onClickHiddenCourse = (id) => {
        dispatch(hiddenUserCourse(id));
    };

    return (
        <>
            {isLoadedById && isLoadedAllCategories ? (
                Object.keys(itemById).length ? (
                    <>
                        <Helmet>
                            <title>
                                {itemById.name} {itemById.surname} -
                                HobJob
                            </title>
                        </Helmet>
                        <section className="master-card">
                            <div className="container">
                                <div className="master-card-wrapper">
                                    <MasterCardInfo {...itemById} />

                                    {itemById.courses &&
                                    itemById.courses.length ? (
                                        <div className="master-card-courses">
                                            <h2 className="title__mb master-card-course__title">
                                                Курсы
                                            </h2>
                                            <div className="master-card-courses-block-wrapper">
                                                {itemById.courses.map(
                                                    (item, index) => (
                                                        <ShopBlock
                                                            {...item}
                                                            key={`shop-master-card-block-${index}`}
                                                            master={itemById}
                                                            category={
                                                                categories[
                                                                    item
                                                                        .category
                                                                ]
                                                            }
                                                            onClickAddCourse={
                                                                onClickAddCourse
                                                            }
                                                            onClickHiddenCourse={
                                                                onClickHiddenCourse
                                                            }
                                                            isAdd={
                                                                userInfo.courses &&
                                                                userInfo
                                                                    .courses[
                                                                    item._id
                                                                ]
                                                                    ? true
                                                                    : false
                                                            }
                                                            isLogin={
                                                                localStorage.getItem(
                                                                    "accessToken"
                                                                ) &&
                                                                isLoadedUserInfo
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                            <div className="master-card-courses-btn">
                                                <a
                                                    href={`/course?masters=${itemById._id}`}
                                                    className="btn__gray master-card-courses__btn"
                                                >
                                                    Показать еще
                                                </a>
                                            </div>
                                        </div>
                                    ) : null}

                                    {itemById.posts && itemById.posts.length ? (
                                        <div className="master-card-magazine">
                                            <h2 className="title__mb master-card-magazine__title">
                                                Последние посты мастера
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
                                                                    .posts[0]
                                                                    .views
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

                                            <div className="master-card-magazine-btn">
                                                <Link
                                                    to="/magazine"
                                                    className="btn__gray master-card-magazine__btn"
                                                >
                                                    Показать еще
                                                </Link>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    (window.location.href = "/")
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

export default MasterCard;
