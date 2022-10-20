import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css';

const Footer = () => {
  return (  
    <div className="footer-container">
      <footer>
        <ul>
                <a href="https://github.com/zoyasarow" className="link-info"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/zoya-sarow-96547b115/?locale=ar_AE" className="link-info"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="mailto:zoyasarow@gmail.com" className="link-info"><FontAwesomeIcon icon={faEnvelope} /></a>  
        </ul>
      </footer>
    </div>   
  );
};

export default Footer;