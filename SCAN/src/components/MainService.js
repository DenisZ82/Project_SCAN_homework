import React from "react";

import "../stylse/MainServis.css"
import banner_service from "../images/banner_service.svg"

function MainService() {

    return (
        <div className="service">
            <div className="service-left">
                <div className="service-txt">
                    сервис по поиску<br /> публикаций<br /> о компании<br /> по его ИНН

                </div>
                <div className="service-note">
                    Комплексный анализ публикаций, получение данных<br />
                     в формате PDF на электронную почту.
                </div>
            </div>

            <img className="service-banner" src={ banner_service } alt="Баннер в блоке Сервис"/>
        </div>
    );

}

export default MainService;