import React from "react";
import moment from "moment";

const CoursePagePriceSubscribeRatesTimer: React.FC = () => {
    let deadline: string = moment().add(1, "days").format("MMMM, DD, YYYY");

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const getTimeUntil = (deadline: string) => {
        const time: any = Date.parse(deadline) - Date.parse(new Date() as any);
        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    React.useEffect(() => {
        getTimeUntil(deadline);
    }, []);

    React.useEffect(() => {
        setInterval(() => getTimeUntil(deadline), 1000);

        return () => getTimeUntil(deadline);
    }, [deadline]);

    return (
        <div className="course-page-price-subscribe-rates-text-timer">
            <div className="course-page-price-subscribe-rates-text-timer-block">
                <h4 className="course-page-price-subscribe-rates-text-timer-block__title">
                    {days}
                </h4>
                <p className="course-page-price-subscribe-rates-text-timer-block__subtitle">
                    дней
                </p>
            </div>

            <div className="course-page-price-subscribe-rates-text-timer-block">
                <h4 className="course-page-price-subscribe-rates-text-timer-block__title">
                    {hours}
                </h4>
                <p className="course-page-price-subscribe-rates-text-timer-block__subtitle">
                    часов
                </p>
            </div>

            <div className="course-page-price-subscribe-rates-text-timer-block">
                <h4 className="course-page-price-subscribe-rates-text-timer-block__title">
                    {minutes}
                </h4>
                <p className="course-page-price-subscribe-rates-text-timer-block__subtitle">
                    минут
                </p>
            </div>

            <div className="course-page-price-subscribe-rates-text-timer-block">
                <h4 className="course-page-price-subscribe-rates-text-timer-block__title">
                    {seconds}
                </h4>
                <p className="course-page-price-subscribe-rates-text-timer-block__subtitle">
                    секунд
                </p>
            </div>
        </div>
    );
};

export default CoursePagePriceSubscribeRatesTimer;
