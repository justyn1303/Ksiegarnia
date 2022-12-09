import NavBar from "./NavBar";
import Footer from "./Footer";
import data from "../../../data";
import DisplayBook from "./DisplayBook";
import "../../../css/Recomends.css"

const Nowosci = () => {

    const books = data.products;
    console.log(books);

    return (
        <>
        <div className="recommends">
        <NavBar />
            {books.map((book)=> {
                return(
                    <DisplayBook title={book.title} author={book.author} rating={book.rating} price={book.price} description={book.description} category={book.category} image={book.image} />
                )
            })}
        </div>
        <Footer />
        </>
    )
}

export default Nowosci