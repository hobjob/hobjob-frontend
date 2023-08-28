import React from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { sendLogout } from "../../redux/actions/logout";

import { HeaderUser, HeaderModalMenu } from "../";

import Logo from "../../assets/images/logo.svg";

const Header: React.FC = () => {
	const { pathname } = useLocation();

	const dispatch = useDispatch();

	const { userInfo, isLoadedUserInfo } = useTypedSelector(({ user }) => user);

	const [modalMenuState, setModalMenuState] = React.useState<boolean>(false);
	const [stateGlobalHeader, setStateGlobalHeader] = React.useState<boolean>(true);

	const [prevScrollpos, setPrevScrollpos] = React.useState<number>(0);
	const [currentScrollPos, setCurrentScrollPos] = React.useState<number>(0);

	const HeaderModalMenuRef = React.useRef<HTMLDivElement>(null);
	const HeaderModalBtnRef = React.useRef<any>(null);

	React.useEffect(() => {
		document.addEventListener("mousedown", handHeaderModalMenu);
		document.addEventListener("touchstart", handHeaderModalMenu);

		return () => {
			document.removeEventListener("mousedown", handHeaderModalMenu);
			document.removeEventListener("touchstart", handHeaderModalMenu);
		};
	}, []);

	const openModalMenu = () => {
		setModalMenuState(true);
	};

	const closeModalMenu = () => {
		setModalMenuState(false);
	};

	const onClickLogout = () => {
		dispatch(sendLogout());
	};

	const handHeaderModalMenu = (e: any) => {
		if (HeaderModalMenuRef.current && !HeaderModalMenuRef.current.contains(e.target) && !HeaderModalBtnRef.current.contains(e.target)) {
			closeModalMenu();
		}
	};

	React.useEffect(() => {
		setModalMenuState(false);
	}, [pathname, stateGlobalHeader])

	React.useEffect(() => {
		const wrapper = document.getElementById("wrapper");

		if (wrapper) {
			setPrevScrollpos(window.pageYOffset);

			document.body.onscroll = function () {
				setCurrentScrollPos(window.pageYOffset);

				if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
					setStateGlobalHeader(true);
				} else if (currentScrollPos > 200) {
					setStateGlobalHeader(false);
				}

				setPrevScrollpos(currentScrollPos);
			};
		}
	}, [currentScrollPos]);

	return (

		<header className={`header ${stateGlobalHeader ? "active" : ""} `}>
			<div className="header-wrapper">
				<div className="header-block">
					<Link to="/" className="header-block-logo__link">
						<img
							src={Logo}
							alt="HobJob"
							className="header-block-logo__img"
						/>
					</Link>

					<nav className="header-block-nav">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`header-block-nav__link ${isActive ? "active" : ""}`
							}
						>
							Главная
						</NavLink>
						<NavLink
							to="/course"
							className={({ isActive }) =>
								`header-block-nav__link ${isActive ? "active" : ""}`
							}
						>
							Курсы
						</NavLink>
						<NavLink
							to="/magazine"
							className={({ isActive }) =>
								`header-block-nav__link ${isActive ? "active" : ""}`
							}
						>
							Журнал
						</NavLink>

						<a
							href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
							className="header-block-nav__link bg"
						>
							Выложить курс
						</a>
					</nav>
				</div>

				<div className="header-block">
					{isLoadedUserInfo ?
						<>
							<NavLink
								to="/go/training"
								className={({ isActive }) =>
									`btn header-block__link ${isActive ? "active" : ""
									}`
								}
							>
								Мое обучение

								<svg
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M13.7438 10.7548H11.9374L11.9539 3.94334L2.16769 13.7296L0.891588 12.4535L10.6778 2.66723L3.86641 2.6838V0.877366H13.7438V10.7548Z" />
								</svg>
							</NavLink>

							{document.documentElement.clientWidth > 1000 ?
								<HeaderUser
									stateGlobalHeader={stateGlobalHeader}
									avatar={`${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar.size_512}`}
									onClickLogout={onClickLogout}
								/>
								:
								null
							}
						</>
						:
						<Link to="/go/login" className="btn header-block__link">
							Войти

							<svg
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M13.7438 10.7548H11.9374L11.9539 3.94334L2.16769 13.7296L0.891588 12.4535L10.6778 2.66723L3.86641 2.6838V0.877366H13.7438V10.7548Z" />
							</svg>
						</Link>
					}

					<button
						className="header-modal-menu__btn hover-scale"
						onClick={openModalMenu}
						ref={HeaderModalBtnRef}
					>
						Меню
					</button>

					<HeaderModalMenu
						state={modalMenuState}
						HeaderModalMenuRef={HeaderModalMenuRef}
						isLogin={isLoadedUserInfo}
						avatar={`${process.env.REACT_APP_IMAGE_DOMEN}/${userInfo.avatar.size_512}`}
						onClickLogout={onClickLogout}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
