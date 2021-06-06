import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchMagazine} from "../redux/actions/magazine";

import {MagazineBlockBig, MagazineBlock} from "../components/";

const Magazine = () => {
    const dispatch = useDispatch();

    const {items} = useSelector(({magazine}) => magazine);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!items.length) {
            dispatch(fetchMagazine());
        }
    }, []);

    return (
        <section className="magazine">
            <div className="container">
                <div className="magazine-wrapper">
					<MagazineBlockBig {...items[0]} />
					
                    <div className="magazine-block-wrapper">
                        {items.map((item, index) =>
                            index !== 0 ? (
                                <MagazineBlock
                                    {...item}
                                    key={`magazine-block-${index}`}
                                />
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Magazine;
