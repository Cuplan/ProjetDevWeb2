import {Link} from 'react-router-dom'
import '../styles/naruto-theme.css'; 
import { useTeam } from '../Controleurs/TeamContext';

// NavBar comme dans l'exemple du projet sur MVC react 
// ICI VENIR FIX LES BOUTONS ! 
export default function NavBar() {
  
  const {team} = useTeam(); 

    return (
        <nav className="navbar navbar-expand-lg navbar-naruto">
          <div className="container-fluid">
            <Link className="nav-link navbar-brand" to="/">Page d'accueil</Link>

            <div className=" navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/ninjas">Liste des ninjas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">Votre team !
                  <span className='badge bg-warning ms-1'>{team.length}</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      );
}