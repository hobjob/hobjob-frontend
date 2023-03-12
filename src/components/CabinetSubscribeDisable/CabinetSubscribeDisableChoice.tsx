import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {checkDeclension} from "../../functions/checkDeclension";

import {CabinetSubscribeDisableSection} from "../../redux/types/cabinetSubscribeDisable/ICabinetSubscribeDisable";
import {changeCabinetSubscribeDisableCurrentSection} from "../../redux/actions/cabinetSubscribeDisable";
import {fetchUpdateUser} from "../../redux/actions/user";

const CabinetSubscribeDisableChoice: React.FC = () => {
    const dispatch = useDispatch();

    const [daysSubscribe, setDaysSubscribe] = React.useState(0);

    const {
        userInfo: {subscribe},
        isLoadedUserInfo,
    } = useTypedSelector(({user}) => user);

    const {isCloseAnimation} = useTypedSelector(
        ({cabinetSubscribeDisable}) => cabinetSubscribeDisable
    );

    React.useEffect(() => {
        if (isLoadedUserInfo) {
            var a = moment();
            var b = moment(subscribe.registration, "DD.MM.YYYY, HH:mm").add(
                subscribe.periodInfo.count,
                subscribe.periodInfo.title
            );

            setDaysSubscribe(b.diff(a, "days"));
        }
    }, [isLoadedUserInfo]);

    const onClickDisableSubscribe = () => {
        if (
           ( subscribe.saveOffers.isUsedFree &&
            subscribe.saveOffers.isUsedSale) || subscribe.type !== "month"
        ) {
            dispatch(fetchUpdateUser({autoPayment: false}));

            dispatch(
                changeCabinetSubscribeDisableCurrentSection(
                    CabinetSubscribeDisableSection.SUCCESS_DISABLED
                )
            );
        } else if (subscribe.saveOffers.isUsedSale) {
            dispatch(
                changeCabinetSubscribeDisableCurrentSection(
                    CabinetSubscribeDisableSection.FREE_MONTH_SUBSCRIBE
                )
            );
        } else {
            dispatch(
                changeCabinetSubscribeDisableCurrentSection(
                    CabinetSubscribeDisableSection.SALE_SUBSCRIBE
                )
            );
        }
    };

    return (
        <div
            className={`cabinet-subscribe-disable-block-content-text ${
                isCloseAnimation ? "close" : ""
            }`}
        >
            <h2 className="cabinet-subscribe-disable-block-content-text__title">
                Хотите отменить подписку? Тогда вы потеряете:
            </h2>

            <div className="cabinet-subscribe-disable-block-content-text-list">
                <div className="cabinet-subscribe-disable-block-content-text-list-item">
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#FF4F4F" />
                        <path
                            d="M9.14644 16.9524C10.5019 14.8488 12.2888 12.8922 13.8819 10.8482C14.5761 9.9575 15.5743 8.96356 15.9068 8.00977"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M8.50676 7.69217C10.4599 9.88765 12.1101 12.0785 13.9205 14.2897C14.7094 15.2534 15.5191 16.3918 16.4938 17.3076"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>

                    <p className="cabinet-subscribe-disable-block-content-text-list-item__text">
                        Доступ ко всем курсам и дополнительным материалам через{" "}
                        {daysSubscribe}{" "}
                        {
                            checkDeclension(daysSubscribe, [
                                "день",
                                "дня",
                                "дней",
                            ]).text
                        }
                    </p>
                </div>
                <div className="cabinet-subscribe-disable-block-content-text-list-item">
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#FF4F4F" />
                        <path
                            d="M9.14644 16.9524C10.5019 14.8488 12.2888 12.8922 13.8819 10.8482C14.5761 9.9575 15.5743 8.96356 15.9068 8.00977"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M8.50676 7.69217C10.4599 9.88765 12.1101 12.0785 13.9205 14.2897C14.7094 15.2534 15.5191 16.3918 16.4938 17.3076"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>

                    <p className="cabinet-subscribe-disable-block-content-text-list-item__text">
                        Возможность помогать благотворительному фонду «HobJob
                        Добро»
                    </p>
                </div>
            </div>

            <div className="cabinet-subscribe-disable-block-content-text-btn">
                <Link
                    to="/go/training"
                    className="btn cabinet-subscribe-disable-block-content-text-btn__btn"
                >
                    Продолжить обучение
                </Link>

                <button
                    className="cabinet-subscribe-disable-block-content-text-btn__cancel"
                    onClick={onClickDisableSubscribe}
                >
                    Да, отменить подписку
                </button>
            </div>
        </div>
    );
};

export default CabinetSubscribeDisableChoice;
