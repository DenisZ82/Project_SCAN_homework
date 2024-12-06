import React from "react";

import MainTariffs1 from "./MainTariffs1";
import MainTariffs2 from "./MainTariffs2";
import MainTariffs3 from "./MainTariffs3";

import "../stylse/MainTariffs.css"

function MainTariffs() {

    return(
        <div className="tariffs">
            <div className="tariffs-heading">наши тарифы</div>
            <div className="tariffs-cards">
                <MainTariffs1 />
                <MainTariffs2 />
                <MainTariffs3 />
            </div>
        </div>


    );
}

export default MainTariffs;