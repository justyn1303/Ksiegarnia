import searchImg from "../../../images/search.png";
import profileImg from "../../../images/profile.png";
import koszyk2Img from "../../../images/koszyk2.png";
import userImg from "../../../images/user.png";
import logoutImg from "../../../images/log-out.png";
import settingsImg from "../../../images/settings.png";
import logoImg2 from "../../../images/logo2.png";
import { useState } from "react";
import {Link} from 'react-router-dom';
import"../../../css/NovBar.css";
import"../../../css/Profile.css";

const NavBarProfile = () => {
    
    const[open, setOpen]=useState(false);

    return (
        <div className="navbar">
            <div className="navbar-main ">
                <div className="navbar-main-objects">
                <div className="navbar-logo ">
                    <Link to="/"><img src={logoImg2}></img></Link>
                </div>
                <div className="navbar-search">
                <input type="text" placeholder="Czego szukasz?"></input>
                <img className="search" src={searchImg}></img>
                </div>
                <div className="navbar-profile">
                <div className="profile"onClick={()=>{setOpen(!open)}}>
                    <Link className="profile-link" to="/profile"> 
                    <img  className="img-user" src={profileImg}></img>
                    </Link>
                    <span>MojProfil</span>
                  
                </div>
                <div className={`dropdown-menu-profile ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <DropdownItemProfile img ={userImg} text ={'Moj profil'}/>
                        <DropdownItemProfile img ={koszyk2Img} text ={'Moj koszyk'}/>
                        <DropdownItemProfile img ={settingsImg} text ={'Ustawienie'}/>
                        <DropdownItemProfile img ={logoutImg} text ={'Wyloguj sie'}/>
                    </ul>
                </div>
                </div>
                </div>

            <div className="links">
                <Link to="/books" className="link">Książki</Link>
                <Link to="/nowosci" className="link">Nowości</Link>
                <Link to="/zapowiedzi" className="link">Zapowiedzi</Link>
                <Link to="/promocje" className="link">Promocje</Link>
            </div>
            </div>
           
           
            
        </div>
    )
}

function DropdownItemProfile(props){
    return(
        <li className="dropdownItemProfile">
            <img src={props.img}></img>
            <a>{props.text}</a>

        </li>
    );
}

export default NavBarProfile