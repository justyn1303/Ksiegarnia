import data from "../../data";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BookPage from "./BookPage";
import InfoBook from "../Context/InfoBook";
import KoszykContext from "../Context/KoszykContext";

const DisplayBook = (props) => {
  const [show, setShow] = useState(false);

  console.log(props.title);

  const InfoB = useContext(InfoBook);

  const Context = useContext(KoszykContext);
  const [sumPrice, setSumPrice] = useState(0);
  const addToKoszyk = () => {
    Context.item.push({ title: props.title, price: props.price });

    Context.sum += props.price;
  };

  console.log(Context);

  const click = () => {
    console.log("click");
    setShow(true);
    InfoB.title = props.title;
    InfoB.author = props.author;
    InfoB.image = props.image;
    InfoB.price = props.price;
    InfoB.rating = props.rating;

    console.log(InfoB);
  };

  return (
    <div onClick={click} className="book">
      <div>
        <Link className="displaybook" to="/book">
          <img className="book-image" src={props.image} alt={props.title} />
        </Link>
      </div>
      <div className="book-info">
        <button></button>
        <span className="book-title">{props.title}</span>
        <span className="book-author">{props.author}</span>
        <span>{props.rating}</span>
        <h4 className="book-price">{props.price} zł</h4>

        <button onClick={addToKoszyk} className="addtobuy">
          Do koszyka
        </button>
      </div>
    </div>
  );
};

export default DisplayBook;
