import React from "react";

import "../stylse/Search.css"

function SearchCheckbox({ checkbox , checkboxChange }) {

    return(
        <div>
            <label className="container">Признак максимальной полноты
                <input type="checkbox" 
                    name="maxCompleteness"
                    checked={ checkbox['maxCompleteness'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["maxCompleteness"] ? "checkmark-on" : "checkmark"}></span>
            </label>

            <label className="container">Упоминания в бизнес-контексте
                <input type="checkbox" 
                    name="businessMentions"
                    checked={ checkbox['businessMentions'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["businessMentions"] ? "checkmark-on" : "checkmark"}></span>
            </label>

            <label className="container">Главная роль в публикации
                <input type="checkbox" 
                    name="mainRole"
                    checked={ checkbox['mainRole'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["mainRole"] ? "checkmark-on" : "checkmark"}></span>
            </label>

            <label className="container">Публикации только с риск-факторами
                <input type="checkbox" 
                    name="riskFactorsOnly"
                    checked={ checkbox['riskFactorsOnly'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["riskFactorsOnly"] ? "checkmark-on" : "checkmark"}></span>
            </label>

            <label className="container">Включать технические новости рынков
                <input type="checkbox" 
                    name="includeMarketNews"
                    checked={ checkbox['includeMarketNews'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["includeMarketNews"] ? "checkmark-on" : "checkmark"}></span>
            </label>

            <label className="container">Включать анонсы и календари
                <input type="checkbox" 
                    name="includeAnnouncements"
                    checked={ checkbox['includeAnnouncements'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["includeAnnouncements"] ? "checkmark-on" : "checkmark"}></span>
            </label>

            <label className="container">Включать сводки новостей
                <input type="checkbox" 
                    name="includeNewsSummaries"
                    checked={ checkbox['includeNewsSummaries'] }
                    onChange={ checkboxChange }
                />
                <span className={ checkbox["includeNewsSummaries"] ? "checkmark-on" : "checkmark"}></span>
            </label>
        </div>
    )
}

export default SearchCheckbox;