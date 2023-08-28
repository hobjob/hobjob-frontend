import React from "react";
import { NavLink } from "react-router-dom";

interface HeaderMenuProps {
	state: boolean
	HeaderModalMenuRef: React.RefObject<HTMLDivElement>;
	isLogin: boolean
	avatar: string

	onClickLogout: () => void
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ state, HeaderModalMenuRef, isLogin, avatar, onClickLogout }) => {
	return (
		<div className={`header-modal-menu ${state ? "active" : ""}`} ref={HeaderModalMenuRef}>
			{isLogin ?
				<div className="header-modal-menu-block">
					<NavLink
						to="/go/training"
						className={({ isActive }) =>
							`header-modal-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Мое обучение
					</NavLink>

					<NavLink
						to="/go/cabinet"
						className={({ isActive }) =>
							`header-modal-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Мой профиль <img src={avatar} alt="" />
					</NavLink>

					<NavLink
						to="/go/referrals"
						className={({ isActive }) =>
							`header-modal-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Пригласи друга
					</NavLink>

					<span
						className="header-modal-menu-block__link"
						onClick={onClickLogout}
					>
						Выйти
					</span>
				</div>
				: <div className="header-modal-menu-block">
					<NavLink
						to="/go/login"
						className={({ isActive }) =>
							`header-modal-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Войти
					</NavLink>
				</div>
			}

			<div className="header-modal-menu-block">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`header-modal-menu-block__link ${isActive ? "active" : ""}`
					}
				>
					Главная
				</NavLink>
				<NavLink
					to="/course"
					className={({ isActive }) =>
						`header-modal-menu-block__link ${isActive ? "active" : ""}`
					}
				>
					Курсы
				</NavLink>
				<NavLink
					to="/magazine"
					className={({ isActive }) =>
						`header-modal-menu-block__link ${isActive ? "active" : ""}`
					}
				>
					Журнал
				</NavLink>

				<a
					href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
					className="header-modal-menu-block__link"
				>
					Выложить курс
				</a>
			</div>
		</div>
	);
};

export default HeaderMenu;
