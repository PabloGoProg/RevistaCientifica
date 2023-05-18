import { Profile } from "./Profile";
import '../Styles/ArticleCard.css'
import { saveAs } from 'file-saver';

export function ArticleCard({tittle, name, desc, ruta}){
    const handleDownload = async () => {
        try {
          const pdfBlob = await fetch(`http://localhost:3000${ruta}`).then((res) => res.blob());
          saveAs(pdfBlob, `${tittle}.pdf`);
        } catch (error) {
          console.error(error);
        }
    };
    
    return(
        <section className="card_content" onClick={handleDownload}>
            <span>
                {tittle}
            </span>
            <Profile name = {name} desc = {desc}/>
        </section>
    );
}