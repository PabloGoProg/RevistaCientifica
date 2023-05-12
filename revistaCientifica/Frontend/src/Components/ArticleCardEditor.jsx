import { ArticleCard } from "./ArticleCard";
import { Button } from "./Button";
import '../Styles/ArticleCardEditor.css';

export function ArticleCardEditor(){
    return(
        <section className="content_cardEditor">
            <ArticleCard/>
            <div className="button_div">
            <Button text={'Aceptar'}/>
            <Button text={'Eliminar'}/>
            </div>
            
        </section>
    );
}