import { useNavigate } from 'react-router-dom';
import '../Styles/ReactiveIcon.css';

export function ReactiveIcon({link, srcImg}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  }
  
  return(
    <article>
      <figure>
        <img className='ri-image' onClick={handleClick}
        src={srcImg}
        alt="Avatar de la persona" />
      </figure>
    </article>
  )
}