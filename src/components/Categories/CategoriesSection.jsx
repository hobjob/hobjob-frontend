import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchCategories} from "../../redux/actions/categories";

import {CategoriesItem, CategoriesItemLoader} from "../";

const CategoriesSection = () => {
    const dispatch = useDispatch();

    const {items, isLoadedAllCategories} = useSelector(
        ({categories}) => categories
    );
    const courses = useSelector(({courses}) => courses.itemsSection);

    React.useEffect(() => {
        if (!Object.keys(items).length) {
            dispatch(fetchCategories());
        }
    }, []);

    //склонение ["курс", "курса", "курсов"]
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
        <section className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <h2 className="title__mb categories__title">
                        Чему мы учим
                    </h2>

                    <div className="categories-items-wrapper">
                        {isLoadedAllCategories
                            ? Object.keys(items).map((key, index) => (
                                  <CategoriesItem
                                      {...items[key]}
                                      key={`categories-items-${index}`}
                                      checkDeclension={checkDeclension(
                                          courses.filter(
                                              (keyGoods) =>
                                                  keyGoods.category.key ===
                                                  items[key].category
                                          ).length,
                                          ["курс", "курса", "курсов"]
                                      )}
                                  />
                              ))
                            : Array(6)
                                  .fill(0)
                                  .map((_, index) => (
                                      <CategoriesItemLoader
                                          key={`categories-item-loader-${index}`}
                                      />
                                  ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
