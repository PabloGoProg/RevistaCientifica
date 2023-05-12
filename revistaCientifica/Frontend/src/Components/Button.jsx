import '../Styles/Button.css'

export function Button({text, onClickFunction=null}){
    return(
        <button onClick={onClickFunction} className='generalButton'>
            {text}
        </button>
    );
}