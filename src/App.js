import "./App.css";
import MobileImage from "./assets/images/image-product-mobile.jpg";

function App() {
  return (
    <div className="App">
      <div className="product-preview-container">
        <img className="banner-image" src={MobileImage} alt="MobileImage" />
        <div className="prodeuct-preview-content"></div>
      </div>
    </div>
  );
}

export default App;
