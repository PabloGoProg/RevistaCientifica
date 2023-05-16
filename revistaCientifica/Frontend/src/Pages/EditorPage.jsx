import React, { useState, useEffect } from 'react';
import { TablaEditor } from '../Components/TablaEditor'
import { RowTableEditor } from '../Components/RowTableEditor';
import { EtiquetaTexto } from '../Components/EtiquetaTexto';
import axios from 'axios'

export function EditorPage(){
    
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

    console.log(data)

    if (loading) {
        return <p></p>;
    }
    
    return(
        <section>
            <h1>Artículos publicados</h1>
            <TablaEditor data= {data.map(article => (
                <RowTableEditor key={article.id_articulo} id= {article.id_articulo} name = {article.titulo} />
            ))}/>
        </section>
    );
}
