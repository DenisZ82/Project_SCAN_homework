import React from "react";
import { Link } from "react-router-dom";
import {useEffect , useState} from "react";

import SearchINN from "./SearchINN";
import SearchTonality from "./SearchTonality";
import SearchNumOfDoc from "./SearchNumOfDoc";
import SearchDates from "./SearchDates";
import SearchCheckbox from "./SearchCheckbox";

import "../stylse/Search.css"
import search_document from "../images/search_document.svg"
import search_folders from "../images/search_folders.svg"
import bunner_search from "../images/bunner_search.svg"

function Search() {
    const [companyINN, setCompanyINN] = useState('');
    const [tone, setTone] = useState('Любая');
    const [numOfDoc, setNumOfDoc] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [checkbox, setCheckbox] = useState( {
            maxCompleteness : false ,
            businessMentions : false ,
            mainRole : false ,
            riskFactorsOnly : false ,
            includeMarketNews : true ,
            includeAnnouncements : true ,
            includeNewsSummaries : true ,
        });

    const [valid, setValid] = useState(false);
    
    useEffect ( () => {
        const isValid = companyINN && numOfDoc && fromDate && toDate;
        setValid ( isValid );
    } , [companyINN , numOfDoc, fromDate, toDate , checkbox] );

    function checkboxChange(event) {
        const { name, checked } = event.target;
        setCheckbox( prevState => (
            {
                ...prevState,
                [name]: checked,
            }) );
        console.log(checkbox, name, checked);
    };

    return(
        <div className="search">
            <div className="search-title">
                <div>
                    <div className="search-txt">найдите необходимые<br /> данные в пару кликов.</div>
                    <div className="search-note">Задайте параметры поиска.<br />
                     Чем больше заполните, тем точнее поиск</div>
                </div>
                <img src={ search_document } className="search_document"/>
                <img src={ search_folders } className="search_folders"/>
            </div>

            <div className="search-block">
                <div className="search-form">
                    <div className="form-input">
                        <SearchINN companyINN={ companyINN } setCompanyINN={ setCompanyINN }/>
                        <SearchTonality tone={ tone } setTone={ setTone }/>
                        <SearchNumOfDoc numOfDoc={ numOfDoc } setNumOfDoc={ setNumOfDoc } />
                        <SearchDates fromDate={ fromDate } setFromDate={ setFromDate } 
                            toDate={ toDate } setToDate={ setToDate } />
                    </div>

                    <div className="form-checkbox">
                        <SearchCheckbox checkbox={checkbox} checkboxChange={checkboxChange}/>
                    </div>
                </div>

                <img src={ bunner_search } className="bunner_search"/>
            </div>
        </div>
    )
}

export default Search;