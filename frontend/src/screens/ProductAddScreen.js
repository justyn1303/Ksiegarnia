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
    case "REQUEST_PENDING":
      return { ...state, loadingUpdate: true };
    case "REQUEST_SUCCESS":
      return { ...state, loadingUpdate: false };
    case "REQUEST_FAIL":
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

export default function ProductAddScreen() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, loadingUpdate: loadingCreate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: false,
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
  const [numReviews, setNumReviews] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let regExpN = /^\d+$/;
    let regExpW = /^[a-z]+$/i;
    if(author.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu autor są możliwe tylko litery');
      return
    }
    if(title.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu tytuł są możliwe tylko litery');
      return
    }
    if(ISBN.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu ISBN są możliwe tylko cyfry');
      return
    }
    if(slug.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu slug są możliwe tylko litery');
      return
    }
    if(price.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu cena są możliwe tylko cyfry');
      return
    }
    if(category.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu kategoria są możliwe tylko litery');
      return
    }
    if(yearOfPublication.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu rok wydania są możliwe tylko cyfry');
      return
    }
    if(countInStock.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu ilość w magazynie są możliwe tylko cyfry');
      return
    }
    if(description.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu opis są możliwe tylko litery');
      return
    }
    if(brand.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu marka są możliwe tylko litery');
      return
    }
    if(rating.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu autor są możliwe tylko cyfry');
      return
    }
    if(numReviews.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu liczba opinii są możliwe tylko cyfry');
      return
    }
    try {
      dispatch({ type: "REQUEST_PENDING" });
      await axios.post(
        `/api/products/`,
        {
          title,ISBN,
          slug,
          price,
          image,
          category,
          yearOfPublication,
          countInStock,
          description,rating, brand,numReviews,author
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({
        type: "REQUEST_SUCCESS",
      });
      toast.success("Pomyślnie zaktualizowano produkt");
      navigate("/admin/products");
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: "REQUEST_FAIL" });
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
        <title>Dodaj nowy produkt</title>
      </Helmet>
      <h1>Dodaj nowy produkt</h1>

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
            <Form.Label>Cena(zł)</Form.Label>
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
            <Button disabled={loadingCreate} type="submit">
              Dodaj
            </Button>
            {loadingCreate && <LoadingBox></LoadingBox>}
          </div>
        </Form>
      )}
    </Container>
  );
}
