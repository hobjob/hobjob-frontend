import React from "react";
import { Link } from "react-router-dom";

import MainOffer from "../../assets/images/main-offer.svg";
import MainOfferMedia from "../../assets/images/main-offer-media.svg";

import { useTypedSelector } from "../../hooks/useTypedSelector";

const HomeMainSection: React.FC = () => {
	const { items, isLoadedAllCategories } = useTypedSelector(
		({ categories }) => categories
	);

	return (
		<>
			{isLoadedAllCategories ? (
				<section className="main">
					<div className="container">
						<div className="main-wrapper">
							<div className="main-text">
								<h1 className="main-text__title">
									Творческие курсы по подписке <br />{" "}
									Научитесь создавать шедевры своими руками
								</h1>
							</div>
							<div className="main-categories">
								<div className="main-categories-text">
									<div className="main-categories-text-items-wrapper">
										{Object.keys(items).map(
											(key, index) => (
												<Link
													to={`/course?categories=${items[key].transfer}`}
													className="main-categories-text__item"
													key={`main-categories-text__item-${index}`}
												>
													{items[key].title}
												</Link>
											)
										)}
									</div>

									<picture>
										<source
											media="(max-width: 900px)"
											srcSet={MainOfferMedia}
										/>

										<img
											alt="Выберите курс и попробуйте 30 дней всего за 1₽"
											className="main-text__image"
											src={MainOffer}
										/>
									</picture>
								</div>
							</div>
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default HomeMainSection;
