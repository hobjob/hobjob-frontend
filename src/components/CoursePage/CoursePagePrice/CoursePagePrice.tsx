import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import {
	CoursePagePriceChoice,
	CoursePagePriceRegister,
} from "../../";

import { CoursePagePriceSections } from "../../../redux/types/coursePage/ICoursePage";

const CoursePagePrice: React.FC = () => {
	const {
		price: { currentSection },
	} = useTypedSelector(({ coursePage }) => coursePage);

	return (
		<section className="course-page-price" id="price">
			<div className="container">
				<div className="course-page-price-wrapper">
					<h2 className="course-page__title mb course-page-price__title">
						Как получить доступ к курсу?
					</h2>

					{currentSection ===
						CoursePagePriceSections.CHOICE_TYPE_BUY ? (
						<CoursePagePriceChoice />
					) : null}

					{currentSection === CoursePagePriceSections.BUY_REGISTER || currentSection ===
						CoursePagePriceSections.SUBSCRIBE_REGISTER ? (
						<CoursePagePriceRegister />
					) : null}
				</div>
			</div>
		</section>
	);
};

export default CoursePagePrice;
