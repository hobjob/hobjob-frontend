import React from "react";

import { useTypedSelector } from "../../../../../hooks/useTypedSelector";

import { rates } from "../../../../../subscribeRates";

const CabinetSubscribeBlockCurrentType: React.FC = () => {
	const {
		userInfo: { subscribe },
	} = useTypedSelector(({ user }) => user);

	return (
		<div className="cabinet-section-content-subscribe-current-type">
			<p className="cabinet-section-content-subscribe-current-type__subtitle">
				Ваша подписка
			</p>
			<h4 className="cabinet-section-content-subscribe-current-type__title">
				{Object.keys(rates).map((key) =>
					key === subscribe.type ? (
						`${rates[key].subtitle} за ${rates[key].fullPrice}₽`
					) : null
				)}
			</h4>
		</div>
	);
};

export default CabinetSubscribeBlockCurrentType;
