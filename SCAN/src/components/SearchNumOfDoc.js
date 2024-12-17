import React, { useState, useEffect } from "react";

function SearchNumOfDoc({ numOfDoc, setNumOfDoc }) {

    const [error , setError] = useState('');

    function validateNumOfDoc() {
        let error = {
            message:''
        }

        const countDoc = parseInt(numOfDoc, 10);

        if (!numOfDoc) {
            error.message = 'Обязательное поле';
        } else if (isNaN(countDoc) || countDoc < 1) {
            error.message = 'Введите корректные данные';
        } else if (countDoc > 1000) {
            error.message = 'Введите число не более 1000';
        } else {
            error.message = '';
        }
        setError(error.message);
    };

    useEffect(
        () => {validateNumOfDoc(numOfDoc)},
        [numOfDoc]
    );

    return (
        <div className="search-num-doc">
            <p className="form-txt">Количество документов в выдаче 
            <span className={error ? "asterisk-err" : ""}>*</span>
            </p>
            <input 
                className={ error ? "enter-txt-err" : "enter-txt" }
                type="number"
                value={ numOfDoc }
                onChange = {event => setNumOfDoc(event.target.value)}
                placeholder={"От 1 до 1000"}
            />
            {error && <div className="search-error-txt">{error}</div>}
        </div>
    )
}

export default SearchNumOfDoc;