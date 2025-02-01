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
            <Link to={"/Discover"}className="divLink">Discover</Link>
            <Link to={"/Join"} className="divLink">Join</Link>   

            </div>
        </nav>
    )

}
export default Navbar 
