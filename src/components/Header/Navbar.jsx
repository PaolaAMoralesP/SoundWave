import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        < nav className="navbar-container">
            <div className="divLogo">
            <Link to={"/"}>
                <img className="logoSoundwave" src={logo} alt="Soundwave logo" /></Link>
                <p>Soundwave</p>
            </div>
            <div className="divPages">
            <Link to={"/Discover"}style={{ textDecoration: 'none'}}>Discover</Link>
            <Link to={"/Join"} style={{ textDecoration: 'none'}}>Join</Link>   
                
            </div>
        </nav>
    )

}
export default Navbar 
