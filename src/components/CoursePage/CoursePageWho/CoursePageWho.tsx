import React from 'react'

interface CoursePageWhoProps {
	image: string
	items: string[]
}

const CoursePageWho: React.FC<CoursePageWhoProps> = ({ image, items }) => {
	return (
		<section className="course-page-who">
			<div className="container">
				<div className="course-page-who-wrapper">
					<div className="course-page-who-text">
						<h2 className="course-page-who-text__title">
							Кому подойдет этот курс
						</h2>

						{items.map((item, index) => (
							<div className="course-page-who-text-item" key={`course-page-who-text-item-${index}`}>
								<svg width="33" height="11" viewBox="0 0 33 11" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M2 8.98595C2 6.46605 3.61015 1.94252 5.68254 2.00055C7.7848 2.05942 9.50704 4.73482 10.9398 6.76332C11.4623 7.50298 12.4019 8.68292 13.1203 8.91539C14.7393 9.43929 17.476 7.40007 18.9106 6.37525C20.7687 5.04788 22.7252 4.31618 24.7494 3.34118C25.9828 2.74707 27.2998 1.39738 28.6015 2.31807C29.3081 2.81788 30.2082 3.90566 31 3.90566" stroke="#DD9E5E" strokeWidth="3" strokeLinecap="round" />
								</svg>

								<p className="course-page-who-text-item__text">
									{item}
								</p>
							</div>
						))}
					</div>

					<div className="course-page-who-image" style={{ backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")` }}></div>
				</div>
			</div>
		</section>
	)
}

export default CoursePageWho