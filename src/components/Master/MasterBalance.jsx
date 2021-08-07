import React from "react";

const MasterBalance = ({masterBalance}) => {
    return (
        <div className="master-info-balance">
            <p className="master-info-balance__subtitle">Вы заработали</p>
            <h3 className="master-info-balance__title">{masterBalance}₽</h3>
            <button className="btn master-info-balance__btn">Вывести</button>
        </div>
    );
};

export default MasterBalance;
