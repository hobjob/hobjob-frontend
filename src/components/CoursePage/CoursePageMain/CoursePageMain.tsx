import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { CourseGood } from "../../../models/Course/ICourseGood";
import { Category } from "../../../models/ICategory";
import { Master } from "../../../models/IMaster";

import { checkDeclension } from "../../../functions/checkDeclension";

interface CoursePageMainProps extends CourseGood {
	categories: { [key: string]: Category };
	master: Master;
	isLogin: boolean;
	isAdd: boolean;
	onClickAddCourse: () => void;
}

const CoursePageMain: React.FC<CoursePageMainProps> = ({
	category,
	title,
	description,
	master,
	categories,
	image,
	lessons,
	materialsCount,
	isLogin,
	isAdd,
	onClickAddCourse,
}) => {
	return (
		<>
			<section className="course-page-main">
				<div className="container">
					<div className="course-page-main-wrapper">
						<div className="course-page-main-text">
							<div className="course-page-main-text-subinfo">
								{categories[category] ? (
									<a
										href={`/course/?categories=${categories[category].transfer}`}
										className="category course-page-main-text-subinfo__category"
									>
										{categories[category].title}
									</a>
								) : null}
							</div>

							<h2 className="course-page-main-text__title">
								{title}
							</h2>

							<p className="course-page-main-text__description">
								{description}
							</p>

							{/* <div className="course-page-main-text-info">
								<p className="course-page-main-text-info__text">
									{checkDeclension(lessons.length, ["урок", "урока", "уроков"]).title}
								</p>

								{materialsCount ? <>
									<p className="course-page-main-text-info__text">
										{checkDeclension(materialsCount, ["материал", "материала", "материалов"]).title}
									</p>
								</> : null}
							</div> */}

							{isLogin && isAdd ? (
								<button className="btn disabled course-page-main-text__btn">
									<svg
										width="14"
										height="13"
										viewBox="0 0 14 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.44632 6.0186C1.79012 6.50143 2.22771 6.89948 2.59784 7.36158C3.55556 8.55726 4.36875 9.86064 5.23006 11.1246C5.25198 11.1568 5.76023 11.8699 5.79835 11.8034C5.96582 11.5113 6.09668 11.1775 6.23676 10.8715C6.66638 9.93305 7.1304 9.0248 7.65259 8.13343C8.54438 6.61116 9.43319 5.0821 10.4156 3.61607C10.8657 2.94443 11.395 2.35225 11.8904 1.71673C12.1063 1.43977 12.3942 1.14453 12.5389 0.82259"
											stroke="#000000"
											strokeWidth="1.3"
											strokeLinecap="round"
										/>
									</svg>
									Добавлен
								</button>
							) : (
								<LinkScroll
									to="price"
									spy={true}
									smooth={true}
									offset={-25}
									duration={1000}
								>
									<button className="btn course-page-main-text__btn">
										Купить курс
									</button>
								</LinkScroll>
							)}

							{/* {isLogin ? (
								isAdd ? (
									<button className="btn disabled course-page-main-text__btn">
										<svg
											width="14"
											height="13"
											viewBox="0 0 14 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M1.44632 6.0186C1.79012 6.50143 2.22771 6.89948 2.59784 7.36158C3.55556 8.55726 4.36875 9.86064 5.23006 11.1246C5.25198 11.1568 5.76023 11.8699 5.79835 11.8034C5.96582 11.5113 6.09668 11.1775 6.23676 10.8715C6.66638 9.93305 7.1304 9.0248 7.65259 8.13343C8.54438 6.61116 9.43319 5.0821 10.4156 3.61607C10.8657 2.94443 11.395 2.35225 11.8904 1.71673C12.1063 1.43977 12.3942 1.14453 12.5389 0.82259"
												stroke="#000000"
												strokeWidth="1.3"
												strokeLinecap="round"
											/>
										</svg>
										Добавлен
									</button>
								) : (
									<button
										className="btn course-page-main-text__btn"
										onClick={onClickAddCourse}
									>
										Добавить в мое обучение
									</button>
								)
							) : (
								<LinkScroll
									to="price"
									spy={true}
									smooth={true}
									offset={-25}
									duration={1000}
								>
									<button className="btn course-page-main-text__btn">
										Начать обучение
									</button>
								</LinkScroll>
							)} */}
						</div>

						<div
							className="course-page-main-image"
							style={{
								backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_2048}")`,
							}}
						>
							{/* <Link
								to={`/master/${master._id}`}
								className="course-page-main-image__master">
								{master.name} {master.surname}
							</Link> */}
						</div>
					</div>
				</div>
			</section>

			<section className="course-page-main-service">
				<div className="container">
					<div className="course-page-main-service-wrapper">
						<div className="course-page-main-service-block">
							<div className="course-page-main-service-block-title">
								<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_6899_10)">
										<path d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5Z" fill="#DD9E5E" />
										<path d="M7 11.5523C7.34857 11.9703 7.6737 12.0909 7.90865 12.6615C8.12967 13.1983 8.54214 13.6322 8.8125 14.1794C8.93913 14.4357 9.145 14.4444 9.25 14.7632C9.35565 15.0839 9.75114 15.29 9.94231 15.5221C10.4829 16.1786 11.0904 16.6656 11.6731 15.7297C11.9972 15.2091 12.4384 14.7894 12.7596 14.2378C12.9889 13.844 13.3936 13.3961 13.6827 13.0961C13.8095 12.9645 13.9452 12.9465 14.0865 12.7718C14.2116 12.6171 14.4782 12.2448 14.6202 12.149C15.0847 11.8357 15.4485 11.3939 15.9471 11.1306C16.2267 10.983 16.4386 10.6721 16.625 10.4106C16.8446 10.1025 17.1818 9.87425 17.4375 9.61922C17.7381 9.31946 17.9294 8.9663 18.25 8.75" stroke="white" strokeLinecap="round" />
									</g>
									<defs>
										<clipPath id="clip0_6899_10">
											<rect width="25" height="25" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<h3 className="course-page-main-service-block-title__title">Онлайн</h3>
							</div>

							<p className="course-page-main-service-block__subtitle">курс можно проходить с любого устройства, у которого есть доступ в интернет</p>
						</div>

						<div className="course-page-main-service-block">
							<div className="course-page-main-service-block-title">
								<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_6899_10)">
										<path d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5Z" fill="#DD9E5E" />
										<path d="M7 11.5523C7.34857 11.9703 7.6737 12.0909 7.90865 12.6615C8.12967 13.1983 8.54214 13.6322 8.8125 14.1794C8.93913 14.4357 9.145 14.4444 9.25 14.7632C9.35565 15.0839 9.75114 15.29 9.94231 15.5221C10.4829 16.1786 11.0904 16.6656 11.6731 15.7297C11.9972 15.2091 12.4384 14.7894 12.7596 14.2378C12.9889 13.844 13.3936 13.3961 13.6827 13.0961C13.8095 12.9645 13.9452 12.9465 14.0865 12.7718C14.2116 12.6171 14.4782 12.2448 14.6202 12.149C15.0847 11.8357 15.4485 11.3939 15.9471 11.1306C16.2267 10.983 16.4386 10.6721 16.625 10.4106C16.8446 10.1025 17.1818 9.87425 17.4375 9.61922C17.7381 9.31946 17.9294 8.9663 18.25 8.75" stroke="white" strokeLinecap="round" />
									</g>
									<defs>
										<clipPath id="clip0_6899_10">
											<rect width="25" height="25" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<h3 className="course-page-main-service-block-title__title">Навсегда</h3>
							</div>

							<p className="course-page-main-service-block__subtitle">курс не сгорит, не пропадёт, не убежит, а всегда будет ждать в вашем личном кабинете</p>
						</div>

						<div className="course-page-main-service-block">
							<div className="course-page-main-service-block-title">
								<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_6899_10)">
										<path d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5Z" fill="#DD9E5E" />
										<path d="M7 11.5523C7.34857 11.9703 7.6737 12.0909 7.90865 12.6615C8.12967 13.1983 8.54214 13.6322 8.8125 14.1794C8.93913 14.4357 9.145 14.4444 9.25 14.7632C9.35565 15.0839 9.75114 15.29 9.94231 15.5221C10.4829 16.1786 11.0904 16.6656 11.6731 15.7297C11.9972 15.2091 12.4384 14.7894 12.7596 14.2378C12.9889 13.844 13.3936 13.3961 13.6827 13.0961C13.8095 12.9645 13.9452 12.9465 14.0865 12.7718C14.2116 12.6171 14.4782 12.2448 14.6202 12.149C15.0847 11.8357 15.4485 11.3939 15.9471 11.1306C16.2267 10.983 16.4386 10.6721 16.625 10.4106C16.8446 10.1025 17.1818 9.87425 17.4375 9.61922C17.7381 9.31946 17.9294 8.9663 18.25 8.75" stroke="white" strokeLinecap="round" />
									</g>
									<defs>
										<clipPath id="clip0_6899_10">
											<rect width="25" height="25" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<h3 className="course-page-main-service-block-title__title">24/7</h3>
							</div>

							<p className="course-page-main-service-block__subtitle">курс заранее записан и доступен в любое время дня и ночи, не нужно подстраиваться под чей-то график. Учитесь тогда, когда удобно вам</p>
						</div>

						<div className="course-page-main-service-block">
							<div className="course-page-main-service-block-title">
								<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_6899_10)">
										<path d="M25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5Z" fill="#DD9E5E" />
										<path d="M7 11.5523C7.34857 11.9703 7.6737 12.0909 7.90865 12.6615C8.12967 13.1983 8.54214 13.6322 8.8125 14.1794C8.93913 14.4357 9.145 14.4444 9.25 14.7632C9.35565 15.0839 9.75114 15.29 9.94231 15.5221C10.4829 16.1786 11.0904 16.6656 11.6731 15.7297C11.9972 15.2091 12.4384 14.7894 12.7596 14.2378C12.9889 13.844 13.3936 13.3961 13.6827 13.0961C13.8095 12.9645 13.9452 12.9465 14.0865 12.7718C14.2116 12.6171 14.4782 12.2448 14.6202 12.149C15.0847 11.8357 15.4485 11.3939 15.9471 11.1306C16.2267 10.983 16.4386 10.6721 16.625 10.4106C16.8446 10.1025 17.1818 9.87425 17.4375 9.61922C17.7381 9.31946 17.9294 8.9663 18.25 8.75" stroke="white" strokeLinecap="round" />
									</g>
									<defs>
										<clipPath id="clip0_6899_10">
											<rect width="25" height="25" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<h3 className="course-page-main-service-block-title__title">Практические видео</h3>
							</div>

							<p className="course-page-main-service-block__subtitle">самый быстрый формат обучения, минимум теории, максимум практики. Повторяйте за мастером, и у вас всё получится</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CoursePageMain;
