import React from "react";

import ServicesEducationImage from "../../assets/images/services-education-image.png";
import ServicesCommunityImage from "../../assets/images/services-community-image.svg";
import ServicesCoursesImage from "../../assets/images/services-courses-image.png";
import ServicesPassingImage from "../../assets/images/services-passing-image.png";

const ServicesSection: React.FC = () => {
	return (
		<section className="services">
			<div className="container">
				<div className="services-wrapper">
					<h2 className="services__title">
						Почему с нами лучше?
					</h2>

					<div className="services-block-wrapper w50-50">
						<div className="services-block hover-scale services-block-education">
							<div className="services-block-education-text">
								<h3 className="services-block__title services-block-education-text__title">
									Обучение в удобном формате
								</h3>

								<p className="services-block__description services-block-education-text__description">
									В каждом курсе урок длится не более 20 минут, а
									наша платформа доступна на любом устройстве с
									доступом в интернет
								</p>
							</div>
							<img
								src={ServicesEducationImage}
								alt=""
								className="services-block-education__image"
							/>
						</div>

						<div className="services-block hover-scale services-block-community">
							<h3 className="services-block__title services-block-community__title">
								Сообщество творческих людей
							</h3>
							<p className="services-block__description services-block-community__description">
								Наша цель собрать творческих людей на одной
								платформе для совместного обучения и ежедневного
								повышения своих навыков
							</p>
							<img
								src={ServicesCommunityImage}
								alt=""
								className="services-block-community__icon"
							></img>
						</div>

						<div className="services-block hover-scale services-block-courses">
							<h3 className="services-block__title services-block-courses__title">
								Доступ к любым курсам по одной подписке
							</h3>
							<img
								src={ServicesCoursesImage}
								alt=""
								className="services-block-courses__image"
							></img>
						</div>
					</div>


					<div className="services-block-wrapper w35-65">
						<div className="services-block hover-scale services-block-hobjobgood">
							<div className="services-block-hobjobgood-logo">
								<p className="services-block-hobjobgood-logo__subtitle">
									Участие в благотворительности
								</p>
								<img
									src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/hobjob-good.svg`}
									alt=""
									className="services-block-hobjobgood-logo__image"
								/>
							</div>

							<p className="services-block__description services-block-hobjobgood__description">
								Покупая подписку HobJob, вы помогаете детям с
								заболеваниями, так как с каждой подписки мы
								отправляем 9₽ в фонд{" "}
								<a href="https://www.dobryaki.ru/wards">
									«Клуб добряков»
								</a>.{" "}
								Обучаясь новым навыкам на HobJob, вы помогаете
								детям.
							</p>
						</div>

						<div className="services-block hover-scale services-block-passing">
							<h3 className="services-block__title services-block-passing__title">
								Удобная платформа для обучения
							</h3>
							<img
								src={ServicesPassingImage}
								alt=""
								className="services-block-passing__image"
							></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
