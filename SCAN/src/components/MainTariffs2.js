import React from "react";

import "../stylse/MainTariffCard.css"

import tariff_darts from "../images/tariff_darts.svg"
import tick from "../images/tick.svg"

function MainTariffs2() {

    return(
        // <div className="tariff-card card-2 card-2-border">
        <div className="tariff-card card-2">
            <div className="tariff-header">
                <div>
                    <div className="tariff-name">Pro</div>
                    <div className="tariff-slogan">Для HR и фрилансеров</div>
                </div>
                <img src={ tariff_darts }/>
            </div>

            <div>
                <div className="tariff-current-none"><p></p></div>

                <div className="tariff-price">
                    <div className="tariff-discount">1 299 ₽</div>
                    <div className="tariff-basic">2 600 ₽</div>
                </div>

                <div className="tariff-explanation">или 279 ₽/мес. при рассрочке на 24 мес.</div>

                <div className="tariff-txt">
                    <div className="tariff-contains">В тариф входит:</div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Все пункты тарифа Beginner</p>
                    </div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Экспорт истории</p>
                    </div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Рекомендации по приоритетам</p>
                    </div>
                </div>
            </div>
            
            <div className="tariff-but-block">
                <button className="tariff-but">Подробнее</button>
            </div>
        </div>


    );
}

export default MainTariffs2;