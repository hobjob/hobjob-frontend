import React from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { Navigate, useParams } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { useTypedSelector } from "../hooks/useTypedSelector";

import { fetchCourseByUrl } from "../redux/actions/courses";
import { addUserCourse } from "../redux/actions/user";

import {
	CoursePageMain,
	CoursePageWho,
	CoursePageKnow,
	CoursePageSkills,
	CoursePageWorks,
	CoursePageContent,
	CoursePageFeedback,
	CoursePageUseSkills,
	CoursePagePrice,
	CoursePagePassing,
	CoursePageTools,
	CoursePageMaster,
	CoursePageFaq,
	CoursesSection,
	Loader,
	ServicesSection,
	CoursePageCertificate
} from "../components";

import { checkIsAddCourse } from "../functions/checkIsAddCourse";

const CoursePage: React.FC = () => {
	const { url } = useParams();

	const dispatch = useDispatch();

	const { courseByUrl, isLoadedCourseByUrl } = useTypedSelector(
		({ courses }) => courses
	);
	const categories = useTypedSelector(({ categories }) => categories.items);
	const isLoadedCategories = useTypedSelector(
		({ categories }) => categories.isLoadedAllCategories
	);
	const masters = useTypedSelector(({ masters }) => masters.items);
	const isLoadedMasters = useTypedSelector(({ masters }) => masters.isLoaded);
	const { userInfo, isLoadedUserInfo } = useTypedSelector(({ user }) => user);

	const [visibleButton, setVisibleButton] = React.useState(false);

	const [isLogin, setIsLogin] = React.useState(false);
	const [isAdd, setIsAdd] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener("scroll", handlerScroll);

		return () => {
			window.removeEventListener("scroll", handlerScroll);
		};
	}, []);

	React.useEffect(() => {
		dispatch(fetchCourseByUrl(url ? url : "") as any);
	}, [url]);

	React.useEffect(() => {
		if (
			localStorage.getItem("accessToken") &&
			isLoadedUserInfo &&
			isLoadedCourseByUrl
		) {
			setIsLogin(true);

			setIsAdd(checkIsAddCourse(userInfo.courses, courseByUrl._id));
		}
	}, [url, isLoadedUserInfo, isLoadedCourseByUrl]);

	const handlerScroll = () => {
		if (Math.floor(window.pageYOffset) > 200) {
			setVisibleButton(true);
		} else {
			setVisibleButton(false);
		}
	};

	const onClickAddCourse = () => {
		dispatch(addUserCourse(courseByUrl._id) as any);
	};

	return (
		<>
			{isLoadedCourseByUrl && isLoadedMasters && isLoadedCategories ? (
				Object.keys(courseByUrl).length ? (
					<>
						<Helmet>
							<title>{courseByUrl.title} - HobJob</title>

							<meta
								name="description"
								content={`${courseByUrl.description} - HobJob`} />
							<meta
								property="og:title"
								content={`Курс «${courseByUrl.title}» - HobJob`} />
							<meta
								property="og:description"
								content={`${courseByUrl.description} - HobJob`} />

							<meta
								property="vk:image"
								content={`${process.env.REACT_APP_IMAGE_DOMEN}/${courseByUrl.image.size_768}`} />
							<meta
								property="og:image"
								content={`${process.env.REACT_APP_IMAGE_DOMEN}/${courseByUrl.image.size_768}`} />
							<meta property="og:image:width" content="600" />
							<meta property="og:image:height" content="315" />
							<meta
								property="og:url"
								content={`${process.env.REACT_APP_IMAGE_DOMEN}/${courseByUrl.image.size_768}`} />
							<meta property="og:type" content="website" />
							<meta name="color-scheme" content="light" />
							<meta name="theme-color" content="#fff" />
						</Helmet>

						{/* {isLogin ? (
							isAdd ? (
								<button
									className={`btn-small-round disabled course-page__btn ${visibleButton ? "visible" : ""
										}`}
								>
									<svg
										width="14"
										height="13"
										viewBox="0 0 14 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.44632 6.0186C1.79012 6.50143 2.22771 6.89948 2.59784 7.36158C3.55556 8.55726 4.36875 9.86064 5.23006 11.1246C5.25198 11.1568 5.76023 11.8699 5.79835 11.8034C5.96582 11.5113 6.09668 11.1775 6.23676 10.8715C6.66638 9.93305 7.1304 9.0248 7.65259 8.13343C8.54438 6.61116 9.43319 5.0821 10.4156 3.61607C10.8657 2.94443 11.395 2.35225 11.8904 1.71673C12.1063 1.43977 12.3942 1.14453 12.5389 0.82259"
											stroke="#000000"
											strokeWidth="1.3"
											strokeLinecap="round"
										/>
									</svg>
									Добавлен
								</button>
							) : userInfo.subscribe.working ? (
								<button
									className={`btn-small-round course-page__btn ${visibleButton ? "visible" : ""
										}`}
									onClick={onClickAddCourse}
								>
									Купить курс
								</button>
							) : (
								<LinkScroll
									to="price"
									spy={true}
									smooth={true}
									offset={0}
									duration={1000}
									className={`btn-small-round course-page__btn ${visibleButton ? "visible" : ""
										}`}
								>
									Купить курс
								</LinkScroll>
							)
						) : (
							<LinkScroll
								to="price"
								spy={true}
								smooth={true}
								offset={0}
								duration={1000}
								className={`btn-small-round course-page__btn ${visibleButton ? "visible" : ""
									}`}
							>
								Купить курс
							</LinkScroll>
						)} */}

						<CoursePageMain
							{...courseByUrl}
							isLogin={isLogin}
							isAdd={isAdd}
							master={masters[courseByUrl.masterId]}
							categories={categories}
							onClickAddCourse={onClickAddCourse}
						/>

						{courseByUrl.page && JSON.parse(courseByUrl.page) ? <>
							<CoursePageWho image={JSON.parse(courseByUrl.page).forWho.image} items={JSON.parse(courseByUrl.page).forWho.items} />

							<CoursePageKnow title={JSON.parse(courseByUrl.page).know.title} items={JSON.parse(courseByUrl.page).know.items} />

							<CoursePageWorks title={JSON.parse(courseByUrl.page).works.title} images={JSON.parse(courseByUrl.page).works.images} />

							<CoursePageSkills items={JSON.parse(courseByUrl.page).skills.items} />
						</> : null}

						<CoursePageMaster
							master={masters[courseByUrl.masterId]}
						/>

						<CoursePageContent />

						{courseByUrl.page && JSON.parse(courseByUrl.page) && JSON.parse(courseByUrl.page).feedbacks ? <>
							<CoursePageFeedback feedbacks={JSON.parse(courseByUrl.page).feedbacks} />
						</> : null}

						<CoursePagePrice />

						<CoursePageFaq />

						<CoursesSection
							title="Вам может понравиться"
							description="Новые курсы добавляются каждый месяц"
							currentCourseId={courseByUrl._id}
						/>

						{/* <ServicesSection /> */}

						{/*
						<CoursePageUseSkills {...courseByUrl} />

						<CoursePageTools {...courseByUrl} />

						{/* <CoursePageCertificate /> */}

						{/* {userInfo.subscribe.working ? null : <CoursePagePrice />}

						<CoursePagePassing title={courseByUrl.title} />

						<CoursePageFaq />

						<CoursesSection
							title="Вам может понравиться"
							description="Новые курсы добавляются каждый месяц"
							currentCourseId={courseByUrl._id}
						/> */}
					</>
				) : (
					<Navigate to="/course" />
				)
			) : (
				<Loader />
			)}
		</>
	);
};

export default CoursePage;
