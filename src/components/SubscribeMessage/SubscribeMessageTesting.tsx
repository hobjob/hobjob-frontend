import React from "react";
import {useDispatch} from "react-redux";

import {sendCreatePaymentSubscribe} from "../../redux/actions/payment/paymentSubscribe";

const SubscribeMessageTesting: React.FC = () => {
    const dispatch = useDispatch();

    const [height, setHeight] = React.useState<number>(0);

    const heightRef = React.useRef<HTMLDivElement>(null);

    const createPayment = () => {
        dispatch(sendCreatePaymentSubscribe("test") as any);
	};
	
	React.useEffect(() => {
        setHeight(heightRef.current ? heightRef.current?.clientHeight : 0);
    }, [heightRef.current]);

    return (
        <div className="subscribe-message-testing-wrapper">
            <div
                className="subscribe-message-testing-fake"
                style={{height: `${height}px`}}
            ></div>

            <div
                className="subscribe-message-testing"
                onClick={createPayment}
                ref={heightRef}
            >
                <p className="subscribe-message-testing__title">
                    Продолжите оформление подписки 30 дней за 1₽
                    <svg
                        viewBox="0 0 683 544"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M547.067 408.001L682.667 272.401L546.667 136.401C471.867 61.6013 410.267 0.267935 409.6 0.00126789C409.067 -0.132065 398.133 10.2679 385.333 23.0679L362 46.4013L457.333 141.735L552.667 237.068L276.267 237.068L-1.52588e-05 237.068V271.735V306.401H276.267L552.667 306.401L457.333 401.735L362 497.068L385.333 520.401C398.133 533.201 409.2 543.735 410 543.735C410.667 543.735 472.4 482.668 547.067 408.001Z" />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default SubscribeMessageTesting;
