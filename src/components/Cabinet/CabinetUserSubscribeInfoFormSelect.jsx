import React from "react";

import {subscriptions} from "../../subscriptions";

const CabinetUserSubscribeInfoFormSelect = ({
    changeNextTypeSubscribe,
    nextTypeSubscribe,
}) => {
    return (
        <form className="cabinet-block-subscribe-info-item-select">
            <div className="select">
                <label className="select__label">
                    Выберите следующую подписку
                </label>
                <select
                    name="nextTypeSubscribe"
                    onChange={changeNextTypeSubscribe}
                    className="select__field"
                    defaultValue={nextTypeSubscribe}
                >
                    {subscriptions.map((item, index) =>
                        item.type !== "test-subscribe" ? (
                            <option
                                value={item.type}
                                className="select__option"
                                key={`select__option-${index}`}
                            >
                                {item.title} ({item.description})
                            </option>
                        ) : null
                    )}
                </select>
            </div>
        </form>
    );
};

export default CabinetUserSubscribeInfoFormSelect;
