import React from 'react'
import { useLocation, NavLink } from "react-router-dom";

interface HeaderUserProps {
	stateGlobalHeader: boolean
	avatar: string
	onClickLogout: () => void
}

const HeaderUser: React.FC<HeaderUserProps> = ({ stateGlobalHeader, avatar, onClickLogout }) => {
	const { pathname } = useLocation();

	const [stateMenu, setStateMenu] = React.useState<boolean>(false);

	const HeaderUserMenuRef = React.useRef<HTMLDivElement>(null);
	const HeaderUserButtonRef = React.useRef<any>(null);

	React.useEffect(() => {
		document.addEventListener("mousedown", handHeaderUserMenu);
		document.addEventListener("touchstart", handHeaderUserMenu);

		return () => {
			document.removeEventListener("mousedown", handHeaderUserMenu);
			document.removeEventListener("touchstart", handHeaderUserMenu);
		};
	}, []);

	React.useEffect(() => {
		setStateMenu(false);
	}, [pathname, stateGlobalHeader])

	const openUserMenu = () => {
		setStateMenu(true);
	};

	const closeUserMenu = () => {
		setStateMenu(false);
	};

	const handHeaderUserMenu = (e: any) => {
		if (HeaderUserMenuRef.current && !HeaderUserMenuRef.current.contains(e.target) && !HeaderUserButtonRef.current.contains(e.target)) {
			closeUserMenu();
		}
	};

	return (
		<div className="header-block-user">
			<div
				className="header-block-user-avatar"
				style={{
					backgroundImage: `url("${avatar}")`,
				}}
				ref={HeaderUserButtonRef}
				onClick={openUserMenu}
			></div>

			<div className={`header-block-user-menu ${stateMenu ? "active" : ""}`} ref={HeaderUserMenuRef}>
				<NavLink
					to="/go/training"
					className="header-block-user-menu__link"
				>
					Мое обучение
				</NavLink>

				<NavLink
					to="/go/cabinet"
					className="header-block-user-menu__link"
				>
					Мой профиль
				</NavLink>

				<NavLink
					to="/go/referrals"
					className="header-block-user-menu__link"
				>
					Пригласи друга
				</NavLink>

				<span
					className="header-block-user-menu__link"
					onClick={onClickLogout}
				>
					Выйти
				</span>
			</div>
		</div>
	)
}

export default HeaderUser