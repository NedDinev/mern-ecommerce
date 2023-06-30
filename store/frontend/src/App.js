import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import { Badge, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import { useContext } from "react";

import { Store } from "./Store";
import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                MERN ecommerce
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Item as={Link} to="/cart" className="nav-link">
                  Cart{" "}
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce(
                        (accumulator, currItem) =>
                          accumulator + currItem.quantity,
                        0
                      )}
                    </Badge>
                  )}
                </Nav.Item>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/profile">
                      User Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/orderhistory">
                      Order History
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => signoutHandler()}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-5">
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/signin" element={<SigninPage />}></Route>
              <Route path="/signup" element={<SignupPage />}></Route>
              <Route path="/shipping" element={<ShippingPage />}></Route>
              <Route path="/payment" element={<PaymentMethodPage />}></Route>
              <Route path="/placeorder" element={<PlaceOrderPage />}></Route>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">ALl rights reserved &copy;</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
