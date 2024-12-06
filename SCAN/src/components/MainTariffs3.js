import React from "react";

import "../stylse/MainTariffCard.css"

import tariff_laptop from "../images/tariff_laptop.svg"
import tick from "../images/tick.svg"

function MainTariffs3() {

    return(
        <div className="tariff-card card-3">
            <div className="tariff-header">
                <div>
                    <div className="tariff-name">Business</div>
                    <div className="tariff-slogan">Для корпоративных клиентов</div>
                </div>
                <img src={ tariff_laptop } />
            </div>
            <div>
                <div className="tariff-current"><p>Текущий тариф</p></div>

                <div className="tariff-price">
                    <div className="tariff-discount">2 379 ₽</div>
                    <div className="tariff-basic">3 700 ₽</div>
                </div>

                <div className="tariff-explanation"></div>

                <div className="tariff-txt">
                    <div className="tariff-contains">В тариф входит:</div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Все пункты тарифа Pro</p>
                    </div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Безлимитное количество запросов</p>
                    </div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Приоритетная поддержка</p>
                    </div>
                </div>
            </div>

            <div className="tariff-but">
                <button>Подробнее</button>
            </div>
        </div>


    );
}

export default MainTariffs3;