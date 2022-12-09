import NavBar from "./NavBar";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import data from "../../../data"
import { useState, useEffect } from "react";


const Zaloguj = () => {

    const navigate = useNavigate();

    const UserData = data.users;

    const[user, setUser] = useState({email:"", password:"",isAdmin: false});
    const[error, setError] = useState("");

    const Login = details => {
        console.log(details);

        for (let i = 0; i < UserData.length; i++){
        if(details.email == UserData[i].email && details.password == UserData[i].password && details.isAdmin == UserData[i].isAdmin){
            console.log("Logged in")
            setUser({
                email: details.email,
                password: details.password,
                isAdmin: false 
            });
            
            navigate("/profile");
        }else if(details.email == UserData[i].email && details.password == UserData[i].password && UserData[i].isAdmin == true){
            setUser({
                email: details.email,
                password: details.password,
                isAdmin: true
            });
            
            navigate("/profileAdmin");
        }
        else{
            console.log("error")
            setError("Error")


        }
        }
    }
    


    return (
        <>
        <NavBar />
        <div className="zaloguj">
            {(user.email != "" && user.isAdmin != false)? (<div></div>):
            (<LoginForm Login={Login} error={error}/>)}
        </div>
        <Footer />
        </>
    )
}

export default Zaloguj