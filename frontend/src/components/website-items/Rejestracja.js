import NavBar from "./NavBar";
import Footer from "./Footer";
import "../../css/Rejestracja.css";

const Rejestracja = () => {
    return (
        
        <div className="register">
            <NavBar />
            <span className="text-register">Rejestracja</span>
            <label className="label-register">Login</label>
            <input className="input-register" type="text" placeholder="Wpisz swój login"></input>
            <label className="label-register">Hasło</label>
            <input className="input-register" type="text" placeholder="Wpisz swoje hasło"></input>
            <label className="label-register">E-mail</label>
            <input className="input-register" type="email" placeholder="Wpisz swój login"></input>
            <button className="button-register">Załóż konto</button>
            <Footer />

        </div>
    )
}

export default Rejestracja