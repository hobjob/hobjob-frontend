import React from 'react'
import {useSelector} from "react-redux";

const MasterBlockSuccess = () => {
    const {paymentOutputNumberMaster} = useSelector(
        ({payment_output}) => payment_output
	);
	
	return (
        <div className="master-info-block-content master-info-block-content-success">
            <svg
                width="35"
                height="33"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0.353577 3.27808L4.03779 6.96231" stroke="#dd9e5e" />
                <path d="M3.33063 6.96225L9.64643 0.646454" stroke="#dd9e5e" />
            </svg>
            <h3 className="master-info-block-content-success__title">
                Ваша заявка №{paymentOutputNumberMaster} принята <br />{" "}
                <span>(время обработки 1-3 рабочих дня)</span>
            </h3>
        </div>
    );
}

export default MasterBlockSuccess
