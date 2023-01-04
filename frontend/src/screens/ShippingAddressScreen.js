import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import CheckoutSteps from "../components/CheckoutSteps";
import { toast } from "react-toastify";
import { getError } from "../utils";


export default function ShippingAddressScreen() {

  const stateButton ={button:1};

  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "");
  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [userInfo, navigate]);
  const [country, setCountry] = useState(shippingAddress.country || "");
  const submitHandler = (e) => {
    e.preventDefault();
    if(stateButton.button === 2){
      navigate("/");
    }
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let regExpN = /^\d+$/;
    let regExpW = /^[a-zA-Z]+$/i;
    if(fullName.match(regName)){
      console.log('ok');
    }else{
      toast.error('W polu powinno być Imię i nazwisko');
      return;
    }
    if(country.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu Kraj są możliwe tylko litery');
      return;
    }
    if(city.match(regExpW)){
      console.log('ok');
    }else{
      toast.error('W polu Miasto są możliwe tylko litery');
      return;
    }
    if(postalCode.match(regExpN)){
      console.log('ok');
    }else{
      toast.error('W polu Kod Pocztowy są możliwe tylko cyfry');
      return;
    }
    try{
      ctxDispatch({
        type: "SAVE_SHIPPING_ADDRESS",
        payload: {
          fullName,
          country,
          city,
          address,
          postalCode,
          
        },
      });
      localStorage.setItem(
        "shippingAddress",
        JSON.stringify({
          fullName,
          country,
          city,
          address,
          postalCode,
          
        })
      );
      if(stateButton.button === 1){
        navigate("/payment");
      }
    }catch(err){
      toast.error(getError(err));
    }
  }

  return (
    <div>
      <Helmet>
        <title>Adres Wysyłki</title>
      </Helmet>

      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Adres Wysyłki</h1>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Imię i nazwisko</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Kraj</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="city">
            <Form.Label>Miasto</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Adres</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="postalCode">
            <Form.Label>Kod Pocztowy</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form onSubmit={submitHandler}>
          <div className="mb-3 d-grid gap-2 d-md-flex justify-content-md-start">
            <Button onClick={()=>(stateButton.button = 1)}
            variant="primary" type="submit" name="btn1">
              Kontynuuj
            </Button>
            <Button onClick={() => (stateButton.button = 2)}
            variant="primary" type="submit" name="btn2">
              Powrót do głównej strony
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
