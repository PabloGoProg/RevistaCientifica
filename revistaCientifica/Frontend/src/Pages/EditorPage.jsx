import React, { useState, useEffect } from 'react';
import { TablaEditor } from '../Components/TablaEditor'
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
            <TablaEditor data= {data.map(article => (
                <tr>
                    <td>{article.titulo}</td>
                    <td><EtiquetaTexto texto="Tecnología"/></td>
                    <td>{'En espera'}</td>
                    <td><input type="checkbox" /></td>
                </tr>
            ))}/>
        </section>
    );
}
