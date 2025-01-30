import "./main_join.css"

import Circle1 from "../../Circles/Circle1"
import Circle2 from "../../Circles/Circle2"
import Button from "../../Button/Button"

function Main_Join() {

    return (
        <main>
            <h3>Join the fun.</h3>
            <Circle1 />
            <Circle2 />
            <form>
                {/* <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"></input>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"></input>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password"></input>
                <br></br> */}
                <Button />

            </form>

        </main>
    )

}
export default Main_Join

