import { data } from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">MERN ecommerce</a>
      </header>
      <main>
        <h1>Featured Products</h1>

        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>$</strong>
                  {product.price}
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
