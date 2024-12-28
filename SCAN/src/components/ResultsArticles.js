import React, { useState, useEffect } from 'react';

import ResultsCard from "./ResultsCard";
import DeviceDetect from "./DeviceDetect.js";

import "../stylse/ResultsPage.css"
import articls_img_1 from "../images/articls_img_1.png"
import articls_img_2 from "../images/articls_img_2.png"
import articls_img_mob_1 from "../images/articls_img_mob_1.png"
import articls_img_mob_2 from "../images/articls_img_mob_2.png"

function ResultsArticles({ documents }) {
    const [articles, setArticles] = useState([]);
    const [numberArticles, setNumberArticles] = useState(2);
    const { isMobile } = DeviceDetect();

    useEffect(() => {
      if (documents && Array.isArray(documents)) {
        const modifiedData = documents.map((doc, index) => ({
          date: new Date(doc.ok.issueDate).toLocaleDateString("ru-RU"),
          url: doc.ok.url,
          sourceName: doc.ok.source.name,
          isTechNews: doc.ok.attributes.isTechNews,
          isAnnouncement: doc.ok.attributes.isAnnouncement,
          isDigest: doc.ok.attributes.isDigest,
          title: doc.ok.title.text,
          content: doc.ok.content.markup,
          wordCount: doc.ok.attributes.wordCount,
          // picture: index % 2 === 0 ? articls_img_1 : articls_img_2
          picture: !isMobile ? index % 2 === 0 ? articls_img_1 : articls_img_2 : 
                   index % 2 === 0 ? articls_img_mob_1 : articls_img_mob_2
        }));
        console.log(modifiedData);
        setArticles(modifiedData);
      }
    }, [documents]);

    const showCards = () => {
      setNumberArticles(prev => prev + 2);
    };

    return(
        <div className="articles">
            <div className="articles-txt">Список документов</div>

            <div className="articles-block">
                {articles.slice(0, numberArticles).map((article, index) => 
                <ResultsCard key={index} {...article} />)}
            </div>
            {numberArticles < articles.length && (
                <div className="button-div">
                <button className="button-show-cards" onClick={showCards}>Показать больше</button>
                </div>
            )}
        </div>
    );
}

export default ResultsArticles;