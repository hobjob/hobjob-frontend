import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {compose} from "redux";

import {Header, Footer} from "./components/";

import {
    Home,
    Shop,
    CoursePage,
    Magazine,
    MagazinePostPage,
    MasterCard,
    Login,
    PasswordRecoveryEmail,
    PasswordRecoveryNewPassword,
    Training,
    PassingCourse,
    Cabinet,
    Referrals,
    Register,
    PaymentSubscribe,
    PaymentStatus,
    PaymentError,
    Policy,
    PublicOffer,
    ReferralsPolicy,
    Regulations,
    EngineeringWorks,
    CabinetSubscribeDisable,
} from "./pages/";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        YooMoneyCheckoutWidget?: any;
    }
}

const App: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <>
            {false ? (
                <EngineeringWorks />
            ) : (
                <div className="wrapper">
                    {pathname.indexOf("/payment") !== -1 ||
                    pathname.indexOf("/login") !== -1 ||
                    pathname.indexOf("/register") !== -1 ||
                    pathname === "/go/password-recovery" ||
                    pathname.indexOf("/go/password-recovery") !== -1 ? null : (
                        <Header />
                    )}

                    <React.Suspense fallback={<></>}>
                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/course" element={<Shop />} />

                            <Route
                                path="/course/:url"
                                element={<CoursePage />}
                            />

                            <Route path="/magazine" element={<Magazine />} />

                            <Route
                                path="/magazine/post/:id"
                                element={<MagazinePostPage />}
                            />

                            <Route
                                path="/master/:id"
                                element={<MasterCard />}
                            />

                            <Route
                                path="/payment/subscribe/:number"
                                element={<PaymentSubscribe />}
                            />

                            <Route
                                path="/payment/status/:number"
                                element={<PaymentStatus />}
                            />

                            <Route
                                path="/payment/error"
                                element={<PaymentError />}
                            />

                            <Route path="/policy" element={<Policy />} />

                            <Route
                                path="/public-offer"
                                element={<PublicOffer />}
                            />
                            <Route
                                path="/regulations"
                                element={<Regulations />}
                            />

                            <Route path="/go/login" element={<Login />} />

                            <Route path="/go/register" element={<Register />} />

                            <Route
                                path="/go/password-recovery"
                                element={<PasswordRecoveryEmail />}
                            />

                            <Route
                                path="/go/password-recovery/:hash"
                                element={<PasswordRecoveryNewPassword />}
                            />

                            <Route path="/go/training" element={<Training />} />

                            <Route
                                path="/go/passing/:id/:num"
                                element={<PassingCourse />}
                            />

                            <Route path="/go/cabinet" element={<Cabinet />} />

                            <Route
                                path="/go/cabinet/subscribe/disable"
                                element={<CabinetSubscribeDisable />}
                            />

                            <Route
                                path="/go/referrals"
                                element={<Referrals />}
                            />

                            <Route
                                path="/go/referrals/policy"
                                element={<ReferralsPolicy />}
                            />

                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </React.Suspense>

                    {pathname.indexOf("/payment") !== -1 ||
                    pathname.indexOf("/login") !== -1 ||
                    pathname.indexOf("/register") !== -1 ||
                    pathname === "/go/password-recovery" ||
                    pathname.indexOf("/go/password-recovery") !== -1 ? null : (
                        <Footer />
                    )}
                </div>
            )}
        </>
    );
};

export default App;
