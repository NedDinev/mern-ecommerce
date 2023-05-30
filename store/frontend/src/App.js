import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Product from "./components/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">MERN ecommerce</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<Product />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
