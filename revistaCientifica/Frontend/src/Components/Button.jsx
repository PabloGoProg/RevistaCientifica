import '../Styles/Button.css'
import axios from 'axios'

export function Button({id, text}){
    const id_real = parseInt(id)
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

    return(
        <button onClick={handleButton} className='generalButton'>
            {text}
        </button>
    );
}