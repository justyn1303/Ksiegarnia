import { useState } from "react";
import DisplayBook from "./DisplayBook";
import data from "../../data";
import "../../css/Recomends.css"

const Recommends = (props) => {
  const [showCategories, setShowCategories] = useState("book-categories-none");
  const showBooks = () => {
    setShowCategories("book-categories-block");
  };

  const books = data.products;
  console.log(books);

  return (
    <div className="recommends">
      {books.map((book)=>{
        return(
          <DisplayBook title={book.title} author={book.author} rating={book.rating} price={book.price} description={book.description} category={book.category} image={book.image} />
        )
      })}
      
    </div>
  );
};

export default Recommends;
