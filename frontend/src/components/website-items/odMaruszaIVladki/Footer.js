import Newsletter from "./Newsletter";
import {Link} from "react-router-dom";
import "../../../css/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <Newsletter />
            <div className="footer-links">
                <div className="footer-links-urbookstore">
                    <span>UrBookStore</span>
                    <Link className="link" to="/onas">O nas</Link>
                    <Link className="link" to="/kontakt">Kontakt</Link>
                    <Link className="link" to="/rejestracja">Załóż konto</Link>
                    <Link className="link" to="/">Polityka prywatności</Link>
                </div>
                <div className="footer-links-zakupy">
                    <span>Zakupy</span>
                    <Link className="link" to="/bestsellers">Bestsellery</Link>
                    <Link className="link" to="/zapowiedzi">Zapowiedzi</Link>
                    <Link className="link" to="/promocje">Promocje</Link>
                    <Link className="link" to="/nowosci">Nowości</Link>
                    <Link className="link" to="/onas">Regulamin</Link>
                </div>
                <div className="footer-links-oferta">
                    <span>Oferta</span>
                    <Link className="link" to="/onas">Książki</Link>
                    <Link className="link" to="/onas">Audiobooki</Link>
                    <Link className="link" to="/onas">Muzyka</Link>
                    <Link className="link" to="/onas">Filmy</Link>
                </div>
                <div className="footer-links-topbooks">
                    <span>Top 5 książek</span>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                    <a href="#">Historia i teraźniejszość</a>
                </div>
            </div>
            <div className="footer-copywright">
                <span>© 2022 Księgarnia internetowa UrBookStore.</span>
            </div>

        </div>
    )
}

export default Footer