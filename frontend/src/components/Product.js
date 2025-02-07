import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";
import '../App.css';

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Przepraszamy, produkt nie znajduje się w magazynie");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className="pr" mr={6}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.title} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Rating className="rat" rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>PLN{product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Brak na magazynie
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Kup</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
