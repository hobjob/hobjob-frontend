import React from "react";

interface CabinetUserSubscribeInfoFormSelectProps {
    changeNextTypeSubscribe: (value: string) => void;
    nextTypeSubscribe: string;
}

const CabinetUserSubscribeInfoFormSelect: React.FC<
    CabinetUserSubscribeInfoFormSelectProps
> = ({changeNextTypeSubscribe, nextTypeSubscribe}) => {
    return (
        <form className="cabinet-block-subscribe-info-item-select">
            <div className="select">
                <label className="select__label">
                    Выберите следующую подписку
                </label>
                <select
                    name="nextTypeSubscribe"
                    onChange={(e) => changeNextTypeSubscribe(e.target.value)}
                    className="select__field"
                    defaultValue={nextTypeSubscribe}
                >
                    {[
                        {
                            title: "Месячная подписка (490 ₽ / мес.)",
                            type: "month-subscribe",
                        },
                        {
                            title: "Годовая подписка (3490 ₽ / год)",
                            type: "year-subscribe",
                        },
                    ].map((item, index) =>
                        item.type !== "test-subscribe" ? (
                            <option
                                value={item.type}
                                className="select__option"
                                key={`select__option-${index}`}
                            >
                                {item.title}
                            </option>
                        ) : null
                    )}
                </select>
            </div>
        </form>
    );
};

export default CabinetUserSubscribeInfoFormSelect;
