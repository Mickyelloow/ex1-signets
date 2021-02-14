import './RepertoireSignets.scss';
import Signet from './Signet.jsx'
import tabSignets from './data/signets.json';

export default function RepertoireSignets(props) {
    //console.log(tabSignets);
    //console.log(props);

    const tabCouleurs = [
        ["#000000", "white"],
        ["#207FE3", "white"],
        ["#FF217E", "white"],
        ["#832EBC", "white"],
        ["#35B43F", "white"],
        ["#FDB229", "white"],
        ["#00ADD9", "white"],
        ["#E6171F", "white"],
        ["#FFFFFF", "black"]
    ];

    let tabNouveau = [];
    tabSignets.forEach(function(signet){
        if(signet.repertoire_id == props.id)
            tabNouveau.push(signet);
    })

    return(
        <div className="Repertoire" style={{backgroundColor: tabCouleurs[props.couleur][0], color: tabCouleurs[props.couleur][1]}}>
            <img className="ImgRepertoire" src={"images-repertoires/" + props.id + ".jpg"} alt=""/>
            <h2 className="Nom">{props.nom}</h2>
            <h3 className="DateModif">{props.dateModif}</h3>
            <ul className="ListeSignets">
                {tabNouveau.map(sgn => 
                    <Signet nom={sgn.nom} date={sgn.date} url={sgn.url} id={sgn.id} etatSignet={props}/>
                )}
            </ul>
        </div>
    );
}
