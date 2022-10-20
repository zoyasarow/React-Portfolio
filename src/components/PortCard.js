import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/portCard.css"

const PortfolioCard = (props) => {
  return (  
    <div className={`card-port text-center ${props.id}`} id="card-port">
    <img src={props.image} className="card-img-top" alt={props.title}/>
    <div className="card-body-port">
        <h5 className="port-title">{props.title}</h5>
        <p className="port-text">{props.description}</p>
    </div>
    <div className="card-body-port">
        <a href={props.prod} className="card-link-port"><FontAwesomeIcon icon={faChrome}/></a>
        <a href={props.repo} className="card-link-port"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
    </div>

  );
}

export default PortfolioCard; 

