import "./main.css"
import girlImage from "../../../assets/landing-page-girl.png"
import Button from "../../Button/Button"
import Circle1 from "../../Circles/Circle1"
import Circle2 from "../../Circles/Circle2"
import Circle3 from "../../Circles/Circle3"

function Main() {

    return (
        <main>
            <Circle1/>
            <Circle2/>
            <Circle3/>
            <div className="divGirl">
                <img className="girlImage" src={girlImage} alt="Image of a afro-american girl" />
            </div>
            <div className="divText">
                <h1>Feel The Music</h1>
                <h6>Stream over 20 thousand songs with one click</h6>
                <Button type="button"/>
            </div>
        </main>
    )

}
export default Main 
