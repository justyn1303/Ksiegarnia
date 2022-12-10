import NavBar from "./NavBar";
import Footer from "./Footer";
import textImg from "../../images/text.webp";
import phoneImg from "../../images/phone.png";
import "../../css/Kontakt.css";

const Kontakt = () => {
  return (
    <>
      <NavBar />
      <div className="kontakt">
        <h2>Kontakt</h2>
        <p className="description">
          Jeśli masz pytania lub problem z zamówieniem, zapraszamy do kontaktu z
          naszym Działem Obsługi Klienta.
        </p>
        <div className="contacts">
          <div className="contact-email">
            <img src={textImg}></img>
            <span>Napisz do nas na czacie online</span>
            <span>poniedziałek–piątek: 7:00–21:00</span>
            <span>sobota–niedziela: 8:00–16:00</span>
          </div>
          <div className="contact-phone">
            <img className="phone" src={phoneImg}></img>
            <p>504 323 213</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontakt;
