import React, {useState, useEffect} from 'react';
import logo from './assets/logoDev.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import TOP5 from './components/TOP5/Top5';
import Hits from './components/Hits/index';
import api from './services/api';
import './style.css';



function App() {
  const [cliques, setCliques] = useState(0);
  const [btnDescription, setButtonDescription] = useState(false);
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => { 
    if(url === '')setButtonDescription(false);
    getJson();
  }, [url]);

  const getJson = () => {
    fetch('./db.json').then(response => {
      return response.json();
    }).then(data => {
      setData(data.encurtada)
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
  } 



  const onhandleClique = (e) =>{
    e.preventDefault();
    setCliques(cliques + 1)

    if(api.get()){
      console.log("achei")
    }else{
      console.log("não encontrei")
    }
    

    onUrlEncurtada();
  }

  const onUrlEncurtada = () => {
    let url = 'http://chr.dc/';
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for(var i = 0; i < 6; i++){
      url += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    setUrl(url);
    setButtonDescription(true);
  }

  const copy = () => {
    document.getElementById('urlEncurtada').select();
    document.execCommand('copy');
  }

  const apagar = () => {
    setUrl("");
    setButtonDescription(false);
  }

  return (
    <>                     
    <header>
      <img src={logo} className="logo" alt=""/>
    </header>
    <section>
        <div className="encurtador">
            <div className="row">
                <div className="conteudo">
                    <h2 className="titulo-text">Encurte seus links.</h2>
                    <p className="highlight">
                    Links são longos. Encurte os links que você deseja compartilhar, 
                        e acompanhe enquanto viajam através da internet.
                    </p>
                 
                    <form onSubmit={onhandleClique}>
                        <div className="url_encurtada">
                          <input id="urlEncurtada" type="text" placeholder="Cole o seu link aqui" value={url}  onChange={e => setUrl(e.target.value)} className="input-link" required/>
                           {btnDescription ? <div className="url"> <FontAwesomeIcon onClick={apagar} icon={faTimes} className="icon"/>
                             <button type="button" onClick={copy} className="btn">Copiar</button> </div> 
                             : <button type="submit"  className="btn">Encurtar</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <TOP5 data={data}/>
    <Hits cliques={cliques}/>
    <div className="footer">
      <div className="text-logo">
        <p>chr.dc</p>
      </div>
      <div className="redes-sociais">
        <FontAwesomeIcon icon={faTwitter} className="icon-sociais"/>
        <FontAwesomeIcon icon={faFacebook} className="icon-sociais"/>
      </div>     
    </div>
    </>
  );
}

export default App;
