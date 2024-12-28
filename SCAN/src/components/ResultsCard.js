import React, { useState, useEffect } from 'react';

import "../stylse/ResultsPage.css"

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function cleanHtmlContent(htmlContent) {
    const decodedHtml = decodeHtml( htmlContent );
    const cleanedContent = decodedHtml.replace(/(<([^>]+)>)/gi, "");
    return cleanedContent;
}

function ResultsCard(props) {
    const [cleanContent, setCleanContent] = useState('');

    useEffect( () => {
        setCleanContent(cleanHtmlContent( props.content ));
    }, [props.content]);

    const tagLabel = props.isTechNews ? "Технические новости" : props.isAnnouncement ? "Анонсы и события" : "Сводки новостей";

    // функция для кнопки, открывающая страницу на новой вкладке
    const button = (url) => { window.open(url, '_blank', 'noopener,noreferrer'); };

    return(
        <div className="articles-card">
            <div className="articles-date-source">
                <div className="articles-date">{ props.date }</div>
                <div className="articles-source">
                <a href={ props.url }>{ props.sourceName }</a>
                </div>
            </div>
            <div className="articles-title"> {props.title }</div>
            <div className="articles-theme">{ tagLabel }</div>
            <div className="articls-div-img">
                <img className="articls-img" src={ props.picture }/>
            </div>
            <p className="articls-preview">{ cleanContent }</p>
            <div className="articls-footer">
                <button className="articls-card-but" onClick={() => button(props.url)}>
                Читать в источнике</button>
                <div className="articls-num-words">{ props.wordCount } слов</div>
            </div>
        </div>
    );
}

export default ResultsCard;