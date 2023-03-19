import React from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../hooks/useTypedSelector";

import {
	Loader,
	CabinetSubscribeDisableChoice,
	CabinetSubscribeDisableSaleSubscribe,
	CabinetSubscribeDisableFreeMonthSubscribe,
	CabinetSubscribeDisableSuccessSaleSubscribe,
	CabinetSubscribeDisableSuccessFreeMonthSubscribe,
	CabinetSubscribeDisableSuccessDisable,
} from "../components/";

import { CabinetSubscribeDisableSection } from "../redux/types/cabinetSubscribeDisable/ICabinetSubscribeDisable";

import { changeCabinetSubscribeDisableCurrentSection } from "../redux/actions/cabinetSubscribeDisable";

import CabinetSubscribeDisableChoiceBlockImage from "../assets/images/cabinet-subscribe-disable-choice-block-image.jpg";
import CabinetSubscribeDisableChoiceBlockImageMedia from "../assets/images/cabinet-subscribe-disable-choice-block-image-media.jpg";

const CabinetSubscribeDisable: React.FC = () => {
	const dispatch = useDispatch();

	const { userInfo, isLoadedUserInfo } = useTypedSelector(({ user }) => user);
	const { currentSection } = useTypedSelector(
		({ cabinetSubscribeDisable }) => cabinetSubscribeDisable
	);

	const [isVisible, setIsVisible] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		return () => {
			dispatch(
				changeCabinetSubscribeDisableCurrentSection(
					CabinetSubscribeDisableSection.MAIN
				)
			);
		};
	}, []);

	React.useEffect(() => {
		if (isLoadedUserInfo) setIsVisible(userInfo.subscribe.auto);
	}, [isLoadedUserInfo]);

	return (
		<>
			{localStorage.getItem("accessToken") ? (
				isLoadedUserInfo && isVisible !== null ? (
					isVisible ? (
						<>
							<Helmet>
								<title>Отменить подписку - HobJob</title>
							</Helmet>

							<section className="cabinet-subscribe-disable">
								<div className="cabinet-subscribe-disable-block">
									<div className="cabinet-subscribe-disable-block-content">
										{currentSection ===
											CabinetSubscribeDisableSection.MAIN ? (
											<CabinetSubscribeDisableChoice />
										) : null}

										{currentSection ===
											CabinetSubscribeDisableSection.SALE_SUBSCRIBE ? (
											<CabinetSubscribeDisableSaleSubscribe />
										) : null}

										{currentSection ===
											CabinetSubscribeDisableSection.SUCCESS_SALE_SUBSCRIBE ? (
											<CabinetSubscribeDisableSuccessSaleSubscribe />
										) : null}

										{currentSection ===
											CabinetSubscribeDisableSection.FREE_MONTH_SUBSCRIBE ? (
											<CabinetSubscribeDisableFreeMonthSubscribe />
										) : null}

										{currentSection ===
											CabinetSubscribeDisableSection.SUCCESS_FREE_MONTH_SUBSCRIBE ? (
											<CabinetSubscribeDisableSuccessFreeMonthSubscribe />
										) : null}

										{currentSection ===
											CabinetSubscribeDisableSection.SUCCESS_DISABLED ? (
											<CabinetSubscribeDisableSuccessDisable />
										) : null}

										<picture className="cabinet-subscribe-disable-block-content-image">
											<source
												media="(max-width: 1100px)"
												srcSet={
													CabinetSubscribeDisableChoiceBlockImageMedia
												}
											/>

											<img
												className="cabinet-subscribe-disable-block-content-image__image"
												alt=""
												src={
													CabinetSubscribeDisableChoiceBlockImage
												}
											/>
										</picture>
									</div>
								</div>
							</section>
						</>
					) : (
						<Navigate to="/go/training" />
					)
				) : (
					<Loader />
				)
			) : (
				<Navigate to="/go/login" />
			)}
		</>
	);
};

export default CabinetSubscribeDisable;
