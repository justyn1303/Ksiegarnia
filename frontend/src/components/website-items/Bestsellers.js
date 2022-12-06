
import data from "../../data";
import NavBar from "./NavBar";
import DisplayBook from "./DisplayBook";
import Footer from "./Footer";
import "../../css/Bestsellers.css"

const Bestsellers = () => {

    const books = data.products;
    console.log(books);

    return (
        <>
        <NavBar />
            {books.map((book)=> {
                return(
                    <DisplayBook title={book.title} author={book.author} rating={book.rating} price={book.price} description={book.description} category={book.category} image={book.image} />
                )
            })}
        <Footer />
        </>
    )
 
};


export default Bestsellers;
