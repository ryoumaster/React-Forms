import { useState } from "react";

function Form(){
    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Ola, ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome: 
                <input type="text" onChange={handleChange} value={name}></input>
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form