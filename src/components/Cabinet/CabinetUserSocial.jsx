import React from "react";
import VK from "vk-openapi";
import {useDispatch, useSelector} from "react-redux";
import {FacebookProvider, LoginButton} from "react-facebook";

import {fetchUpdateUser} from "../../redux/actions/user";

const CabinetUserSocial = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(({user}) => user);

    const bindVk = () => {
        VK.init({apiId: process.env.REACT_APP_VK_APP_ID});

        VK.Auth.login(({session}) => {
            if (session) {
                dispatch(fetchUpdateUser({vk: session.user}));
            } else {
                window.location.reload();
            }
        });
    };

    const handleResponse = ({profile}) => {
        dispatch(
            fetchUpdateUser({
                facebook: profile,
            })
        );
    };

    const handleError = (error) => {
        console.log(error);
    };

    const toUntieVk = () => {
        dispatch(fetchUpdateUser({vk: {}}));
    };

    const toUntieFacebook = () => {
        dispatch(fetchUpdateUser({facebook: {}}));
    };

    return (
        <div className="cabinet-block-form">
            <div className="cabinet-block-social-item">
                <div className="cabinet-block-social-item-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        width="35"
                        height="35"
                    >
                        <path
                            fill="#2787F5"
                            fillRule="evenodd"
                            d="M1.123 1.123C0 2.246 0 4.053 0 7.667v.666c0 3.614 0 5.421 1.123 6.544C2.246 16 4.053 16 7.667 16h.666c3.614 0 5.421 0 6.544-1.123C16 13.754 16 11.947 16 8.333v-.666c0-3.614 0-5.421-1.123-6.544C13.754 0 11.947 0 8.333 0h-.666C4.053 0 2.246 0 1.123 1.123zM3.168 5h1.167c.298 0 .41.13.522.454.57 1.662 1.533 3.114 1.929 3.114.148 0 .216-.068.216-.445V6.405c-.027-.489-.198-.7-.324-.857-.078-.097-.14-.172-.14-.28 0-.13.112-.268.297-.268H8.67c.247 0 .333.132.333.429V7.74c0 .247.108.334.182.334.148 0 .272-.087.544-.359.84-.939 1.434-2.385 1.434-2.385A.504.504 0 0111.67 5h1.167c.353 0 .427.182.353.429-.149.68-1.57 2.682-1.57 2.682-.124.198-.174.297 0 .52.06.084.19.212.34.357.152.15.325.32.463.483.501.563.879 1.039.984 1.367.096.329-.07.495-.404.495h-1.167c-.312 0-.47-.175-.81-.553-.144-.16-.32-.357-.556-.593-.693-.667-.99-.754-1.162-.754-.235 0-.306.067-.306.4v1.047c0 .287-.091.453-.833.453-1.236 0-2.595-.75-3.56-2.134-1.446-2.027-1.841-3.56-1.841-3.87 0-.172.066-.329.4-.329z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <p className="cabinet-block-social-item-icon__text">
                        Вконтакте
                    </p>
                </div>
                {user.vk.id === "" ? (
                    <button
                        className="btn-small-round cabinet-block-social-item__btn"
                        onClick={bindVk}
                    >
                        Привязать
                    </button>
                ) : (
                    <div className="cabinet-block-social-item-info">
                        <p className="cabinet-block-social-item-info__text">
                            {user.vk.domain ? (
                                <>
                                    {user.vk.domain}{" "}
                                    <span>(id{user.vk.id})</span>
                                </>
                            ) : (
                                <>id{user.vk.id}</>
                            )}
                        </p>
                        <div
                            className="cabinet-block-social-item-info-icon"
                            onClick={toUntieVk}
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 0.883783L14.1162 0L7.5 6.61621L0.883783 0L0 0.883783L6.61621 7.5L0 14.1162L0.883783 15L7.5 8.38378L14.1162 15L15 14.1162L8.38378 7.5L15 0.883783Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
            <div className="cabinet-block-social-item">
                <div className="cabinet-block-social-item-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        width="35"
                        height="35"
                    >
                        <path
                            fill="#1877F2"
                            d="M16 8.049C16 3.604 12.418 0 8 0S0 3.604 0 8.049C0 12.066 2.925 15.396 6.75 16v-5.624H4.719V8.049H6.75V6.276c0-2.018 1.194-3.132 3.022-3.132.875 0 1.79.157 1.79.157v1.981h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.327H9.25V16c3.825-.604 6.75-3.934 6.75-7.951z"
                        ></path>
                    </svg>
                    <p className="cabinet-block-social-item-icon__text">
                        Facebook
                    </p>
                </div>
                {/* <button className="btn-small-round cabinet-block-social-item__btn">
                    Привязать
                </button> */}
                {user.facebook.id === "" ? (
                    <FacebookProvider
                        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    >
                        <LoginButton
                            scope="email"
                            onCompleted={handleResponse}
                            onError={handleError}
                            className="btn-small-round cabinet-block-social-item__btn"
                        >
                            Привязать
                        </LoginButton>
                    </FacebookProvider>
                ) : (
                    <div className="cabinet-block-social-item-info">
                        <p className="cabinet-block-social-item-info__text">
                            {user.facebook.name}{" "}
                            <span>(id{user.facebook.id})</span>
                        </p>
                        <div
                            className="cabinet-block-social-item-info-icon"
                            onClick={toUntieFacebook}
                        >
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 0.883783L14.1162 0L7.5 6.61621L0.883783 0L0 0.883783L6.61621 7.5L0 14.1162L0.883783 15L7.5 8.38378L14.1162 15L15 14.1162L8.38378 7.5L15 0.883783Z"
                                    fill="black"
                                />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CabinetUserSocial;
