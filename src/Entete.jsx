import './Entete.scss'
import Badge from '@material-ui/core/Badge';

export default function Entete(props){

    return(
        <header className="Entete">
            <div className="logo">Sign-È</div>

            <ul className="navUtilisateurs">
                <li>
                    <p>
                        Mickyelloow
                    </p>
                </li>
                <li>
                    <img width="64em" height="auto" src={"image-usager/icon_secret.png"} alt=""/>
                </li>
            </ul>
        </header>
    );
}