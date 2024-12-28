import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect , useState } from "react";

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
            maxCompleteness : false,
            businessMentions : false,
            mainRole : false,
            riskFactorsOnly : false,
            includeMarketNews : true,
            includeAnnouncements : true,
            includeNewsSummaries : true,
        });
    const [valid, setValid] = useState(false);

    const navigate = useNavigate();

    useEffect( () => {
        const isValid = companyINN && numOfDoc && fromDate && toDate;
        setValid(isValid);
        // console.log('useEffect', checkbox);
    } , [companyINN , numOfDoc, fromDate, toDate , checkbox] );

    function checkboxChange(event) {
        const { name, checked } = event.target;
        setCheckbox( prevState => (
            {
                ...prevState,
                [name]: checked,
            }) );
        // console.log(name, checked);
        // console.log(checkbox);
    };

    async function submit(event) {
        event.preventDefault();

        let apiTonality;
        switch (tone) {
            case 'Любая':
                apiTonality = 'any';
                break;
            case 'Позитивная':
                apiTonality = 'positive';
                break;
            case 'Негативная':
                apiTonality = 'negative';
                break;
            default:
                apiTonality = 'any';
        }

        if (valid) {
            const searchRequest = {
                issueDateInterval : {
                    startDate : `${fromDate}T00:00:00+03:00` ,
                    endDate : `${toDate}T23:59:59+03:00`
                } ,
                searchContext : {
                    targetSearchEntitiesContext : {
                        targetSearchEntities : [{
                            type : "company" ,
                            inn : companyINN ,
                            maxFullness : checkbox.maxCompleteness ,
                        }] ,
                        onlyMainRole : checkbox.mainRole ,
                        tonality : apiTonality ,
                        onlyWithRiskFactors : checkbox.riskFactorsOnly ,
                    }
                } ,
                attributeFilters : {
                    excludeTechNews : !checkbox.includeMarketNews ,
                    excludeAnnouncements : !checkbox.includeAnnouncements ,
                    excludeDigests : !checkbox.includeNewsSummaries ,
                } ,
                limit : Number( numOfDoc ) ,
                sortType : "sourceInfluence" ,
                sortDirectionType : "desc" ,
                intervalType : "month" ,
                histogramTypes : ["totalDocuments" , "riskFactors"]
            };

            console.log('POST-запрос:', searchRequest);

            navigate('/results', {state: { searchRequest: searchRequest }});
        } else {
            console.log('Форма не валидна, перенаправление не выполнено.');
        }
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
                <form className="search-form" onSubmit={ submit }>
                    <div className="form-input">
                        <SearchINN companyINN={ companyINN } setCompanyINN={ setCompanyINN }/>
                        <SearchTonality tone={ tone } setTone={ setTone }/>
                        <SearchNumOfDoc numOfDoc={ numOfDoc } setNumOfDoc={ setNumOfDoc } />
                        <SearchDates fromDate={ fromDate } setFromDate={ setFromDate } 
                            toDate={ toDate } setToDate={ setToDate } />
                    </div>

                    <div className="form-checkbox">
                        <SearchCheckbox checkbox={checkbox} checkboxChange={checkboxChange}/>
                            <button className="form-checkbox-but" type="submit" disabled={!valid}>
                                Поиск</button>
                            <p className="asterisk-node">* Обязательные к заполнению поля</p>
                    </div>
                </form>

                <img src={ bunner_search } className="bunner_search"/>
            </div>
        </div>
    )
}

export default Search;