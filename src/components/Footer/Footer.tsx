import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { Dzen, Vk, Youtube, Telegram, Instagram, FooterEmailBlockSupport, FooterEmailBlockHello } from "../";

import Logo from "../../assets/images/logo.svg";

const Footer: React.FC = () => {
	const { items } = useTypedSelector(({ categories }) => categories);

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-block-wrapper">
						<div className="footer-block footer-block-menu-wrapper">
							<Link to="/" className="footer-block-logo">
								<img
									src={Logo}
									alt="HobJob"
									className="footer-block-logo__img"
								/>
							</Link>
							<nav className="footer-block-menu">
								<div className="footer-block-menu-subblock">
									{Object.keys(items).map((key, index) => (
										<a
											href={`/course?categories=${key}`}
											className="footer-block-menu-subblock__link"
											key={`footer-block-menu-subblock__link-${index}`}
										>
											{items[key].title}
										</a>
									))}

									<a
										href="/course"
										className="footer-block-menu-subblock__link"
									>
										Все направления
									</a>
								</div>

								<div className="footer-block-menu-subblock">
									<NavLink
										to="/go/training"
										className={({ isActive }) =>
											`footer-block-menu-subblock__link ${isActive ? "active" : ""
											}`
										}
									>
										Мое обучение
									</NavLink>

									<NavLink
										to="/go/cabinet"
										className={({ isActive }) =>
											`footer-block-menu-subblock__link ${isActive ? "active" : ""
											}`
										}
									>
										Мой профиль
									</NavLink>

									<NavLink
										to="/go/referrals"
										className={({ isActive }) =>
											`footer-block-menu-subblock__link ${isActive ? "active" : ""
											}`
										}
									>
										Реферальная программа
									</NavLink>

									<NavLink
										to="/magazine"
										className={({ isActive }) =>
											`footer-block-menu-subblock__link ${isActive ? "active" : ""
											}`
										}
									>
										Журнал
									</NavLink>

									<a
										href={`${process.env.REACT_APP_DOMEN_MASTERS_SERVICES}`}
										className="footer-block-menu-subblock__link"
									>
										Стать мастером HobJob
									</a>
								</div>
							</nav>

							<div className="footer-block-emails">
								<FooterEmailBlockSupport />

								<FooterEmailBlockHello />
							</div>
						</div>
						<div className="footer-block footer-block-socials-wrapper">
							<div className="footer-block-socials">
								<a
									href={process.env.REACT_APP_SOCIALS_DZEN}
									className="footer-block-socials__link"
								>
									<Dzen />
								</a>

								<a
									href={process.env.REACT_APP_SOCIALS_VK}
									className="footer-block-socials__link"
								>
									<Vk />
								</a>

								<a
									href={process.env.REACT_APP_SOCIALS_YOUTUBE}
									className="footer-block-socials__link"
								>
									<Youtube />
								</a>

								<a
									href={
										process.env.REACT_APP_SOCIALS_TELEGRAM
									}
									className="footer-block-socials__link"
								>
									<Telegram />
								</a>

								<a
									href={process.env.REACT_APP_SOCIALS_INST}
									className="footer-block-socials__link"
								>
									<Instagram />
								</a>
							</div>
						</div>
					</div>

					<div className="footer-block-subinfo">
						<div className="footer-block-subinfo-block">
							<span className="footer-block-subinfo-block__span">
								© HobJob {new Date().getFullYear()}
							</span>
						</div>
						<div className="footer-block-subinfo-block">
							<NavLink
								to="/policy"
								className={({ isActive }) =>
									`footer-block-subinfo-block__link ${isActive ? "active" : ""
									}`
								}
							>
								Политика конфиденциальности
							</NavLink>
							<NavLink
								to="/public-offer"
								className={({ isActive }) =>
									`footer-block-subinfo-block__link ${isActive ? "active" : ""
									}`
								}
							>
								Публичная оферта
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
