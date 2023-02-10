import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import NavMenu from "./Components/NavBar/NavMenu";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  return (
    <>
      <NavBar />
      <Cart />
      <NavMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:handle" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
