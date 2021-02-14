import './Appli.scss';
import {useState} from 'react';
import Entete from './Entete.jsx'
import ListeRepertoires from './ListeRepertoires.jsx';


export default function Appli() {

  const etatRepertoires = useState({});
  const etatSignets = useState({});

  return (
    <div className="Appli">
        <Entete />
        <ListeRepertoires etatRepertoires={etatRepertoires} etatSignets={etatSignets} />
    </div>
  );
}
