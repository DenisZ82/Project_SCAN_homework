import React, { useState, useEffect } from "react";

import "../stylse/Search.css"

function SearchDates({fromDate, setFromDate, toDate, setToDate}) {
    const [inputFromDate, setInputFromDate] = useState('text');
    const [inputToDate, setInputToDate] = useState('text');

    const [error , setError] = useState('');

    function validateDates() {
        const validFromDate = new Date(fromDate);
        const validToDate = new Date(fromDate);
        const today = new Date();

        let error = {
            message:''
        }

        if (!fromDate || !toDate) {
            error.message = 'Обязательное поле';
        } else if (validFromDate > validToDate) {
            error.message = 'Введите корректные данные';
        } else if (validFromDate > today || validToDate > today) {
            error.message = 'Введите корректные данные';
        } else {
            error.message = '';
        }
        setError(error.message);
    };

    useEffect(
        () => {validateDates()},
        [fromDate, toDate]
    );

    return(
        <div className="search-dates">
            <p>Диапазон поиска
                <span className={error ? "asterisk-err" : ""}>*</span>
            </p>
            <div className="dates-input">
                <input 
                    className={ error ? "enter-txt-err" : "enter-txt" }
                    type={ inputFromDate }
                    onFocus={() => setInputFromDate('date')}
                    onBlur={() => { if(!fromDate) {setInputFromDate('text')} } }
                    value={ fromDate }
                    onChange = {event => setFromDate(event.target.value)}
                    placeholder={ "Дата начала" }
                />
                <input 
                    className={ error ? "enter-txt-err" : "enter-txt" }
                    type={ inputToDate }
                    onFocus={() => setInputToDate('date')}
                    onBlur={() => { if(!toDate) {setInputToDate('text')} } }
                    value={ toDate }
                    onChange = {event => {setToDate(event.target.value); console.log(Number(event.target.value))}}
                    placeholder={ "Дата конца" }
                />
            </div>
            {error && <div className="search-error-txt">{error}</div>}
        </div>
    )
}

export default SearchDates;