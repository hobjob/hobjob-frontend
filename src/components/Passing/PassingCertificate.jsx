import React from "react";

const PassingCertificate = ({title, getCertificate}) => {
    return (
        <div className="passing-certificate">
            <p className="subtitle passing-certificate__subtitle">Сертификат</p>
            <h4 className="passing-certificate__title">
                Вы успешно прошли курс «{title}»
            </h4>

            <button
                className="btn passing-certificate__btn"
                onClick={getCertificate}
            >
                Получить сертификат
            </button>
        </div>
    );
};

export default PassingCertificate;
