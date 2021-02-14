import './ListeRepertoires.scss';
import RepertoireSignets from './RepertoireSignets.jsx';
import tabRepertoires from './data/repertoires.json';

export default function ListeRepertoires(props) {

    //console.log(props);
    //console.log(tabRepertoires);

    return(
        <div className="ListeRepertoires">
            {
                tabRepertoires.map(prd => 
                    <RepertoireSignets nom={prd.nom} couleur={prd.couleur} dateModif={prd.date_modif} id={prd.id} etatSignet={props[1]} />  
                )
            }
        </div>
    );
}
