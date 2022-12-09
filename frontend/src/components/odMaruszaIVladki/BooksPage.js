import { Link } from "react-router-dom";
import DisplayBook from "./DisplayBook";
import data from "../../data";
import { useState } from "react";
import "../../css/Recomends.css";

const BooksPage = () => {
  const [i, setI] = useState(0);
  const [booksHis, setBooksHis] = useState([]);
  const books = data.products;

  return (
    <div className="books-page">
      <div className="categories">
        <span>Kategoria</span>
        <ul>
          <li>
            <Link className="link" to="/literatura">
              Literatura
            </Link>
          </li>
          <li>
            <Link className="link" to="/romantyczne">
              Romantyczne
            </Link>
          </li>
          <li>
            <Link className="link" to="/kryminalne">
              Kryminalne
            </Link>
          </li>
          <li>
            <Link className="link" to="/komedia">
              Komedia
            </Link>
          </li>
        </ul>
      </div>
      <div className="boo">
        <span>Książki</span>
        <select>
          <option>Od największej oceny</option>
          <option>Od najmniejszej oceny</option>
        </select>

        <div className="recommends">
          {books.map((book) => {
            return (
              <DisplayBook
                title={book.title}
                author={book.author}
                rating={book.rating}
                price={book.price}
                description={book.description}
                category={book.category}
                image={book.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
