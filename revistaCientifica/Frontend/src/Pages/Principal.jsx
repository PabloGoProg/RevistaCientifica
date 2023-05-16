import {ArticleCard} from '../Components/ArticleCard'   
import '../Styles/Principal.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export function Principal(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/api/articles')
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p></p>;
    }

    return (
        <section className='main_content_principal'>
        {data.map(article => (
            <ArticleCard tittle={article.titulo} desc={article.resumen} ruta={"src/docs/algorithms.pdf"}/>
        ))}
        </section>
    );
}