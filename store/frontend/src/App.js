import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                MERN ecommerce
              </Navbar.Brand>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<Product />}></Route>
              <Route path="/" element={<Home />}></Route>
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
