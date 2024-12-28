import React, { useState, useEffect, useRef } from "react";

import "../stylse/ResultsPage.css"
import banner_results from "../images/banner_results.svg"
import rotation_animate from "../images/rotation_animate.svg"

function ResultsUploading({ loader, error }) {

    return (
        <div className="upload">
            <div className="upload-txt-img">
                <div>
                    { loader ? 
                        <><div className="upload-txt">Ищем. Скоро<br /> будут результаты</div>
                        <div className="upload-note">Поиск может занять некоторое время, <br />
                        просим сохранять терпение.</div></> : 
                    error && 
                        <><div className="upload-txt">ОЙ!<br /> </div>
                        <div className="upload-note">Что-то пошло не так.<br />
                            Попробуйте авторизоваться заново.</div></> }
                </div>
                <img className="banner-results" src={ banner_results }/>
            </div>

            <div className="upload-block">
                <div className="upload-block-txt">Общая сводка</div>
                <div className="upload-table">
                    <div className="table-headers">
                        <div>Период</div>
                        <div>Всего</div>
                        <div>Риски</div>
                    </div>
                    
                    <div className="table-warning">
                        <div><img className="rotation_animate" src={ rotation_animate }/></div>
                        { loader ? 
                            <div>Загружаем данные</div> :
                            error && <div>Ошибка сервера</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsUploading;