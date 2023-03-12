import React from "react";

import {CabinetSubscribeBlock} from "../../";

const CabinetSubscribe: React.FC = () => {
    return (
        <div className="cabinet-section" id="subscribe">
            <div className="cabinet-section-title">
                <h3 className="cabinet-section-title__title">Подписка</h3>
            </div>

            <div className="cabinet-section-content">
                <CabinetSubscribeBlock />
            </div>
        </div>
    );
};

export default CabinetSubscribe;
