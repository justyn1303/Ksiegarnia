import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../../css/LoginForm.css"

function LoginForm( {Login,  error} ){

const [details,setDetails]=useState({email:"", password:"", isAdmin: false});


const submitHandler = e =>{
    e.preventDefault();

    Login(details);

}

    return(
        <form className="LoginForm" onSubmit={submitHandler}>
            <span className="text-zaloguj">Zaloguj</span>
            <label className="label-zaloguj">Login</label>
            {(error !="")?(<div className="error">{error}</div>):""}
            <input type="text" placeholder="Wprowadź swój login" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
            <label className="label-zaloguj">Hasło</label>
            <input type="text" placeholder="Wprowadź swoje hasło" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            <button type="submit" className="button-zaloguj">Zaloguj</button>
            <span className="info-register">Nie masz jeszcze konta?</span>
            <Link to="/rejestracja" className="button-register">Załóż konto</Link>
        </form>
    )
}

export default LoginForm