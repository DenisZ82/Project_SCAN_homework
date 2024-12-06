import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../stylse/Header.css";
import logo_colored from "../images/logo_colored.svg";

function Header() {

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
            <div className="header-reg">
                <div className="header-register"><a href="#">Зарегистрироваться</a></div>
                <div className="header-line"></div>
                <Link to={"/auth"}>
                    <button className="header-but">Войти</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;