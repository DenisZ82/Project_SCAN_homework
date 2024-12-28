import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { combineDataByDate } from './ResultFormat'
import DeviceDetect from "./DeviceDetect.js";

import "../stylse/ResultsPage.css"

function ResultsUpTable({ resultsData, error }) {
    const { isMobile } = DeviceDetect();
    // Настройки react-slick
    let sliderRef = useRef(null);
    const next = () => { sliderRef.slickNext(); };
    const previous = () => { sliderRef.slickPrev(); };
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: !isMobile ? 8 : 1,
        slidesToScroll: !isMobile ? 2 : 1,
        focusOnSelect: true,
        swipeToSlide: true,
      };
    // -------------------

    const [results , setResults] = useState([]);
    const [countResults , setCountResults] = useState(0);

    useEffect(() => {
        if (resultsData && !error) {
            const totalDocuments = resultsData.data.find(histogram => histogram.histogramType === 'totalDocuments');
            if (totalDocuments) {
                const total = totalDocuments.data.reduce((acc , item) => acc + item.value, 0);
                setCountResults(total);
            }

            const combined = combineDataByDate(resultsData.data);
            setResults(combined);
        }
    }, [resultsData, error]);

    return(
        <div>
            <div className="upload-block with-results">
                <div className="upload-block-txt">Общая сводка</div>
                <div className="upload-block-note">Найдено {countResults} вариантов</div>
                <div className="results-table">
                    <button className="scroll-btn-left" onClick={previous}></button>
                    <div className="upload-table upload-results">
                        <div className="table-headers">
                            <div>Период</div>
                            <div>Всего</div>
                            <div>Риски</div>
                        </div>
                        
                        <div className="table-dataset">
                        <Slider ref={slider => {sliderRef = slider;}} {...settings}>
                            {results.map( (item , index) => (
                                <div key={index} className="data-block">
                                    <div className="data-column">
                                        <div className="table-row">{item.period}</div>
                                        <div className="table-row">{item.total}</div>
                                        <div className="table-row">{item.risks}</div>
                                    </div>
                                    <div className="line"></div>
                                </div>
                            ) )}
                        </Slider>
                        </div>
                    </div>
                    <button className="scroll-btn-right" onClick={next}></button>
                </div>
            </div>
        </div>
    )
}

export default ResultsUpTable;