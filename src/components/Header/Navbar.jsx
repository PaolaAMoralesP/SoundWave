import logo from "../../assets/logo.svg"
import { Link } from "react-router"

function Navbar() {

    return (
        < nav className="navbar-container">
            <div className="divLogo">
                <img className="logoSoundwave" src={logo} alt="Soundwave logo" />
                <p>Soundwave</p>
            </div>
            <div className="divPages">
            <Link to={"/src/pages/Discover.jsx"}>Discover</Link>
            <Link to={"/src/pages/Join.jsx"}>Join</Link>
               
                
            </div>
        </nav>
    )

}
export default Navbar 
