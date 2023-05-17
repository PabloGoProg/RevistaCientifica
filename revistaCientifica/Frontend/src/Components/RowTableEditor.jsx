import {Button} from "./Button";
import axios from 'axios';

export function RowTableEditor({id, name, autor = "N/A", estado = "No aceptado"}){
    const id_real = id;
    const deleteEditorToArticle = (id) => {
        if (id){
            axios.patch('http://localhost:3000/api/articles/deleteEditor/'+id_real, {"editor_fk":null})
            .then(response =>{console.log(response.data)});
        }
    }    

    const addEditorToArticle = (id) => {
        if (id){
            axios.patch('http://localhost:3000/api/articles/addEditor/'+id_real, {"editor_fk":40})
            .then(response =>{console.log(response.data)});
        }
    }


    const article_id = parseInt({id})
    return( 
        <tr>
            <td>{name}</td>
            <td>{autor}</td>
            <td>{estado}</td>
            <td><Button handleClick={addEditorToArticle} id = {article_id} text = "Aceptar"/><Button handleClick={deleteEditorToArticle} id= {id} text = "Rechazar"/></td>
        </tr>
    );
}