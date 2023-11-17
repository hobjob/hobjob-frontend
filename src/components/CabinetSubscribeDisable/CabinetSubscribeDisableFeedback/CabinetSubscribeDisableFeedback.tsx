import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { CabinetSubscribeDisableSection } from "../../../redux/types/cabinetSubscribeDisable/ICabinetSubscribeDisable";

import { changeCabinetSubscribeDisableCurrentSection } from "../../../redux/actions/cabinetSubscribeDisable";
import { fetchUpdateUser } from "../../../redux/actions/user";

import { CabinetSubscribeDisableFeedbackForm } from '../../'

const CabinetSubscribeDisableFeedback: React.FC = () => {
	const dispatch = useDispatch();

 	const { isCloseAnimation } = useTypedSelector(
		({ cabinetSubscribeDisable }) => cabinetSubscribeDisable
	);

	// const onClickDisableSubscribe = () => {
	// 	dispatch(fetchUpdateUser({ autoPayment: false }) as any);

	// 	dispatch(
	// 		changeCabinetSubscribeDisableCurrentSection(
	// 			CabinetSubscribeDisableSection.SUCCESS_DISABLED
	// 		) as any
	// 	);
	// };

	return (
		<div
			className={`cabinet-subscribe-disable-block-content-text ${isCloseAnimation ? "close" : ""
				}`}
		>
			<h2 className="cabinet-subscribe-disable-block-content-text__title">
				Мы хотим стать лучше, можете рассказать, почему вы решили отменить подписку?
			</h2>

			<CabinetSubscribeDisableFeedbackForm />
		</div>
	);
};

export default CabinetSubscribeDisableFeedback;
