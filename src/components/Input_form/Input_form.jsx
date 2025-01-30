import "./input_form.css";
// import Button from "../Button/Button"


import { useForm } from "react-hook-form";

function Input_form() {
    function insert() { }

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <form onSubmit={handleSubmit(insert)}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                placeholder="write full Name"
                {...register("name", {
                    required: true,
                    minLength: 10,
                    maxLength: 30,
                })}
            ></input>

            {errors.name?.type === "required" && (
                <p className="errors">💩Insert a FullName</p>
            )}
            {errors.name?.type === "minLength" && (
                <p className="errors">💩Name required minimum 10 characters</p>
            )}
            {errors.name?.type === "maxLength" && (
                <p className="errors">💩Maximum lenght is 30 characters</p>
            )}

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" placeholder="name@mail.com"
                {...register("email", {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, required: true
                })}
            ></input>
            {errors.email?.type === "pattern" && (
                <p className="errors">💩The format of the email is invalid</p>
            )}
            {errors.email?.type === "required" && (
                <p className="errors">💩The email is required</p>
            )}

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="password"
             {...register("password", {
                required: true,
                minLength: 7,
                pattern: { value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/}

            })}
            ></input>
            {errors.password?.type === "required" && (
                <p className="errors">💩Password need to content minimum 6 characters</p>
            )}
             {errors.password?.type === "pattern" && (
                <p className="errors">💩The password need at least 1 uppercase, 1 number and 1 sign</p>
            )}

            <button type="submit">Join Now2</button>
        </form>
    );
}
export default Input_form;
