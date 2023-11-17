import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import {
	CoursePagePriceChoiceSubscribe,
	CoursePagePriceChoiceBuy,
} from "../../../";

const CoursePagePriceChoice: React.FC = () => {
	const {
		price: { isCloseAnimation },
	} = useTypedSelector(({ coursePage }) => coursePage);
	const { courseByUrl } = useTypedSelector(({ courses }) => courses);

	return (
		<div
			className={`course-page-price-blocks ${isCloseAnimation ? "close" : ""
				}`}
		>
			<CoursePagePriceChoiceSubscribe {...courseByUrl} />

			{/* <CoursePagePriceChoiceBuy {...courseByUrl} /> */}
		</div>
	);
};

export default CoursePagePriceChoice;
