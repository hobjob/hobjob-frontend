import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import {useTypedSelector} from "../../hooks/useTypedSelector";

const CabinetSubscribeDisableSuccessDisable: React.FC = () => {
    const {
        userInfo: {subscribe},
    } = useTypedSelector(({user}) => user);

    return (
        <div className="cabinet-subscribe-disable-block-content-text">
                <h2 className="cabinet-subscribe-disable-block-content-text__title">
                    Спасибо, что были с нами!
                </h2>

                <div className="cabinet-subscribe-disable-block-content-text-description">
                    <p className="cabinet-subscribe-disable-block-content-text-description__description">
                        Жаль, что вы решили отменить подписку. Надеемся, мы
                        снова сможем вас заинтересовать интересными курсами!
                    </p>
                    <p className="cabinet-subscribe-disable-block-content-text-description__description">
                        После{" "}
                        <span>
                            {moment(
                                subscribe.registration,
                                "DD.MM.YYYY, HH:mm"
                            )
                                .add(
                                    subscribe.periodInfo.count,
                                    subscribe.periodInfo.title
                                )
                                .format("DD MMMM YYYY, HH:mm")}
                        </span>{" "}
                        у вас не получится смотреть курсы HobJob
                    </p>
                    <p className="cabinet-subscribe-disable-block-content-text-description__description">
                        Вы всегда сможете оформить новую подписку в вашем личном
                        кабинете
                    </p>
                </div>

                <div className="cabinet-subscribe-disable-block-content-text-btn">
                    <Link
                        to="/course"
                        className="btn cabinet-subscribe-disable-block-content-text-btn__btn"
                    >
                        Смотреть курсы
                    </Link>
                </div>
        </div>
    );
};

export default CabinetSubscribeDisableSuccessDisable;
