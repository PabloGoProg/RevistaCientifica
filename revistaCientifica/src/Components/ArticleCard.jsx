import { Profile } from "./Profile";
import '../Styles/ArticleCard.css'

export function ArticleCard({tittle, name, desc}){
    return(
        <section className="card_content">
            <span>
                {tittle}
            </span>
            <Profile name = {name} desc = {desc}/>
        </section>
    );
}