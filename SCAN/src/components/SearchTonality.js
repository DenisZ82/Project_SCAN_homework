import React from "react";

import "../stylse/Search.css";
import arrowSvg from '../images/select_arrow.svg';

function SearchTonality({ tone, setTone }) {

    return(
        <div className="search-tone">
            <p className="form-txt">Тональность</p>
            <div className="tone-select">
                <select value={tone} onChange={(e) => setTone(e.target.value)}>
                    <option>Любая</option>
                    <option>Позитивная</option>
                    <option>Негативная</option>
                </select>
                {/* <img src={arrowSvg} alt="Arrow" style={{ position: 'absolute', right: '1rem', top: '30%' }} /> */}
            </div>
        </div>
    )
}

export default SearchTonality;