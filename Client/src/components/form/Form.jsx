import { useState } from "react";
import { validate } from "./validation";

function Form(props) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...userData,
            [e.target.name]: e.target.value
        }))
      
    }
    const handlerSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <form onSubmit={handlerSubmit} style={{ backgroundColor: "white" }}>
                <label>Email: </label>
                <input
                    name="email"
                    value={userData.email}
                    type="text"
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>
                    {errors.email ? errors.email : null}
                </p>
                <label>Password: </label>
                <input
                    name="password"
                    value={userData.password}
                    type="password"
                    onChange={handleChange}
                />
                <hr />
                <button
                    type="submit"
                    disabled={errors.email || errors.name || errors.password}
                >Enviar</button>
            </form>
        </div>
    )
}

export default Form;