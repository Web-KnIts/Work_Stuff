import { Route, Routes } from "react-router-dom";
import "./App.css";
import BrandCard from "./components/BrandCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Collections from "./pages/Collections";
import CategoriesPage from "./pages/Categories";
import SignInModal from "./pages/SignIn";
import RegisterModal from "./pages/Register";
import Footer from "./components/Footer";
function App() {
  const categories = [{
    main:"Spare by bike",
    subCategories:[1,2,3,4,5,6,7,8,9,10]
  },
  {
    main:"spare by category",
    subCategories:[11,12,13,14,15,16,17,18,19,20]
  },
  {
    main:"bike body parts",
    subCategories:[21,22,23,24,25,26,27,28,29,30]
  },
  {
    main:"Car led",
    subCategories:[31,32,33,34,35,36,37,38,39,40]
  },
]
  return (
    <>
      <Navbar categories={categories}/>
      <Routes>
        <Route path="/" element={<Home categories={categories}/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/collections/:subcategory" element={<CategoriesPage/>}/>
        <Route path="/register" element={<RegisterModal/>}/>
        <Route path="/signin" element={<SignInModal/>}/>
      </Routes> 
      <Footer/>
    </>
  );
}

export default App;





