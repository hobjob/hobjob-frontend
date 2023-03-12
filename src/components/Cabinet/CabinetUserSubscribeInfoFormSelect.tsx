import React from "react";

import {rates} from "../../subscribeRates";

interface CabinetUserSubscribeInfoFormSelectProps {
    changeTypeSubscribe: (value: string) => void;
    typeSubscribe: string;
}

const CabinetUserSubscribeInfoFormSelect: React.FC<
    CabinetUserSubscribeInfoFormSelectProps
> = ({changeTypeSubscribe, typeSubscribe}) => {
    return (
        <form className="cabinet-block-subscribe-item-select">
            <div className="select">
                <label className="select__label">
                    После окончания текущей подписки, спишем этот тариф
                </label>
                <select
                    name="nextTypeSubscribe"
                    onChange={(e) => changeTypeSubscribe(e.target.value)}
                    className="select__field"
                    defaultValue={typeSubscribe}
                >
                    {Object.keys(rates).map((key, index) => (
                        <option
                            value={rates[key].type}
                            className="select__option"
                            key={`select__option-${index}`}
                        >
                            {rates[key].subtitle} за {rates[key].fullPrice}₽
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default CabinetUserSubscribeInfoFormSelect;
