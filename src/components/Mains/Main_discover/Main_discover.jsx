import "./main_discover.css"
import Icon_button from "../../Icon_button/Icon_button"
import iconMicrophone from "../../../assets/microphone.svg"
import iconAlbums from "../../../assets/albums.svg"
import iconMore from "../../../assets/more.svg"
import albumsPicture from "../../../assets/covers.jpg"

function Main_discover() {

    return (
        <main>
            <div className="content">
                <div className="contentLeft">
                    <h1>Discover new music</h1>
                    <div className="icons">
                        <Icon_button className="micro" icon={iconMicrophone} label="charts" />
                        <Icon_button className="albums" icon={iconAlbums} label="Albums" />
                        <Icon_button className="more" icon={iconMore} label="More" />
                    </div>
                    <p>By joining you can benefit by listening to the latest albums released.</p>
                </div>
                <div className="contentRight">
                    <img className="albumsPicture" src={albumsPicture} alt="Image of famous albums" />
                </div>
            </div>

        </main>
    )

}

export default Main_discover