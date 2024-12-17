import React from "react";

import "../stylse/Search.css"

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
            </div>
        </div>
    )
}

export default SearchTonality;