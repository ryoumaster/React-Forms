import { useState } from "react";
import "../components/Form3.css"

function Form3(){
    const [cadastro, setCadastro] = useState({
        nome:"",
        email:"",
        senha:"",
        confirmarSenha:""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCadastro(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(!cadastro.nome){
            alert("Necessario preencher o campo de nome")
        }
        else if(validarEmail(cadastro.email) === false){
            alert("Digite um email valido")
        }
        else if(cadastro.senha.length <= 8){
            alert("A senha precisa ter mais de 8 caracteres")
        }
        else if(cadastro.senha != cadastro.confirmarSenha){
            alert("As senhans não são identicas")
        }
        else{
            alert(`Cadastro realizado com sucesso! \nUsuario cadastrado: ${cadastro.nome}`)
        }
    }

    function validarEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }



    return(
        <div className="formulario">
        <form onSubmit={handleSubmit}>
            <label className="label">
                <p className="text">Nome Completo:</p>
                <input type="text" name="nome" onChange={handleChange}></input>
            </label>
            <br/>
            <label className="label">
                <p className="text">Email:</p>
                <input type="text" name="email" onChange={handleChange}></input>
            </label>
            <br/>
            <label className="label">
                <p className="text">Senha:</p>
                <input type="password" name="senha" onChange={handleChange}></input>
            </label>
            <br/>
            <label className="label">
                <p className="text">Confirmar Senha:</p>
                <input type="password" name="confirmarSenha" onChange={handleChange}></input>
            </label>
            <br/>
            <button type="submit" className="botao">Enviar</button>
        </form>
        </div>
    )
}

export default Form3