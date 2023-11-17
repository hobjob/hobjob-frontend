import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { animateScroll as scroll } from "react-scroll";

import { useTypedSelector } from "../hooks/useTypedSelector";

import {
	fetchPassingCourseById,
	setPassingIsLoadedCourse,
	setPassingCurrentLessonIndex,
} from "../redux/actions/passing";

import {
	Loader,
	PassingCurrentLesson,
	PassingLessonsList,
} from "../components/";

const PassingCourse: React.FC = () => {
	const dispatch = useDispatch();
	const { id, num } = useParams();

	const courseId = id ? id : "";

	const { isLoadedUserInfo } = useTypedSelector(({ user }) => user);
	const { course, currentLessonIndex, isLoadedCourse } = useTypedSelector(({ passing }) => passing);

	React.useEffect(() => {
		dispatch(fetchPassingCourseById(courseId) as any);

		return () => {
			dispatch(setPassingIsLoadedCourse(false))
		}
	}, [courseId]);

	React.useEffect(() => {
		scroll.scrollToTop({ duration: 500 });

		dispatch(setPassingCurrentLessonIndex(num ? parseInt(num) - 1 : 0))
	}, [courseId, num]);

	return (
		<>
			{localStorage.getItem("accessToken") ? (
				isLoadedCourse && isLoadedUserInfo ? (
					<>
						<Helmet>
							<title>
								{course.lessons[currentLessonIndex].title} - HobJob
							</title>
						</Helmet>

						<section className="passing">
							<div className="container">
								<div className="passing-wrapper">
									<PassingCurrentLesson />

									<PassingLessonsList />
								</div>
							</div>
						</section>
					</>
				) : (
					<Loader />
				)
			) : (
				<Navigate to="/go/login" />
			)}
		</>
	);
};

export default PassingCourse;
