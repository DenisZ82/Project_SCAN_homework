import React from "react";

import "../stylse/MainTariffCard.css"

import tariff_lamp from "../images/tariff_lamp.svg"
import tick from "../images/tick.svg"

function MainTariffs1() {

    return(
        <div className="tariff-card card-1">
            <div className="tariff-header">
                <div>
                    <div className="tariff-name">Beginner</div>
                    <div className="tariff-slogan">Для небольшого исследования</div>
                </div>
                <img src={ tariff_lamp } />
            </div>
            
            <div>
                <div className="tariff-current"><p>Текущий тариф</p></div>

                <div className="tariff-price">
                    <div className="tariff-discount">799 ₽</div>
                    <div className="tariff-basic">1 200 ₽</div>
                </div>

                <div className="tariff-explanation">или 150 ₽/мес. при рассрочке на 24 мес.</div>

                <div className="tariff-txt">
                    <div className="tariff-contains">В тариф входит:</div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Безлимитная история запросов</p>
                    </div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Безопасная сделка</p>
                    </div>
                    <div className="txt">
                        <img src={ tick }/>
                        <p>Поддержка 24/7</p>
                    </div>
                </div>
            </div>

            <div className="tariff-but">
                <button>Подробнее</button>
            </div>
        </div>


    );
}

export default MainTariffs1;