import "./icon_button.css";


function Icon_button ({ icon, label = "Icon" }){
    

    return (
    
    <div className="icon_button">
        <img src={icon}/>
        <p className="icon_label">{label}</p>
    </div> 
    )
    
    }
    export default Icon_button 