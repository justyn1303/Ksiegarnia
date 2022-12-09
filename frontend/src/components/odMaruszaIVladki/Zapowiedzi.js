import NavBar from "./NavBar";
import Footer from "./Footer";
import data from "../../data";
import DisplayBook from "./DisplayBook";
import "../../css/Recomends.css";

const Zapowiedzi = () => {
  const books = data.products;
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
};

export default Zapowiedzi;
