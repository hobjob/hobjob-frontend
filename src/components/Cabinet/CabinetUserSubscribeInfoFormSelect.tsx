import React from "react";

import {rates} from "../../subscribeRates";

interface CabinetUserSubscribeInfoFormSelectProps {
    changeNextTypeSubscribe: (value: string) => void;
    nextTypeSubscribe: string;
}

const CabinetUserSubscribeInfoFormSelect: React.FC<
    CabinetUserSubscribeInfoFormSelectProps
> = ({changeNextTypeSubscribe, nextTypeSubscribe}) => {
    return (
        <form className="cabinet-block-subscribe-item-select">
            <div className="select">
                <label className="select__label">
                    После окончания текущей подписки, спишем этот тариф
                </label>
                <select
                    name="nextTypeSubscribe"
                    onChange={(e) => changeNextTypeSubscribe(e.target.value)}
                    className="select__field"
                    defaultValue={nextTypeSubscribe}
                >
                    {Object.keys(rates).map((key, index) => (
                        <option
                            value={rates[key].type}
                            className="select__option"
                            key={`select__option-${index}`}
                        >
                            {rates[key].subtitle}{" "}
                            за {rates[key].fullPrice}₽
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default CabinetUserSubscribeInfoFormSelect;
