import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/signin", {
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
    <Container className="small-container">
      <Helmet>
        <title>Zaloguj się</title>
      </Helmet>
      <h1 className="my-3">Zaloguj się</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
        <div className="pwd-container">
          <Form.Label>Hasło</Form.Label>
          <Form.Control
            type={isRevealPwd ? "text" : "password"}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <img 
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
          />
          </div>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Zaloguj się</Button>
        </div>
        <div className="mb-3">
          Nowy klient?{" "}
          <Link to={`/signup?redirect=${redirect}`}>Stwórz swoje konto</Link>
        </div>
      </Form>
    </Container>
  );
}
