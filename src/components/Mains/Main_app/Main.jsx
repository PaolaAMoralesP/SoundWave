import "./main.css"
import girlImage from "../../../assets/landing-page-girl.png"
import Button from "../../Button/Button"

function Main() {

    return (
        <main>
            <div className="divGirl">
                <img className="girlImage" src={girlImage} alt="Image of a afro-american girl" />
            </div>
            <div className="divText">
                <h1>Feel The Music</h1>
                <h2>Stream over 20 thousand songs with one click</h2>
               <Button/>
            </div>
        </main>
    )

}
export default Main 
