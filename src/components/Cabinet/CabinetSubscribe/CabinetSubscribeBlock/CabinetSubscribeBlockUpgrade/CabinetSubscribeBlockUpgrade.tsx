import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../../../hooks/useTypedSelector";

import {fetchUpdateUser} from "../../../../../redux/actions/user";

import {rates} from "../../../../../subscribeRates";

const CabinetSubscribeBlockUpgrade: React.FC = () => {
    const dispatch = useDispatch();

    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isCloseAnimation, setIsCloseAnimation] = React.useState(false);
    const [isCloseSuccessAnimation, setIsCloseSuccessAnimation] =
        React.useState(false);

    const {
        userInfo: {subscribe},
    } = useTypedSelector(({user}) => user);

    const changeTypeSubscribe = (typeSubscribe: string) => {
        setIsCloseAnimation(true);
        setTimeout(() => {
            setIsSuccess(true);

            dispatch(fetchUpdateUser({typeSubscribe}) as any);

            setTimeout(() => {
                setIsCloseSuccessAnimation(true);

                setTimeout(() => {
                    setIsSuccess(false);
                    setIsCloseAnimation(false);
                    setIsCloseSuccessAnimation(false);
                }, 180);
            }, 1000);
        }, 180);
    };

    return (
        <>
            {isSuccess ? (
                <div className="cabinet-section-content-subscribe-upgrade-success-wrapper">
                    <div
                        className={`cabinet-section-content-subscribe-upgrade-success ${
                            isCloseSuccessAnimation ? "close" : ""
                        }`}
                    >
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="50" cy="50" r="50" fill="#DD9E5E" />
                            <path
                                d="M68.3543 35.0007C67.939 35.0136 67.5449 35.1945 67.2554 35.505L42.8106 60.9791L32.7517 50.4967C32.6044 50.3368 32.428 50.2092 32.2328 50.1212C32.0376 50.0333 31.8275 49.9869 31.6149 49.9846C31.4022 49.9824 31.1912 50.0243 30.9944 50.1081C30.7975 50.1919 30.6186 50.3157 30.4682 50.4725C30.3178 50.6292 30.199 50.8156 30.1186 51.0208C30.0382 51.2259 29.9979 51.4458 30.0001 51.6674C30.0022 51.889 30.0468 52.1079 30.1312 52.3114C30.2156 52.5148 30.338 52.6986 30.4914 52.8521L41.6805 64.5123C41.9802 64.8246 42.3867 65 42.8106 65C43.2345 65 43.641 64.8246 43.9407 64.5123L69.5156 37.8605C69.7466 37.6265 69.9044 37.3253 69.9683 36.9962C70.0321 36.6672 69.9991 36.3258 69.8736 36.0166C69.748 35.7075 69.5358 35.4451 69.2647 35.2638C68.9936 35.0825 68.6763 34.9908 68.3543 35.0007Z"
                                fill="white"
                            />
                        </svg>

                        <p className="cabinet-section-content-subscribe-upgrade-success__title">
                            Ваша подписка изменена
                        </p>
                    </div>
                </div>
            ) : (
                <div
                    className={`cabinet-section-content-subscribe-upgrade ${
                        isCloseAnimation ? "close" : ""
                    }`}
                >
                    <p className="cabinet-section-content-subscribe-upgrade__title">
                        Выбрать другую подписку
                    </p>

                    <div className="cabinet-section-content-subscribe-upgrade-item-wrapper">
                        {Object.keys(rates).map((key, index) =>
                            subscribe.type !== key ? (
                                <div
                                    className="cabinet-section-content-subscribe-upgrade-item"
                                    key={`cabinet-section-content-subscribe-upgrade-item-${index}`}
                                    onClick={() => changeTypeSubscribe(key)}
                                >
                                    {rates[key].sale ? (
                                        <p className="cabinet-section-content-subscribe-upgrade-item__percent">
                                            на {rates[key].sale}% дешевле
                                        </p>
									) : null}
									
                                    <div className="cabinet-section-content-subscribe-upgrade-item-text">
                                        <h5 className="cabinet-section-content-subscribe-upgrade-item-text__title">
                                            <>
                                                {Math.floor(
                                                    rates[key].price -
                                                        (rates[key].price /
                                                            100) *
                                                            rates[key].sale
                                                )}
                                            </>
                                            ₽ в месяц
                                        </h5>
                                        <p className="cabinet-section-content-subscribe-upgrade-item-text__subtitle">
                                            {rates[key].subbtn}
                                        </p>
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default CabinetSubscribeBlockUpgrade;
