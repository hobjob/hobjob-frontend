import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {PaymentSubscribeBlock} from "../../components/";

import {subscriptions} from "../../subscriptions";

import {fetchUserInfo} from "../../redux/actions/user";
import {sendCreateSubscribePayment} from "../../redux/actions/payment";

const PaymentSubscribeProlongation = () => {
    const dispatch = useDispatch();

    const {userInfo} = useSelector(({user}) => user);

    const [stateSubscribe, setStateSubscribe] = React.useState({
        index: 1,
        type: "month-subscribe",
    });

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (
            !Object.keys(userInfo).length &&
            localStorage.getItem("accessToken")
        ) {
            dispatch(fetchUserInfo());
        }
    }, []);

    const createPayment = () => {
        return dispatch(
            sendCreateSubscribePayment(
                userInfo.subscribe.working,
                stateSubscribe.type
            )
        );
    };

    const handlerTypeSubscribe = (index, type) => {
        setStateSubscribe({index, type});
    };

    return (
        <div className="payment-prolongation">
            <div className="payment-prolongation-wrapper">
                <div className="payment-prolongation-info">
                    <h2 className="payment-prolongation-info__title">
                        Выберите вашу подписку:
                    </h2>
                    <p className="payment-prolongation-info__description">
                        {userInfo.name}, ваша подписка истекла. Продлите
                        подписку, чтобы пользоваться HobJob
                    </p>
                    <div className="payment-prolongation-info-block-wrapper">
                        {userInfo.subscribe.passedPeriodTesting
                            ? subscriptions.map((item, index) =>
                                  item.type !== "test-subscribe" ? (
                                      <PaymentSubscribeBlock
                                          {...item}
                                          handlerTypeSubscribe={
                                              handlerTypeSubscribe
                                          }
                                          active={
                                              stateSubscribe.index === index
                                                  ? true
                                                  : false
                                          }
                                          index={index}
                                          change={true}
                                          key={`payment-prolongation-info-block-${index}`}
                                      />
                                  ) : null
                              )
                            : subscriptions.map((item, index) => (
                                  <PaymentSubscribeBlock
                                      {...item}
                                      handlerTypeSubscribe={
                                          handlerTypeSubscribe
                                      }
                                      active={
                                          stateSubscribe.index === index
                                              ? true
                                              : false
                                      }
                                      index={index}
                                      change={true}
                                      key={`payment-prolongation-info-block-${index}`}
                                  />
                              ))}
                    </div>

                    <button
                        className="btn payment-prolongation-info__btn"
                        onClick={createPayment}
                    >
                        Продлить подписку
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSubscribeProlongation;
