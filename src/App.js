import "./App.css";
import MobileImage from "./assets/images/image-product-mobile.jpg";
import ButtonLogo from "./assets/images/icon-cart.svg";

function App() {
  return (
    <div className="App">
      <div className="product-preview-container">
        <img className="banner-image" src={MobileImage} alt="Image" />
        <div className="product-preview-content">
          <span className="product-tag">Perfume</span>
          <h1 className="product-heading">Gabrielle Essence Eau De Parfum</h1>
          <p className="product-description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="product-price-container">
            <span className="product-price">$149.99</span>
            <span className="old-product-price">$169.99</span>
          </div>
          <button className="add-to-cart">
            <img className="button-logo" src={ButtonLogo} alt="button-logo" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
