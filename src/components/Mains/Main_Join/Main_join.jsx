import "./main_join.css"

import Circle1 from "../../Circles/Circle1"
import Circle2 from "../../Circles/Circle2"

import Input_form from "../../Input_form/Input_form"

function Main_Join() {

    return (
        <main className="formComponent">
            <h3>Join the <span>fun.</span></h3>
           
            
            <Input_form />
           
            <Circle1 />
            <Circle2 />

        </main>
    )

}
export default Main_Join

