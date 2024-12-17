import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";

import "../stylse/MainServis.css"
import banner_service from "../images/banner_service.svg"

function MainService() {
    const { store } = useContext(Context);

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
                <div>{ store.isAuth ? 
                    <Link to={ "/search" }>
                        <button className="service-but">Запросить данные</button>
                    </Link> : 
                    <div></div> }
                </div>
            </div>

            <img className="service-banner" src={ banner_service } alt="Баннер в блоке Сервис"/>
        </div>
    );

}

export default observer(MainService);