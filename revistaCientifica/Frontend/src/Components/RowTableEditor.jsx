import {Button} from "./Button";

export function RowTableEditor({id, name, autor = "N/A", estado = "No aceptado"}){
    const article_id = parseInt({id})
    return( 
        <tr>
            <td>{name}</td>
            <td>{autor}</td>
            <td>{estado}</td>
            <td><Button id = {article_id} text = "Aceptar"/><Button id= {id} text = "Rechazar"/></td>
        </tr>
    );
}