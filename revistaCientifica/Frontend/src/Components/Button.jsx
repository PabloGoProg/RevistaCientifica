import '../Styles/Button.css'
import axios from 'axios'

export function Button({handleClick, id, text}){
    const id_real = parseInt(id)
    
    return(
        <button onClick={handleClick} 
        className='generalButton'
        type='submit'>
            {text}
        </button>
    );
}