import React from "react";

import MasterSectionImage from "../../assets/images/master-section-image.jpg";

const MasterSection: React.FC = () => {
	return (
		<section className="master-section">
			<div className="container">
				<div className="master-section-wrapper">
					<div
						className="master-section-image"
						style={{
							backgroundImage: `url("${MasterSectionImage}")`,
						}}
					></div>
					<div className="master-section-text">
						<h2 className="master-section-text__title">
							Умеете творить? <br /> Зарабатывайте обучая других
						</h2>
						<p className="master-section-text__description">
							Рынок онлайн образования растёт на 20% каждый год.
							Монетизируйте то, что умеете делать лучше всего -
							один раз запишите курс и зарабатывайте на нём, не
							тратя деньги на рекламу
						</p>

						<a
							href={process.env.REACT_APP_DOMEN_MASTERS_SERVICES}
							className="btn master-section-text__btn"
						>
							Подробнее
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MasterSection;
