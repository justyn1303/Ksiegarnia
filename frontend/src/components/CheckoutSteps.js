import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? "active" : ""}>Zaloguj się</Col>
      <Col className={props.step2 ? "active" : ""}>Wysyłka</Col>
      <Col className={props.step3 ? "active" : ""}>Płatność</Col>
      <Col className={props.step4 ? "active" : ""}>Złóż zamówienie</Col>
    </Row>
  );
}
