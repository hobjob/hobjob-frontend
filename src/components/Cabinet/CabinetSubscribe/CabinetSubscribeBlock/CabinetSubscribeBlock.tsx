import React from "react";

import {
    CabinetSubscribeBlockCurrent,
    CabinetSubscribeBlockUpgrade,
} from "../../../";

const CabinetSubscribeBlock: React.FC = () => {
    return (
        <div className="cabinet-section-content-subscribe">
            <CabinetSubscribeBlockCurrent />

            <CabinetSubscribeBlockUpgrade />
        </div>
    );
};

export default CabinetSubscribeBlock;
