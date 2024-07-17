import { useState } from "react";

function Form2(){
    const [adress, setAdress] = useState({
        street: "",
        city: "",
        postalCode: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setAdress(estadoAnterior => ({
            ...estadoAnterior,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()//Impede que a tela seja recarregada

        if(!adress.street || !adress.city || !adress.postalCode){
            alert("Preencha todos os campos antes de submeter")
        }
        else {
            alert(`Endereço submetido: CEP: ${adress.postalCode}, Cidade: ${adress.city}, Rua: ${adress.street}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rua:
                <input type="text" name="street" onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Cidade:
                <input type="text" name="city" onChange={handleChange}></input>
            </label>
            <br/>
            <label>
                Codigo Postal:
                <input type="text" name="postalCode" onChange={handleChange}></input>
            </label>
            <br/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form2