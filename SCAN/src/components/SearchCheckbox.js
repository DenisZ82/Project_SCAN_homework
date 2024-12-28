import React from "react";

import "../stylse/Search.css"
import form_mark from '../images/form_mark.svg';

function SearchCheckbox({ checkbox , checkboxChange }) {

    return(
        <div className="chckbox-list">
            <label className="container">
                <p className={ checkbox["maxCompleteness"] ? "" : "p-turn-on" }>Признак максимальной полноты</p>
                <input type="checkbox" 
                    name="maxCompleteness"
                    checked={ checkbox["maxCompleteness"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["maxCompleteness"] ? "checkmark-on" : "checkmark"}>
                { checkbox["maxCompleteness"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>

            <label className="container">
                <p className={ checkbox["businessMentions"] ? "" : "p-turn-on" }>Упоминания в бизнес-контексте</p>
                <input type="checkbox" 
                    name="businessMentions"
                    checked={ checkbox["businessMentions"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["businessMentions"] ? "checkmark-on" : "checkmark"}>
                { checkbox["businessMentions"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>

            <label className="container">
                <p className={ checkbox["mainRole"] ? "" : "p-turn-on" }>Главная роль в публикации</p>
                <input type="checkbox" 
                    name="mainRole"
                    checked={ checkbox["mainRole"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["mainRole"] ? "checkmark-on" : "checkmark"}>
                { checkbox["mainRole"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>

            <label className="container">
            <p className={ checkbox["riskFactorsOnly"] ? "" : "p-turn-on" }>Публикации только с риск-факторами</p>
                <input type="checkbox" 
                    name="riskFactorsOnly"
                    checked={ checkbox["riskFactorsOnly"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["riskFactorsOnly"] ? "checkmark-on" : "checkmark"}>
                { checkbox["riskFactorsOnly"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>

            <label className="container">
                <p className={ checkbox["includeMarketNews"] ? "" : "p-turn-on" }>
                Включать технические новости рынков</p>
                <input type="checkbox" 
                    name="includeMarketNews"
                    checked={ checkbox["includeMarketNews"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["includeMarketNews"] ? "checkmark-on" : "checkmark"}>
                { checkbox["includeMarketNews"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>

            <label className="container">
            <p className={ checkbox["includeAnnouncements"] ? "" : "p-turn-on" }>Включать анонсы и календари</p>
                <input type="checkbox" 
                    name="includeAnnouncements"
                    checked={ checkbox["includeAnnouncements"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["includeAnnouncements"] ? "checkmark-on" : "checkmark"}>
                { checkbox["includeAnnouncements"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>

            <label className="container">
            <p className={ checkbox["includeNewsSummaries"] ? "" : "p-turn-on" }>Включать сводки новостей</p>
                <input type="checkbox" 
                    name="includeNewsSummaries"
                    checked={ checkbox["includeNewsSummaries"] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["includeNewsSummaries"] ? "checkmark-on" : "checkmark"}>
                { checkbox["includeNewsSummaries"] ? 
                    <img src={form_mark} alt="Arrow" style={{ position: 'absolute' }}/> : 
                    <img /> }
                </span>
            </label>
        </div>
    )
}

export default SearchCheckbox;