import React from 'react'
import { Link as LinkScroll } from "react-scroll";

interface CoursePageKnowProps {
	title: string
	items: string[]
}

const CoursePageKnow: React.FC<CoursePageKnowProps> = ({ title, items }) => {
	return (
		<section className="course-page-know">
			<div className="container">
				<div className="course-page-know-wrapper">
					<div className="course-page-know-text">
						<h2 className="course-page__title course-page-know-text__title">
							{title}
						</h2>

						<div className="course-page-know-text-items-wrapper">
							{items.map((item, index) => (
								<div className="course-page-know-text-item" key={`course-page-know-text-item-${index}`}>
									<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="25" cy="25" r="25" fill="#F4F4F4" />
										<path d="M18.7845 18.4983C18.7845 17.6565 18.6051 16.5658 19.0648 15.7855C19.5648 14.9369 21.0717 14.4105 22.0463 14.1747C22.6017 14.0404 23.2413 13.7652 23.8309 13.7509C24.6964 13.7299 25.2006 14.0936 26.009 14.3066C26.8033 14.5159 27.6313 14.6258 28.4514 14.6881C29.0758 14.7355 29.3296 14.8385 29.7561 15.2297C30.4174 15.8363 30.9461 16.4585 31.1848 17.2926C31.5094 18.4267 30.5281 19.2308 30.3006 20.2786C30.15 20.9723 30.2001 21.7664 29.9448 22.4356C29.7451 22.9589 29.3014 23.5574 28.8773 23.9616C28.4008 24.4157 27.9792 24.74 27.3245 25.026C26.8615 25.2282 26.2842 25.4403 25.8742 25.7089C24.6556 26.5073 24.4132 28.3174 24.4132 29.519" stroke="#DD9E5E" strokeWidth="2.5" strokeLinecap="round" />
										<path d="M24.0249 35.4534V36.2163" stroke="#DD9E5E" strokeWidth="2.5" strokeLinecap="round" />
									</svg>

									<p className="course-page-know-text-item__text">
										{item}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="course-page-know-message">
						<h3 className="course-page-know-message__title">
							Всему этому вы <br /> научитесь на курсе
						</h3>

						<p className="course-page-know-message__subtitle">
							Вам не придётся долго и нудно искать эту информацию в интернете
						</p>

						<LinkScroll
							to="price"
							spy={true}
							smooth={true}
							offset={0}
							duration={1000}
							className="btn course-page-know-message__btn"
						>
							Купить курс
						</LinkScroll>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CoursePageKnow