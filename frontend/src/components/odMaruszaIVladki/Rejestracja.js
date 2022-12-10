import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import "../../../css/Rejestracja.css";

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
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label className="label-register">Hasło</label>
      <input
        className="input-register"
        type="text"
        placeholder="Wpisz swoje hasło"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <label className="label-register">E-mail</label>
      <input
        className="input-register"
        type="email"
        placeholder="Wpisz swój email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <div className="mb-3">
        <Button type="submit">Sign Up</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Rejestracja;
