import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Store } from "../Store";
import { getError } from "../utils";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_REQUEST":
      return { ...state, loadingUpdate: true };
    case "UPDATE_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "UPDATE_FAIL":
      return { ...state, loadingUpdate: false };
    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true, errorUpload: "" };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loadingUpload: false,
        errorUpload: "",
      };
    case "UPLOAD_FAIL":
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
};
export default function ProductEditScreen() {
  const navigate = useNavigate();
  const params = useParams(); // /product/:id
  const { id: productId } = params;

  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: "",
    });

  const [ISBN, setISBN] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [yearOfPublication, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionToEncourage, setDescriptionToEncourage] = useState("");
  const [numReviews, setNumReviews] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/products/${productId}`);
        setAuthor(data.author);
        setISBN(data.ISBN);
        setTitle(data.title);
        setSlug(data.slug);
        setPrice(data.price);
        setImage(data.image);
        setCategory(data.category);
        setCountInStock(data.countInStock);
        setYear(data.yearOfPublication);
        setDescription(data.description);
        setDescriptionToEncourage(data.descriptionToEncourage);
        setBrand(data.brand);
        setRating(data.rating);
        setNumReviews(data.numReviews);
        dispatch({ type: "FETCH_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [productId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      await axios.put(
        `/api/products/${productId}`,
        {
          _id: productId,
          title,ISBN,
          slug,
          price,
          image,
          category,
          yearOfPublication,
          countInStock,
          description, 
          descriptionToEncourage, rating, brand,numReviews,author
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      toast.success("Pomyślnie zaktualizowano produkt");
      navigate("/admin/products");
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "UPDATE_FAIL" });
    }
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const { data } = await axios.post("/api/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: "UPLOAD_SUCCESS" });

      toast.success("Obraz przesłany pomyślnie");
      setImage(data.secure_url);
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "UPLOAD_FAIL", payload: getError(err) });
    }
  };
  return (
    <Container className="small-container">
      <Helmet>
        <title>Edytuj Produkt zł{productId}</title>
      </Helmet>
      <h1>Edytuj Produkt {productId}</h1>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Autor</Form.Label>
            <Form.Control
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Tytuł</Form.Label>
            <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>ISBN</Form.Label>
            <Form.Control
                value={ISBN}
                onChange={(e) => setISBN(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="slug">
            <Form.Label>Slug</Form.Label>
            <Form.Control
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Cena</Form.Label>
            <Form.Control
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Link do grafiki</Form.Label>
            <Form.Control
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageFile">
            <Form.Label>Prześlij Plik</Form.Label>
            <Form.Control type="file" onChange={uploadFileHandler} />
            {loadingUpload && <LoadingBox></LoadingBox>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Kategoria</Form.Label>
            <Form.Control
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Rok wydania</Form.Label>
            <Form.Control
                value={yearOfPublication}
                onChange={(e) => setYear(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="countInStock">
            <Form.Label>Ilość w magazynie</Form.Label>
            <Form.Control
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Opis</Form.Label>
            <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descriptionToEncourage">
            <Form.Label>Opis zachęcający</Form.Label>
            <Form.Control
                value={descriptionToEncourage}
                onChange={(e) => setDescriptionToEncourage(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Marka</Form.Label>
            <Form.Control
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Ocena</Form.Label>
            <Form.Control
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Liczba opinii</Form.Label>
            <Form.Control
                value={numReviews}
                onChange={(e) => setNumReviews(e.target.value)}
                required
            />
          </Form.Group>
          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Aktualizuj
            </Button>
            {loadingUpdate && <LoadingBox></LoadingBox>}
          </div>
        </Form>
      )}
    </Container>
  );
}
