import './styles.css'
import { ReactComponent as Youtubeicon} from './youtube.svg'; 
import { ReactComponent as Linkedinicon} from './linkedin.svg'; 
import { ReactComponent as Instagramicon} from './instagram.svg'; 


function Footer() {
    return (
        <footer className="main-footer">
          App desenvolvido durante a 2ª ed. do evento Semana DevSuperior  
          <div className="footer-icons">
            <a href="https://www.youtube.com/channel/UCcdIjSzSt4J_1vpmotg6rYQ" target="_new">    
            <Youtubeicon/>
            </a>
            <a href="https://www.linkedin.com/in/matheus-gonzaga-a7aa5a1b5/" target="_new">
            <Linkedinicon/>
            </a>
            <a href="https://www.instagram.com/matheusgonzaaga/" target="_new">
            <Instagramicon/>
            </a>
          </div>
        </footer>
    )
}

export default Footer;