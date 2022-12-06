import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Store } from "../Store";
import "../../css/Rejestracja.css";

const Rejestracja = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div className="register">
      <NavBar />
      <span className="text-register">Rejestracja</span>
      <label className="label-register">Login</label>
      <input
        className="input-register"
        type="text"
        placeholder="Wpisz swój login"
      ></input>
      <label className="label-register">Hasło</label>
      <input
        className="input-register"
        type="text"
        placeholder="Wpisz swoje hasło"
      ></input>
      <label className="label-register">E-mail</label>
      <input
        className="input-register"
        type="email"
        placeholder="Wpisz swój login"
      ></input>
      <button className="button-register">Załóż konto</button>
      <Footer />
    </div>
  );
};

export default Rejestracja;
