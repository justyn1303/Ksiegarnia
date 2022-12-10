import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext, useState } from "react";
import InfoBook from "../../Context/InfoBook";
import imgGoldStar from "../../images/GoldStar.png";

const BookPage = (props) => {
  const [showBorderOpis, setShowBorderOpis] = useState("border-yes");
  const [showBorderOpinie, setShowBorderOpinie] = useState("border-none");
  const [showBorderOcena, setShowBorderOcena] = useState("border-none");
  const [comments, setComments] = useState([]);
  const [termComment, setTermComment] = useState("");
  const [showInfoBook, setShowInfoBook] = useState(false);
  const [showInfoMark, setShowInfoMark] = useState(false);
  const [radio, setRadio] = useState(0);

  const BookInformation = useContext(InfoBook);

  const clickOpis = () => {
    if (showBorderOpis === "border-none") {
      setShowBorderOpis("border-yes");
      setShowBorderOpinie("border-none");
      setShowBorderOcena("border-none");
    }
  };

  const clickOpinie = () => {
    if (showBorderOpinie === "border-none") {
      setShowBorderOpis("border-none");
      setShowBorderOpinie("border-yes");
      setShowBorderOcena("border-none");
    }
  };

  const clickOcena = () => {
    if (showBorderOcena === "border-none") {
      setShowBorderOpis("border-none");
      setShowBorderOpinie("border-none");
      setShowBorderOcena("border-yes");
    }
  };

  const updateTermComment = (e) => {
    setTermComment(e.target.value);
  };

  const AddComment = () => {
    setComments([...comments, termComment]);
    setTermComment("");
  };

  const markBook = () => {
    setShowInfoBook(true);
  };
  const displayAlert = () => {
    setShowInfoBook(false);
  };

  const useRadio = (e) => {
    setRadio(e.target.value);
    console.log(e.target.value);
  };

  console.log(props.title);

  return (
    <>
      <NavBar />
      <div className="book-page">
        <div className="book-details">
          <div className="book-details-pro"></div>
          <img className="book-details-img" src={BookInformation.image}></img>
          <div className="book-details-text">
            <div className="books">
              <h4>{BookInformation.title}</h4>
              <div className="book-author">
                <span>Autor: </span>
              </div>
              <div className="book-year">
                <span>Rok wydania:</span>
              </div>
              <div className="book-category">
                <span>Kategoria:</span>
              </div>
            </div>
            <div className="book-reply">
              <span className="txt">{BookInformation.author}</span>
              <span className="txt">2002</span>
              <span className="txt">Romantyczne</span>
            </div>
          </div>

          <div className="book-price">
            <span>{BookInformation.price} zł</span>
            <button>Do koszyka</button>
          </div>
        </div>
        <div className="book-opinie">
          <div className="opinie-choose">
            <ul>
              <li className={showBorderOpis} onClick={clickOpis}>
                Opis
              </li>
              <li className={showBorderOpinie} onClick={clickOpinie}>
                Opinie
              </li>
              <li className={showBorderOcena} onClick={clickOcena}>
                Ocena
              </li>
            </ul>
          </div>
          {showBorderOpis === "border-yes" ? (
            <p>
              Warszawa, wiosna 1938 roku. Osiemnastoletnia Zuzanna wierzy, że
              jej życie będzie usłane różami. Pewnego dnia zachwyca ją wygrywana
              na skrzypcach melodia, a kilka miesięcy później poznaje zdolnego
              muzyka i traci dla niego głowę. Rodzi się pierwsza miłość,
              pojawiają marzenia i plany, a potem przychodzi wojna. Znaczy
              kolejne miesiące pasmem strat, cierpienia i bólu… Zuzanna zaczyna
              pracę na Poczcie Głównej i włącza się w podziemną walkę z
              okupantem. Zostaje przydzielona do komórki „P” zajmującej się
              przechwytywaniem anonimowych donosów pisanych przez Polaków do
              „Szanownego Pana Gestapo”. Jeden z listów rozdziera jej serce.
              Okazuje się, że działalność konspiracyjna to niebezpieczna gra, w
              której stawką jest nie tylko życie, ale i miłość. Listy do Gestapo
              to poruszająca do głębi spowiedź kobiety, która stanęła przed
              dramatycznymi wyborami. Opowieść o życiu brutalnie zmienionym
              przez wojnę. O ranach, które nigdy się nie goją, winach, które
              domagają się odkupienia, i przebaczeniu, które być może nie
              nadejdzie.
            </p>
          ) : null}{" "}
          {showBorderOpinie === "border-yes" ? (
            <>
              <p>Opinie({comments.length})</p>{" "}
              <textarea
                value={termComment}
                onChange={updateTermComment}
                className="form-control"
                placeholder="Wpisz swój komentarz"
              ></textarea>{" "}
              <button className="btn btn-primary" onClick={AddComment}>
                Dodaj komentarz
              </button>
              {comments.map((comment) => {
                return (
                  <div class="card bg-dark text-light">
                    <div className="card-title">Nazwa użytkownika</div>
                    <div class="card-body">{comment}</div>
                  </div>
                );
              })}
            </>
          ) : null}
          {showBorderOcena === "border-yes" ? (
            <>
              <div className="stars">
                <h3>Twoja Ocena</h3>
                <div className="star-1">
                  {" "}
                  <label>
                    <input
                      onChange={useRadio}
                      id="first"
                      name="first"
                      value="first"
                      type="radio"
                      checked={radio === "first"}
                    />
                  </label>
                  <img src={imgGoldStar}></img>
                  <span>1.0</span>
                </div>
                <div className="star-2">
                  {" "}
                  <label>
                    <input
                      onChange={useRadio}
                      id="second"
                      name="second"
                      value="second"
                      type="radio"
                      checked={radio === "second"}
                    />
                  </label>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <span>2.0</span>
                </div>
                <div className="star-3">
                  {" "}
                  <label>
                    <input
                      onChange={useRadio}
                      id="third"
                      name="third"
                      value="third"
                      type="radio"
                      checked={radio === "third"}
                    />
                  </label>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <span>3.0</span>
                </div>
                <div className="star-4">
                  {" "}
                  <label>
                    <input
                      onChange={useRadio}
                      id="four"
                      name="four"
                      value="four"
                      type="radio"
                      checked={radio === "four"}
                    />
                  </label>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <span>4.0</span>
                </div>
                <div className="star-5">
                  {" "}
                  <label>
                    <input
                      onChange={useRadio}
                      id="five"
                      name="five"
                      value="five"
                      type="radio"
                      checked={radio === "five"}
                    />
                  </label>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <img src={imgGoldStar}></img>
                  <span>5.0</span>
                </div>
                <button className="btn btn-primary" onClick={markBook}>
                  Wyślij ocenę
                </button>
                {showInfoBook === true ? (
                  <>
                    <div className="alert alert-success">
                      Książka została oceniona
                    </div>
                    <button className="btn btn-primary" onClick={displayAlert}>
                      Ok
                    </button>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookPage;
