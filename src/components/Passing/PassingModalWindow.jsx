import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import NumberFormat from "react-number-format";

import {ModalWindow} from "../../components/";

const PassingModalWindow = ({
    closeModalBuyWindow,
    image,
    masterId,
    master,
    title,
    description,
    discountNotPrice,
    price,
    percentSale,
    buyFullAccess,
    dateCreate,
    pro,
}) => {
    const [daysSale, setDaysSale] = React.useState();
    const [hoursSale, setHoursSale] = React.useState();
    const [minutesSale, setMinutesSale] = React.useState();
    const [secondsSale, setSecondsSale] = React.useState();

    const [sale, setSale] = React.useState(false);

    React.useEffect(() => {
        if (
            moment(dateCreate, "DD.MM.YYYY, HH:mm").isAfter(
                moment().subtract(6, "hours")
            ) &&
            percentSale !== 0
        ) {
            function updateTimer() {
                const future = Date.parse(
                    moment(dateCreate, "DD.MM.YYYY, HH:mm")
                        .add(6, "hours")
                        .locale("en")
                        .format("MMMM D, YYYY HH:mm:ss")
                );
                const now = new Date();
                const diff = future - now;

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const mins = Math.floor(diff / (1000 * 60));
                const secs = Math.floor(diff / 1000);

                setDaysSale(days);
                setHoursSale(hours - days * 24);
                setMinutesSale(mins - hours * 60);
                setSecondsSale(secs - mins * 60);

                if (
                    secs - mins * 60 === 0 &&
                    mins - hours * 60 === 0 &&
                    hours - days * 24 === 0 &&
                    days === 0
                ) {
                    setSale(false);
                    window.location.reload();
                } else {
                    setSale(true);
                }
            }

            updateTimer();

            setInterval(updateTimer, 1000);
        }
    }, []);

    return (
        <ModalWindow closeFunc={closeModalBuyWindow}>
            <div className="passing-modal-buy-window">
                <div
                    className="passing-modal-buy-window-image"
                    style={{
                        backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                    }}
                ></div>
                <div className="passing-modal-buy-window-text">
                    <Link
                        to={`/master/${masterId}`}
                        className="passing-modal-buy-window-text__master"
                    >
                        {master.name} {master.surname}
                    </Link>
                    <h3 className="passing-modal-buy-window-text__title">
                        {title}
                    </h3>
                    <p className="passing-modal-buy-window-text__description">
                        {description}
                    </p>

                    {sale ? (
                        <div className="passing-modal-buy-window-text-timer-wrapper">
                            <p className="passing-modal-buy-window-text-timer__subtitle">
                                До конца скидки
                            </p>
                            <div className="passing-modal-buy-window-text-timer">
                                <div className="passing-modal-buy-window-text-timer-item">
                                    <h4 className="passing-modal-buy-window-text-timer-item__title">
                                        {daysSale}
                                    </h4>
                                    <p className="passing-modal-buy-window-text-timer-item__subtitle">
                                        дней
                                    </p>
                                </div>
                                <div className="passing-modal-buy-window-text-timer-item">
                                    <h4 className="passing-modal-buy-window-text-timer-item__title">
                                        {hoursSale}
                                    </h4>
                                    <p className="passing-modal-buy-window-text-timer-item__subtitle">
                                        часов
                                    </p>
                                </div>
                                <div className="passing-modal-buy-window-text-timer-item">
                                    <h4 className="passing-modal-buy-window-text-timer-item__title">
                                        {minutesSale}
                                    </h4>
                                    <p className="passing-modal-buy-window-text-timer-item__subtitle">
                                        минут
                                    </p>
                                </div>
                                <div className="passing-modal-buy-window-text-timer-item">
                                    <h4 className="passing-modal-buy-window-text-timer-item__title">
                                        {secondsSale}
                                    </h4>
                                    <p className="passing-modal-buy-window-text-timer-item__subtitle">
                                        секунд
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    <div className="passing-modal-buy-window-text-price">
                        {sale ? (
                            <p className="passing-modal-buy-window-text-price__subprice">
                                <NumberFormat
                                    value={discountNotPrice}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />
                                ₽
                            </p>
                        ) : pro ? (
                            <p className="passing-modal-buy-window-text-price__subprice">
                                <NumberFormat
                                    value={discountNotPrice}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />
                                ₽
                            </p>
                        ) : null}
                        <p className="passing-modal-buy-window-text-price__price">
                            {sale ? (
                                pro ? (
                                    <NumberFormat
                                        value={
                                            price -
                                            (price / 100) *
                                                process.env
                                                    .REACT_APP_PAYMENT_PERCENT_PRO
                                        }
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                ) : (
                                    <NumberFormat
                                        value={price}
                                        displayType={"text"}
                                        thousandSeparator={" "}
                                        renderText={(value) => value}
                                    />
                                )
                            ) : pro ? (
                                <NumberFormat
                                    value={
                                        discountNotPrice -
                                        (discountNotPrice / 100) *
                                            process.env
                                                .REACT_APP_PAYMENT_PERCENT_PRO
                                    }
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />
                            ) : (
                                <NumberFormat
                                    value={discountNotPrice}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(value) => value}
                                />
                            )}
                            ₽
                        </p>
                    </div>

                    <div className="passing-modal-buy-window-text-btn">
                        <button
                            className="btn passing-modal-buy-window-text-btn__btn"
                            onClick={buyFullAccess}
                        >
                            Купить полный доступ
                        </button>
                    </div>
                </div>
            </div>
        </ModalWindow>
    );
};

export default PassingModalWindow;
