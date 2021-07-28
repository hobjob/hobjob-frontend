import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {sendCreatePayment} from "../redux/actions/payment";
import {fetchUser} from "../redux/actions/user";

const Payment = () => {
    const dispatch = useDispatch();

    const {user, isLoaded} = useSelector(({user}) => user);
    const {cart} = useSelector(({cart}) => cart);
    const {payment} = useSelector(({payment}) => payment);
    const isLoadedPayment = useSelector(({payment}) => payment.isLoaded);

    React.useEffect(() => {
        if (!Object.keys(user).length) {
            dispatch(fetchUser());
        }
    }, []);

    React.useEffect(() => {
        if (isLoaded) {
            const order = [];

            Object.keys(cart).map((key) => order.push(cart[key]._id));

            dispatch(
                sendCreatePayment({
                    email: user.email,
                    order,
                    refId: "",
                })
            );
        }
    }, [isLoaded]);

    React.useEffect(() => {
        if (isLoadedPayment) {
            const checkout = new window.YooMoneyCheckoutWidget({
                confirmation_token: payment.confirmation_token,
                return_url: `http://localhost:3000/payment/${payment.numberPayment}`,

                customization: {
                    colors: {
                        controlPrimary: "#DD9E5E",
                        background: "#F9F9F9",
                    },
                },
                error_callback: function (error) {
                    console.log(error);
                },
            });

            checkout.render("payment-form");
        }
    }, [isLoadedPayment]);

    return (
        <>
            {isLoadedPayment ? (
                <section className="payment">
                    <div className="container">
                        <div className="payment-wrapper">
                        
                            <div id="payment-form"></div>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default Payment;
