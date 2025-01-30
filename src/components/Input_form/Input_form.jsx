import "./input_form.css"
import Button from "../Button/Button"
function Input_form() {

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Full Name"></input>
           
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="name@mail.com"></input>
           
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" placeholder="password"></input>
            <Button />

        </form>
    )

}
export default Input_form 