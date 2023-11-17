import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import ServicesEducationImage from "../../assets/images/services-education-image.png";
import ServicesCommunityImage from "../../assets/images/services-community-image.svg";
import ServicesCoursesImage from "../../assets/images/services-courses-image.png";
import ServicesPassingImage from "../../assets/images/services-passing-image.png";
// import ServicesСertificateImage from "../../assets/images/services-certificate-image.jpg";
import ServicesСertificateImage from "../../assets/images/services-certificate-image.gif";

interface ServicesSectionProps {
	title?: string
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ title }) => {
	const cardX = useMotionValue(0);
	const cardY = useMotionValue(0);

	const rotateX = useTransform(cardY, [-1600, 1600], [10, -10]);
	const rotateY = useTransform(cardX, [-1600, 1600], [-10, 10]);

	const handleMouseMove = (event: any) => {
		const offsetX = event.clientX - window.innerWidth / 2;
		const offsetY = event.clientY - window.innerHeight / 2

		cardX.set(offsetX);
		cardY.set(offsetY);
	};

	return (
		<section className="services">
			<div className="container">
				<div className="services-wrapper">
					<h2 className="services__title">
						{title ? title : "Почему с нами лучше?"}
					</h2>

					<div className="services-block-wrapper w50-50">
						<div className="services-block hover-scale services-block-education">
							<div className="services-block-education-text">
								<h3 className="services-block__title services-block-education-text__title">
									Обучение в удобном формате
								</h3>

								<p className="services-block__description services-block-education-text__description">
									В каждом курсе урок длится не более 30 минут, а
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
								Уникальные мастера своего дела
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
								Покупая курс HobJob, вы помогаете детям с
								заболеваниями, так как с каждой покупки мы
								отправляем 99₽ в фонд{" "}
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

					{/* <motion.div className="services-block services-block-certificate" onMouseMove={handleMouseMove}>
						<h3 className="services-block__title services-block-certificate__title">
							Сертификат к каждому курсу
						</h3>

						<motion.div
							style={{
								margin: "auto",
								width: "100%",
								height: "100%",
								transformStyle: "preserve-3d",
								perspective: 800,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								rotateX,
								rotateY
							}}
							transition={{ velocity: 0 }}
						>
							<motion.div
								key="card"
								style={{
									transformStyle: "preserve-3d",
									perspective: 800,
									rotateX,
									rotateY
								}}
								transition={{ velocity: 0 }}
								className='services-block-certificate-image'
							>
								<img src={ServicesСertificateImage} alt="" className="services-block-certificate-image__image" />
							</motion.div>
						</motion.div>
					</motion.div> */}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
