import React from "react";
import Slider from "react-slick";

import DeviceDetect from "./DeviceDetect.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylse/MainSlick.css"

import arrow_left from "../images/arrow_left.svg"
import arrow_right from "../images/arrow_right.svg"
import watch from "../images/slick_watch.svg"
import magnifier from "../images/slick_magnifier.svg"
import lock from "../images/slick_lock.svg"
import banner_slick from "../images/banner_slick.svg"

// переопределение стрелок для библиотеки react-slick
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "transparent",
                  border: "none", outline: "none", content: "none"}}
          onClick={onClick}
        >
        <img src={ arrow_right } className="arrow_right"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "transparent",
                  border: "none", outline: "none", content: "none"}}
          onClick={onClick}
        >
        <img src={ arrow_left } className="arrow_left"/>
        </div>
    );
}

function MainSlick() {
    const { isMobile } = DeviceDetect();
    const settings = {
        // dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: !isMobile ? 3 : 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return(
        <div className="slick">
            <div className="slick-heading">Почему именно мы</div>
            <div className="slick-cards">
                <Slider {...settings}>
                    <div className="slick-card">
                        <img src={ watch }/>
                        <p>Высокая и оперативная скорость <br />обработки заявки</p>
                    </div>

                    <div className="slick-card">
                        <img src={ magnifier } />
                        <p>Огромная комплексная база <br />данных, обеспечивающая <br/>
                        объективный ответ на запрос</p>
                    </div>

                    <div className="slick-card">
                      <img src={ lock } />
                      <p>Защита конфеденциальных сведений, не подлежащих разглашению по 
                      федеральному законодательству</p>
                    </div>

                    <div className="slick-card">
                      <div className="three-img">
                        <img src={ watch }/>
                        <img src={ magnifier } />
                        <img src={ lock } />
                      </div>
                      <p>12 часов на этот компонет <br />и попытку "подружить" <br />
                      react-slick с техзаданием :-/</p>                      
                    </div>

                    <div className="slick-card">
                        <img src={ magnifier } />
                        <p>Огромная комплексная база <br />данных, обеспечивающая <br/>
                        объективный ответ на запрос</p>
                    </div>

                    <div className="slick-card">
                        <img src={ lock } />
                        <p>Защита конфеденциальных сведений, не подлежащих разглашению по 
                        федеральному законодательству</p>
                    </div>
                </Slider>
            </div>
            <div className="for-bunner">
                <img src={ banner_slick } className="banner_slick"/>
            </div>

        </div>
    );
}

export default MainSlick;