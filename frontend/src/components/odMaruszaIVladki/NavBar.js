import searchImg from "../../images/search.png";
import profileImg from "../../images/profile.png";
import koszykImg from "../../images/koszyk.png";
import logoImg2 from "../../images/logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NovBar.css";

const NavBar = (props) => {
  const [showCategories, setShowCategories] = useState("book-categories-none");
  const [downArrow, setDownArrow] = useState("downarrow-block");
  const [upArrow, setUpArrow] = useState("uparrow-none");
  const [dropdown, setDropdown] = useState("none");
  const [dropdownProfile, setDropdownProfile] = useState(
    "dropdown-profile-none"
  );

  const show = () => {
    setShowCategories("book-categories-block");
    setDownArrow("downarrow-none");
    setUpArrow("uparrow-block");
  };

  const collapse = () => {
    setShowCategories("book-categories-none");
    setDownArrow("downarrow-block");
    setUpArrow("uparrow-none");
  };

  const showDropdown = () => {
    if (dropdown === "none") {
      setDropdown("block");
      setUpArrow("uparrow-block");
      setDownArrow("downarrow-none");
    } else {
      setDropdown("none");
      setDownArrow("downarrow-block");
      setUpArrow("uparrow-none");
    }
  };

  const showDropdownProfile = () => {
    if (dropdownProfile === "dropdown-profile-none") {
      setDropdownProfile("dropdown-profile-block");
    } else {
      setDropdownProfile("dropdown-profile-none");
    }
  };

  /*props.class(showCategories);*/

  return (
    <div className="navbar">
      <div className="navbar-main ">
        <div className="navbar-main-objects">
          <div className="navbar-logo ">
            <Link to="/">
              <img src={logoImg2}></img>
            </Link>
          </div>
          <div className="navbar-search">
            <input type="text" placeholder="Czego szukasz?"></input>
            <img className="search" src={searchImg}></img>
          </div>
          <div className="navbar-profile">
            <div className="profile">
              <Link className="profile-link" to="/zaloguj">
                <img className="img-profile" src={profileImg}></img>
                <span>Profil</span>
              </Link>
            </div>
            <div className="koszyk1">
              <Link className="profile-link" to="/koszyk">
                <img className="img-profile" src={koszykImg}></img>
                <span>Koszyk</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="links">
          <Link to="/books" className="link">
            Książki
          </Link>
          <Link to="/nowosci" className="link">
            Nowości
          </Link>
          <Link to="/zapowiedzi" className="link">
            Zapowiedzi
          </Link>
          <Link to="/promocje" className="link">
            Promocje
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
