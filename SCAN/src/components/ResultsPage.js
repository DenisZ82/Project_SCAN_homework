import React, { useState , useEffect } from 'react';
import  { useLocation } from 'react-router-dom';

import { AUTH_URL } from "../http/index_http";
import ResultsUploading from "./ResultsUploading";
import ResultsUpTable from "./ResultsUpTable";
import ResultsArticles from "./ResultsArticles";

import "../stylse/ResultsPage.css"

function ResultsPage() {
        const location = useLocation();
        const [loader, setLoader] = useState (true);
        const [resultsData, setSearchData] = useState (null);
        const [documents, setDocuments] = useState(null);
        const [error, setError] = useState(false);

        useEffect (() => {
            const searchResults = async() => {
                const searchRequest = location.state?.searchRequest;
                if(!searchRequest) {
                    console.error('Параметры поиска отсутствуют');
                    setLoader(false);
                    return;
                }

                setLoader(true);
                setError(false);

                try {
                    const histogramResponse = await fetch ( `${AUTH_URL}/objectsearch/histograms` , {
                        method : 'POST' ,
                        headers : {
                            'Content-Type' : 'application/json' ,
                            'Authorization' : `Bearer ${localStorage.getItem ( 'token' )}` ,
                        } ,
                        body : JSON.stringify ( searchRequest ) ,
                        credentials : 'omit' ,
                    } );

                    if (!histogramResponse.ok) {
                        throw new Error ( `HTTP error! status: ${histogramResponse.status}` );
                    }

                    const histogramData = await histogramResponse.json ();

                    const publicationIdsResponse = await fetch ( `${AUTH_URL}/objectsearch` , {
                        method : 'POST' ,
                        headers : {
                            'Content-Type' : 'application/json' ,
                            'Authorization' : `Bearer ${localStorage.getItem ( 'token' )}` ,
                        } ,
                        body : JSON.stringify ( searchRequest ) ,
                        credentials : 'omit' ,
                    } );

                    if (!publicationIdsResponse.ok) {
                        throw new Error ( `HTTP error! status: ${publicationIdsResponse.status}` );
                    }

                    const publicationIdsData = await publicationIdsResponse.json ();
                    const publicationIds = publicationIdsData.items.map ( item => item.encodedId );

                    console.log ( "количество публикаций:" , publicationIds.length );

                    const documentsResponse = await fetch ( `${AUTH_URL}/documents` , {
                        method : 'POST' ,
                        headers : {
                            'Content-Type' : 'application/json' ,
                            'Authorization' : `Bearer ${localStorage.getItem ( 'token' )}` ,
                        } ,
                        body : JSON.stringify ( { ids : publicationIds } ) ,
                        credentials : 'omit' ,
                    });

                    if (!documentsResponse.ok) {
                        throw new Error ( `HTTP error! status: ${documentsResponse.status}` );
                    }

                    const documents = await documentsResponse.json ();
                    setSearchData ( histogramData );
                    setDocuments ( documents );
                } catch (error) {
                    console.error ( "Ошибка при выполнении запроса:" , error.message );
                    setError ( true );
                } finally {
                    setLoader ( false );
                }
            };

            searchResults();

        }, [JSON.stringify(location.state?.searchRequest)]);

    return(
        <div className="results">
            { loader && <ResultsUploading loader={ loader } error={ error } setLoader={ setLoader }/> }
            { !loader && error && <ResultsUploading loader={ loader } error={ error } setLoader={ setLoader }/> }
            { !loader && !error && 
                <>
                    <ResultsUpTable resultsData={ resultsData } error={ error } />
                    <ResultsArticles documents={ documents } />
                </> 
            }

        </div>
    );
}

export default ResultsPage;