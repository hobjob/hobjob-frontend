import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {fetchUpdateUser} from "../../redux/actions/user";

import {CabinetUserSubscribeInfoFormSelect} from "../";

import {rates} from "../../subscribeRates";

const CabinetUserSubscribeInfo: React.FC = () => {
    const dispatch = useDispatch();

    const {
        userInfo: {subscribe, payment},
    } = useTypedSelector(({user}) => user);

    const changeAutoPayment = () => {
        dispatch(fetchUpdateUser({autoPayment: !subscribe.auto}));
    };

    const changeNextTypeSubscribe = (value: string) => {
        dispatch(fetchUpdateUser({nextTypeSubscribe: value}));
    };

    return (
        <div className="cabinet-block-subscribe">
            <CabinetUserSubscribeInfoFormSelect
                changeNextTypeSubscribe={changeNextTypeSubscribe}
                nextTypeSubscribe={subscribe.nextTypeSubscribe}
            />

            <div className="cabinet-block-subscribe-item cabinet-block-subscribe-item-subscribe">
                <h4 className="cabinet-block-subscribe-item__title">
                    Текущая подписка
                </h4>

                {Object.keys(rates).map((key) =>
                    key === subscribe.typeSubscribe ? (
                        <div
                            className="cabinet-block-subscribe-item-subscribe-icon"
                            key={`cabinet-block-subscribe-item-subscribe-icon-${key}`}
                        >
                            <>{rates[key].icon}</>
                        </div>
                    ) : null
                )}
            </div>

            <div className="cabinet-block-subscribe-item cabinet-block-subscribe-item-card">
                <h4 className="cabinet-block-subscribe-item__title">
                    Способ оплаты
                </h4>
                <p className="cabinet-block-subscribe-item__description cabinet-block-subscribe-item-card__description">
                    <svg
                        width="37"
                        height="25"
                        viewBox="0 0 37 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.20909 1.31228C11.0527 1.31228 13.8733 1.28747 16.7008 1.31228C17.9015 1.32281 19.1011 1.42873 20.3001 1.39912C21.3212 1.37391 22.378 1.14193 23.4024 1.05656C24.895 0.932178 26.358 1.05174 27.8557 1.05174C29.699 1.05174 31.5625 1.3027 33.3946 1.39912C33.7452 1.41758 34.0153 1.51178 34.2631 1.74651C34.499 1.97005 34.7919 2.19817 34.9964 2.40268C35.4689 2.8751 35.8263 3.53359 35.8263 4.22646C35.8263 4.73781 36 5.22669 36 5.76075C36 6.29138 35.9902 6.73106 35.8456 7.23714C35.7069 7.72273 35.7395 8.31516 35.7395 8.81968C35.7395 9.47686 35.6526 10.1147 35.6526 10.7689C35.6526 12.6635 35.6526 14.5684 35.6526 16.4236C35.6526 18.0277 35.6269 19.6291 35.5658 21.2194C35.5516 21.5879 35.2696 21.9668 35.1508 22.3098C35.0387 22.6338 34.8985 22.8228 34.6539 23.0673C34.1446 23.5766 32.7945 23.6318 32.1305 23.6318C30.1396 23.6318 28.1857 23.7187 26.1815 23.7187C25.6308 23.7187 25.1197 23.5198 24.5797 23.463C23.7003 23.3704 22.8589 23.2845 21.9695 23.2845C20.646 23.2845 19.3516 23.1108 18.0228 23.1108C16.2859 23.1108 14.5926 23.1273 12.8795 23.352C11.3773 23.549 9.89011 23.545 8.37796 23.545C7.14573 23.545 5.99287 23.1108 4.75453 23.1108C3.87583 23.1108 2.97354 22.9327 2.16843 22.5704C1.85248 22.4282 1.71342 21.9462 1.6956 21.6344C1.65591 20.9398 1.34821 20.2413 1.34821 19.5501C1.34821 18.1022 1.08767 16.6834 1.08767 15.227C1.08767 13.9953 1.00083 12.7552 1.00083 11.5119C1.00083 9.74723 0.971571 7.90963 1.26137 6.17086C1.51404 4.65478 1.80501 2.42532 3.39393 1.70308C4.20829 1.33292 5.32827 1.48597 6.21162 1.48597C6.66878 1.48597 7.48267 1.47812 7.86171 1.22543"
                            stroke="#DD9E5E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M5.69043 19.0291C5.72405 18.7601 7.1473 18.8554 7.38876 18.8554C7.72007 18.8554 8.05137 18.8554 8.38267 18.8554C8.73815 18.8554 9.07988 19.1029 9.44413 19.1159C9.83888 19.13 10.6879 19.2634 11.0315 19.0725C11.4694 18.8293 12.0208 18.9904 12.4645 18.7686"
                            stroke="#DD9E5E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M26.0995 15.0341C26.0675 15.3541 25.7706 15.5693 25.7521 15.9025C25.7271 16.3533 25.8299 16.6869 25.9258 17.1184C26.0273 17.5752 26.0995 17.9502 26.0995 18.4211C26.0995 18.7885 26.0875 19.0322 26.3214 19.333C26.7636 19.9015 27.1592 19.8384 27.8557 19.965C28.1924 20.0263 28.7061 20.0223 29.0089 19.8541C29.2801 19.7034 29.7196 19.8326 29.9883 19.6177C30.093 19.5339 30.2313 19.5167 30.355 19.444C30.5043 19.3561 30.5086 19.1205 30.5721 18.9808C30.898 18.2638 31.0497 17.3154 31.0497 16.5298C31.0497 15.9803 31.1046 15.1275 30.6831 14.706C30.5129 14.5358 29.6178 14.6867 29.3514 14.6867C28.9043 14.6867 28.4572 14.6867 28.0101 14.6867C27.5185 14.6867 26.48 14.2798 26.4469 15.1402C26.4163 15.9357 26.668 16.5462 26.8811 17.2921C27.0119 17.75 27.3431 18.1222 27.4022 18.5948C27.4422 18.9151 28.6282 18.8553 28.8738 18.8553C29.1866 18.8553 29.7097 18.497 29.9207 18.286C30.1879 18.0189 30.2681 17.5651 30.2681 17.2004C30.2681 16.9332 30.1841 16.188 30.0076 15.9894C29.6445 15.5809 29.5068 15.5552 28.9268 15.5552C28.6876 15.5552 28.0991 15.4656 27.9233 15.6854C27.7577 15.8924 27.323 15.7744 27.2092 15.9894C26.7778 16.8043 28.1609 17.4658 28.7917 17.4658C29.2283 17.4658 29.226 16.9654 29.226 16.6407C29.226 16.1949 28.4629 16.5078 28.3382 16.771C28.1261 17.2189 28.2644 17.589 28.6566 17.8132C28.9453 17.9781 28.7049 18.5751 28.7049 18.8553"
                            stroke="#DD9E5E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M1.26147 8.08644C2.73728 8.08644 4.21349 7.86811 5.69065 7.8259C7.28953 7.78022 8.94792 7.65221 10.5541 7.65221C11.4396 7.65221 12.3273 7.71487 13.1981 7.73906C14.1153 7.76453 15.0229 7.97485 15.9385 7.9996C16.7122 8.02051 17.4739 8.08644 18.2448 8.08644C18.9867 8.08644 19.7259 8.26013 20.4546 8.26013C21.6592 8.26013 22.8638 8.26013 24.0684 8.26013C24.5117 8.26013 24.9199 8.2197 25.3566 8.17811C25.7209 8.14341 26.0906 8.00897 26.447 7.9996C27.2274 7.97906 27.9741 8.01416 28.7436 7.89345C30.0171 7.69369 31.3633 7.65221 32.6565 7.65221C33.5144 7.65221 34.3626 7.47852 35.2185 7.47852"
                            stroke="#DD9E5E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>

                    {payment.title}
                </p>
            </div>

            <div className="cabinet-block-subscribe-item">
                <h4 className="cabinet-block-subscribe-item__title">
                    Завершится
                </h4>
                <p className="cabinet-block-subscribe-item__description">
                    {moment(
                        subscribe.registrationSubscribe,
                        "DD.MM.YYYY, HH:mm"
                    )
                        .add(
                            subscribe.periodInfo.count,
                            subscribe.periodInfo.title
                        )
                        .format("DD MMMM YYYY, HH:mm")}
                </p>
            </div>

            <div className="cabinet-block-subscribe-item">
                <h4 className="cabinet-block-subscribe-item__title">
                    Отменить подписку
                </h4>

                {subscribe.auto ? (
                    <Link
                        to="/go/cabinet/subscribe/disable"
                        className="btn-small-round-gray cabinet-block-subscribe-item__btn"
                    >
                        Отменить
                    </Link>
                ) : (
                    <button
                        className="btn-small-round cabinet-block-subscribe-item__btn"
                        onClick={changeAutoPayment}
                    >
                        Включить
                    </button>
                )}
            </div>
        </div>
    );
};

export default CabinetUserSubscribeInfo;
