import { Button, Col, Container, Form, Row } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";

export default function PaymentMethodPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || "Paypal"
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  return (
    <Container className="small-container">
      <Helmet>
        <title>Payment Method</title>
      </Helmet>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={4} className="mx-auto">
            <h1 className="my-3">Payment Method</h1>
            <Form.Check
              type="radio"
              id="PayPal"
              value="PayPal"
              label="PayPal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
              className="mb-3"
            />

            <Form.Check
              type="radio"
              id="Stripe"
              value="Stripe"
              label="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
              className="mb-3"
            />
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
