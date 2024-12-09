import React, { useState, useContext } from "react";
import { Context } from "../index.js";
import { Link } from "react-router-dom";

import "../stylse/Header.css";
import logo_colored from "../images/logo_colored.svg";
import header_avatar from "../images/header_avatar.svg";

function Header() {
    const {store} = useContext(Context);

    return (
        <header className="header">
            <img className="header-img" src={logo_colored} alt="Логотип-цветной"/>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li><a href="/">Главная</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
            { !store.isAuth ?
                <div className="header-reg">
                    <div className="header-register"><a href="#">Зарегистрироваться</a></div>
                    <div className="header-line"></div>
                    <Link to={"/auth"}>
                        <button className="header-but">Войти</button>
                    </Link>
                </div> :
                <div className="header-logged">
                    <div className="header-limit"></div>
                    <div className="header-user">
                        <div>
                            <div className="header-username">Алексей А.</div>
                            <Link to={'/'} className="header-logout" onClick={() => store.logout()} >
                                Выйти
                            </Link>
                        </div>
                        <img src={ header_avatar }/>
                    </div>
                </div>
            }
        </header>
    );
}

export default Header;