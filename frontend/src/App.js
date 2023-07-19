import { BrowserRouter, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Badge,
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

import { useContext, useEffect, useState } from "react";

import { Store } from "./Store";

import { getError } from "./utils";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import Router from "./components/Router";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/products/categories");
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? "d-flex flex-column site-container active-cont"
            : "d-flex flex-column site-container"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header className="App-header">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="icon-th-list"></i>
              </Button>
              <Navbar.Brand as={Link} to="/">
                MERN ecommerce
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto w-100 justify-content-end ">
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
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <Link to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </Link>
                      <Link to="/admin/productlist">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </Link>
                      <Link to="/admin/orderlist">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </Link>
                      <Link to="/admin/userlist">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </Link>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <Link
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  {category}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-5">
            <Router />
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
