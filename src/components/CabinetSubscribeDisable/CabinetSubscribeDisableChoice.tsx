import React from "react";
import {useDispatch} from "react-redux";
import moment from "moment";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {checkDeclension} from "../../functions/checkDeclension";

import {CabinetSubscribeDisabledActionTypes, CabinetSubscribeDisabledSection} from "../../redux/types/cabinetSubscribeDisabled/ICabinetSubscribeDisabled";
import {changeCabinetSubscribeDisabledCurrentSection} from "../../redux/actions/cabinetSubscribeDisabled";

import CabinetSubscribeDisableChoiceBlockImage from "../../assets/images/cabinet-subscribe-disable-choice-block-image.jpg";

const CabinetSubscribeDisableChoice: React.FC = () => {
    const dispatch = useDispatch();

    const [daysSubscribe, setDaysSubscribe] = React.useState(0);

    const {
        userInfo: {subscribe},
        isLoadedUserInfo,
    } = useTypedSelector(({user}) => user);

    const {isCloseAnimation} = useTypedSelector(
        ({cabinetSubscribeDisabled}) => cabinetSubscribeDisabled
    );

    React.useEffect(() => {
        if (isLoadedUserInfo) {
            var a = moment();
            var b = moment(
                subscribe.registrationSubscribe,
                "DD.MM.YYYY, HH:mm"
            ).add(subscribe.periodInfo.count, subscribe.periodInfo.title);

            setDaysSubscribe(b.diff(a, "days"));
        }
    }, [isLoadedUserInfo]);

    return (
        <div
            className={`cabinet-subscribe-disable-choice-block ${
                isCloseAnimation ? "close" : ""
            }`}
        >
            <div className="cabinet-subscribe-disable-choice-block-text">
                <h2 className="cabinet-subscribe-disable-choice-block-text__title">
                    Вы хотите потерять доступ ко всем курсам HobJob?
                </h2>
                <p className="cabinet-subscribe-disable-choice-block-text__description">
                    Отменив подписку, вы потеряете доступ ко всем курсам через{" "}
                    {daysSubscribe}{" "}
                    {
                        checkDeclension(daysSubscribe, ["день", "дня", "дней"])
                            .text
                    }
                </p>

                <div className="cabinet-subscribe-disable-choice-block-text-btn">
                    <button className="btn-small-round cabinet-subscribe-disable-choice-block-text-btn__btn">
                        Продолжить обучение
                    </button>

                    <button
                        className="btn-small-round-regular cabinet-subscribe-disable-choice-block-text-btn__btn"
                        onClick={() => dispatch(changeCabinetSubscribeDisabledCurrentSection(CabinetSubscribeDisabledSection.SALE_SUBSCRIBE))}
                    >
                        Отменить подписку
                    </button>
                </div>
            </div>

            <img
                src={CabinetSubscribeDisableChoiceBlockImage}
                alt=""
                className="cabinet-subscribe-disable-choice-block__image"
            />
        </div>
    );
};

export default CabinetSubscribeDisableChoice;
