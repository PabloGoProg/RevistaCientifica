import {Button} from "./Button";

export function RowTableEditor({id, name, autor = "N/A", estado = "No aceptado"}){
    
    const handleButton = (id) => {
        if (id){
            axios.delete('http://localhost:3000/api/articles/'+id_real).then(response =>{
                location.reload();
                console.log(response)
                })
                .catch(error => {console.log(error)})
                    console.log(id)           
                }
    }    

    const article_id = parseInt({id})
    return( 
        <tr>
            <td>{name}</td>
            <td>{autor}</td>
            <td>{estado}</td>
            <td><Button handleClick={handleButton} id = {article_id} text = "Aceptar"/><Button id= {id} text = "Rechazar"/></td>
        </tr>
    );
}