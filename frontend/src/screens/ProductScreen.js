import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { Store } from "../Store";
import imgGoldStar from "../images/GoldStar.png";
import { useState } from "react";
import "../App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
<<<<<<< HEAD
=======
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
  const [showInfoBook, setShowInfoBook] = useState(false);
  const [showInfoMark, setShowInfoMark] = useState(false);
  const [radio, setRadio] = useState("");
  const [comments, setComments] = useState([]);
  const [termComment, setTermComment] = useState("");
<<<<<<< HEAD
=======
  const [me, setMe] = useState(null)

>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728

  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
<<<<<<< HEAD
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      let book;
      try {
        book = (await axios.get(`/api/products/slug/${slug}`))?.data;
        dispatch({ type: "FETCH_SUCCESS", payload: book });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
      if (!book) {
        return;
      }
      try {
        const comments = (await axios.get(`/api/comments/${book._id}`))?.data;
        setComments(comments);
      } catch (err) {}
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
=======

  const fetchData = async () => {
    dispatch({ type: "FETCH_REQUEST" });
    let book;
    try {
      book = (await axios.get(`/api/products/slug/${slug}`))?.data;
      dispatch({ type: "FETCH_SUCCESS", payload: book });
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: getError(err) });
    }
    if (!book) {
      return;
    }
    try {
      const comments = (await axios.get(`/api/comments/${book._id}`))?.data;
      setComments(comments);
    } catch (err) {}
    try {
      const myRating = (
        await axios.get(`/api/rating/me/${book._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        })
      )?.data;
      if (myRating.rating) {
        setRadio(myRating.rating.toString());
      }
    } catch (err) {}
    try {
      const me = (await axios.get(`/api/users/me`,{ headers: { Authorization: `Bearer ${userInfo.token}` } }))?.data;
      setMe(me);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Przepraszamy, produkt nie znajduje się w magazynie");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };

  const displayAlert = () => {
    setShowInfoBook(false);
<<<<<<< HEAD
    setRadio("");
=======
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
  };

  const useRadio = (e) => {
    setRadio(e.target.value);
    console.log(e.target.value);
  };

<<<<<<< HEAD
  const markBook = () => {
    if (radio === "") {
      setShowInfoBook(false);
    } else setShowInfoBook(true);
=======
  const RevertIsBlockedStatus = async (userId, currentIsBlocked) => {
    const updatedUser = (
        await axios.post(
            `/api/users/block/`,
            {
              userId,
              isBlocked: !currentIsBlocked,
            },
            { headers: { Authorization: `Bearer ${userInfo.token}` } }
        )
    )?.data;
    if(updatedUser.isBlocked!==undefined){
      try {
        const comments = (await axios.get(`/api/comments/${product._id}`))?.data;
        setComments(comments);
      } catch (err) {}
    }
  }

  const markBook = async () => {
    if (radio === "") {
      return setShowInfoBook(false);
    }
    const rating = (
      await axios.post(
        `/api/rating/`,
        {
          productId: product._id,
          rating: radio,
        },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      )
    )?.data;
    if (rating) {
      await fetchData();
      setShowInfoBook(true);
    }
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
  };

  const updateTermComment = (e) => {
    setTermComment(e.target.value);
  };

  const AddComment = async () => {
    setTermComment("");
    const result = await axios.post(
      `/api/comments/`,
      { productId: product._id, comment: termComment },
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    if (result.status === 201 && result?.data?.comments?.length) {
      setComments(result.data.comments);
    }
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col className="book-desc" md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.title}</title>
              </Helmet>
              <h1>{product.title}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Cena : {product.price}PLN</ListGroup.Item>
            <ListGroup.Item>
              Opis:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Cena:</Col>
                    <Col>PLN{product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">W Magazynie</Badge>
                      ) : (
                        <Badge bg="danger">Niedostępne</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary">
                        Dodaj do koszyka
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col className="stars-col" md={3}>
<<<<<<< HEAD
          {userInfo?._id && (
=======
          {userInfo?._id && !me?.isBlocked && !me?.isAdmin && (
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
            <>
              <textarea
                value={termComment}
                onChange={updateTermComment}
                className="form-control"
                placeholder="Wpisz swój komentarz"
<<<<<<< HEAD
              ></textarea>{" "}
=======
              ></textarea>
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
              <button className="btn btn-primary" onClick={AddComment}>
                Dodaj komentarz
              </button>
            </>
          )}
<<<<<<< HEAD
=======
          {me?.isBlocked && <div style={{color:'red'}}>Zostałeś zablokowany</div>}
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
          {comments.map((comment) => {
            return (
              <div class="card bg-dark text-light">
                <div className="card-title">
<<<<<<< HEAD
                  {comment?.user?.name ?? comment?.user?.email}{" "}
                </div>
                <div class="card-body">{comment?.comment}</div>
=======
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <span>{comment?.user?.name ?? comment?.user?.email}</span>
                    </div>
                    <div style={{ marginRight: 15, cursor:'pointer' }} onClick={()=>RevertIsBlockedStatus(comment?.user?._id, !!comment?.user?.isBlocked)}>{comment?.user?.isBlocked? "unblock":"block"}</div>
                  </div>
                  <hr></hr>
                </div>
                <div class="card-body">
                  <p>"{comment?.comment}"</p>
                </div>
>>>>>>> 3713fcc1f82cf2e4dfe10f71d41e72255089c728
              </div>
            );
          })}
        </Col>
        <>
          {userInfo?._id && !me?.isAdmin && (
            <Col md={3}>
              <div className="stars">
                <h3>Twoja Ocena</h3>
                <div className="stars-star">
                  <div className="star-1">
                    <label>
                      <input
                        onChange={useRadio}
                        id="first"
                        name="first"
                        value="1"
                        type="radio"
                        checked={radio === "1"}
                      />
                    </label>
                    <img src={imgGoldStar}></img>
                    <span>1.0</span>
                  </div>
                  <div className="star-2">
                    <label>
                      <input
                        onChange={useRadio}
                        id="second"
                        name="second"
                        value="2"
                        type="radio"
                        checked={radio === "2"}
                      />
                    </label>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <span>2.0</span>
                  </div>
                  <div className="star-3">
                    <label>
                      <input
                        onChange={useRadio}
                        id="third"
                        name="third"
                        value="3"
                        type="radio"
                        checked={radio === "3"}
                      />
                    </label>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <span>3.0</span>
                  </div>
                  <div className="star-4">
                    <label>
                      <input
                        onChange={useRadio}
                        id="four"
                        name="four"
                        value="4"
                        type="radio"
                        checked={radio === "4"}
                      />
                    </label>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <span>4.0</span>
                  </div>
                  <div className="star-5">
                    <label>
                      <input
                        onChange={useRadio}
                        id="five"
                        name="five"
                        value="5"
                        type="radio"
                        checked={radio === "5"}
                      />
                    </label>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <img src={imgGoldStar}></img>
                    <span>5.0</span>
                  </div>
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
            </Col>
          )}
        </>
      </Row>
    </div>
  );
}

export default ProductScreen;
