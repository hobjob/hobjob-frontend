import React from "react";
import { useDispatch } from "react-redux";
import {
	Route,
	Routes,
	Navigate,
	useLocation,
	useSearchParams,
} from "react-router-dom";
import { compose } from "redux";
import "moment/locale/ru";
import moment from "moment";

import { useTypedSelector } from "./hooks/useTypedSelector";

import { fetchUserInfo } from "./redux/actions/user";
import { fetchMasters } from "./redux/actions/masters";
import { fetchCategories } from "./redux/actions/categories";

import { SubscribeMessageTesting, Header, Footer } from "./components/";

import {
	Home,
	Courses,
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
	PaymentCourse,
	PaymentSubscribe,
	PaymentStatus,
	PaymentError,
	Policy,
	PublicOffer,
	ReferralsPolicy,
	EngineeringWorks,
	CabinetSubscribeDisable,
} from "./pages/";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
		YooMoneyCheckoutWidget?: any;
		_tmr?: any;
		ym: any
		Playerjs: any
	}
}

const App: React.FC = () => {
	const dispatch = useDispatch();

	const [search] = useSearchParams();
	const { pathname } = useLocation();

	const { userInfo } = useTypedSelector(({ user }) => user);
	const masters = useTypedSelector(({ masters }) => masters.items);
	const categories = useTypedSelector(({ categories }) => categories.items);

	React.useEffect(() => {
		const ref = search.get("ref");

		if (ref) {
			localStorage.setItem(
				"ref",
				JSON.stringify({
					ref,
					date: moment().format("DD.MM.YYYY, HH:mm"),
				})
			);
		}

		let cords: any = ["scrollX", "scrollY"];

		// Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
		window.addEventListener("unload", (e) =>
			cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
		);

		// Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
		window.scroll(...cords.map((cord: any) => localStorage[cord]));

		if (userInfo._id == "" && localStorage.getItem("accessToken")) {
			dispatch(fetchUserInfo() as any);
		}

		if (!Object.keys(masters).length) {
			dispatch(fetchMasters() as any);
		}

		if (!Object.keys(categories).length) {
			dispatch(fetchCategories() as any);
		}

		// console.log(
		// 	`%cПривет! Мы всегда рады хорошим разработчикам в нашу IT команду HobJob - https://t.me/nagibinarseniy`,
		// 	"font-size: 14px; border: 2px solid #fff; color: #fff; padding:5px 10px; border-radius:10px;"
		// )

		// @ts-ignore
		// console.image(
		// 	`https://sun9-77.userapi.com/impg/0-jlkv1WXM4zse8zyFVCkKJlmMOvawSJRtuXFw/enc7-oQ9AFE.jpg?size=2048x1536&quality=95&sign=4bcf874f6062acf0c65b309c0b383d33&type=album`
		// )
	}, []);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			{false ? (
				<EngineeringWorks />
			) : (
				<div className="wrapper" id="wrapper">
					{pathname.indexOf("/go/training") !== -1 ||
						pathname.indexOf("/payment") !== -1 ||
						pathname.indexOf("/login") !== -1 ||
						pathname.indexOf("/register") !== -1 ||
						pathname === "/go/password-recovery" ||
						pathname.indexOf("/go/password-recovery") !== -1 ||
						pathname.indexOf("/go/cabinet/subscribe/disable") !==
						-1 ? null : userInfo.subscribe.working ||
							userInfo.subscribe.type === "" ? null : userInfo.subscribe
								.isPassingTesting ? null : (
						<SubscribeMessageTesting />
					)}

					{pathname.indexOf("/payment") !== -1 ||
						pathname.indexOf("/login") !== -1 ||
						pathname.indexOf("/register") !== -1 ||
						pathname === "/go/password-recovery" ||
						pathname.indexOf("/go/password-recovery") !== -1 ||
						pathname.indexOf("/go/cabinet/subscribe/disable") !== -1 ||
						pathname.indexOf("/go/passing") !== -1 ? null : (
						<Header />
					)}

					<React.Suspense fallback={<></>}>
						<Routes>
							<Route path="/" element={<Home />} />

							<Route path="/course" element={<Courses />} />

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
								path="/payment/course/:number"
								element={<PaymentCourse />}
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

							<Route path="/go/login" element={<Login />} />

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
						pathname.indexOf("/go/password-recovery") !== -1 ||
						pathname.indexOf("/go/cabinet/subscribe/disable") !==
						-1 ? null : (
						<Footer />
					)}
				</div>
			)}
		</>
	);
};

export default App;
