import React from "react";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    CabinetSubscribeDisableChoice,
    CabinetSubscribeDisableChoiceSaleSubscribe,
} from "../components/";

import {CabinetSubscribeDisabledSection} from "../redux/types/cabinetSubscribeDisabled/ICabinetSubscribeDisabled";

const CabinetSubscribeDisable: React.FC = () => {
    const {currentSection} = useTypedSelector(
        ({cabinetSubscribeDisabled}) => cabinetSubscribeDisabled
    );

    // const changeAutoPayment = () => {
    //     dispatch(fetchUpdateUser({autoPayment: !subscribe.auto}));

    //     history("/go/cabinet#subscribe");
    // };

    return (
        <>
            <Helmet>
                <title>Отменить подписку - HobJob</title>
            </Helmet>

            <section className="cabinet-subscribe-disable">
                <div className="container">
                    <div className="cabinet-subscribe-disable-wrapper">
                        {currentSection ===
                        CabinetSubscribeDisabledSection.MAIN ? (
                            <CabinetSubscribeDisableChoice />
                        ) : null}

                        {currentSection ===
                        CabinetSubscribeDisabledSection.SALE_SUBSCRIBE ? (
                            <CabinetSubscribeDisableChoiceSaleSubscribe />
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CabinetSubscribeDisable;
