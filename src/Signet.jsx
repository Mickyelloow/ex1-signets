import './Signet.scss';

export default function Signet(props) {

    /*console.log(props);
    const [signet, setSignet] = props.etatSignet;*/

    console.log("props de signet: ", props);
    const {nom, date, url, id} = props;

    return(
        <li className="Signet">
            <img src={"images-signets/" + props.id + ".jpg"} alt=""/>
            <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="date">{props.date}</p>
                <p className="url">{props.url}</p>
            </div>
        </li>
    );
}
