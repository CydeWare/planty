import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PlantShop from "./components/Home/PlantShop.js";
import { useEffect } from "react";
import Shop from "./components/Shop/Shop.js";
import Login from "./components/Login/Login.js";
import About from "./components/About/About.js";
import Blog from "./components/Blog/Blog.js";
import Contact from "./components/Contact/Contact.js";
// import ImageSlider from "./components/ImageSlider/ImageSlider.js";
import Cart from "./components/Cart/Cart.js";
import ProductDetails from "./components/ProductDetails/ProductDetails.js";
import "./global.css"

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PlantShop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/carousel" element={<Carousel />} />
      <Route path="/imageslider" element={<ImageSliderContainer />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
