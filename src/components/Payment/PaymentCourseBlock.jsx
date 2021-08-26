import React from 'react'

const PaymentCourseBlock = ({image, title}) => {
	return (
        <div className="payment-info-course-block">
            <div
                className="payment-info-course-block-img"
                style={{
                    backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                }}
            ></div>
            <h4 className="payment-info-course-block__title">{title}</h4>
        </div>
    );
}

export default PaymentCourseBlock
