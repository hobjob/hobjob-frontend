import React from "react";
import { Link } from "react-router-dom";

import { PassingCourseLesson } from "../../../models/Passing/IPassing";

import { checkDeclension } from "../../../functions/checkDeclension";

interface PassingLessonsListItemProps extends PassingCourseLesson {
	active: boolean;
	courseId: string;
	num: number;
}

const PassingLessonsListItem: React.FC<PassingLessonsListItemProps> = ({
	image,
	title,
	materials,
	active,
	courseId,
	num,
}) => {
	return (
		<Link
			to={`/go/passing/${courseId}/${num}`}
			className={`passing-lessons-list-item ${active ? "active" : ""
				}`}
		>
			<div
				className="passing-lessons-list-item-image"
				style={{
					backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_512}")`,
				}}
			></div>

			<div className="passing-lessons-list-item-text">
				<p className="passing-lessons-list-item-text__subtitle">
					Урок {num}
				</p>

				<p className="passing-lessons-list-item-text__title">
					{title}
				</p>

				{materials.length ? (
					<p className="passing-lessons-list-item-text__materials">
						{checkDeclension(materials.length, ["материал", "материала", "материалов"]).title}
					</p>
				) : null}
			</div>
		</Link>
	);
};

export default PassingLessonsListItem;
