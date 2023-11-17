import React from 'react'
import moment from 'moment'

import { checkDeclension } from '../../../../functions/checkDeclension'

const CoursePagePriceChoiceSubscribeTimer: React.FC = () => {
	let deadline: string = moment().add(1, "days").locale('en').format("MMMM, DD, YYYY");

	const [days, setDays] = React.useState(0);
	const [hours, setHours] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);
	const [seconds, setSeconds] = React.useState(0);

	const getTimeUntil = (deadline: string) => {
		const time: any = Date.parse(deadline) - Date.parse(new Date() as any);
		if (time < 0) {
			setDays(0);
			setHours(0);
			setMinutes(0);
			setSeconds(0);
		} else {
			setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
			setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			setMinutes(Math.floor((time / 1000 / 60) % 60));
			setSeconds(Math.floor((time / 1000) % 60));
		}
	};

	React.useEffect(() => {
		getTimeUntil(deadline);
	}, []);

	React.useEffect(() => {
		setInterval(() => getTimeUntil(deadline), 1000);

		return () => getTimeUntil(deadline);
	}, [deadline]);

	return (
		<div className="course-page-price-blocks-subscribe-text-btn-timer">
			<p className="course-page-price-blocks-subscribe-text-btn-timer__title">
				Скидка истекает через:
				{" "}
				{checkDeclension(hours, [
					"час",
					"часа",
					"часов",
				]).title} :
				{" "}
				{checkDeclension(minutes, [
					"минуту",
					"минуты",
					"минут",
				]).title} :
				{" "}
				{checkDeclension(seconds, [
					"секунду",
					"секунды",
					"секунд",
				]).title}
			</p>
		</div>
	)
}

export default CoursePagePriceChoiceSubscribeTimer