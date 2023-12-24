import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

import ServicesСertificateImage from "../../../assets/images/services-certificate-image.gif";

const CoursePageCertificate: React.FC = () => {
	const cardX = useMotionValue(0);
	const cardY = useMotionValue(0);

	const rotateX = useTransform(cardY, [-1600, 1600], [10, -10]);
	const rotateY = useTransform(cardX, [-1600, 1600], [-10, 10]);

	const handleMouseMove = (event: any) => {
		const offsetX = event.clientX - window.innerWidth / 2;
		const offsetY = event.clientY - window.innerHeight / 2

		cardX.set(offsetX);
		cardY.set(offsetY);
	};

	return (
		<motion.div className='course-page-certificate' onMouseMove={handleMouseMove}>
			<div className="course-page-certificate-wrapper">
				<h3 className="course-page-certificate__title">
					После прохождения курса вы получите сертификат
				</h3>

				<motion.div
					style={{
						margin: "auto",
						width: "100%",
						height: "100%",
						transformStyle: "preserve-3d",
						perspective: 800,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						rotateX,
						rotateY
					}}
					transition={{ velocity: 0 }}
				>
					<motion.div
						key="card"
						style={{
							transformStyle: "preserve-3d",
							perspective: 800,
							rotateX,
							rotateY
						}}
						transition={{ velocity: 0 }}
						className='course-page-certificate-image'
					>
						<img src={ServicesСertificateImage} alt="" className="course-page-certificate-image__image" />
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default CoursePageCertificate