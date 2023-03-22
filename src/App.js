import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Buy from "./components/Buy/Buy";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import CashRegister from "./components/CashRegister/CashRegister";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Signup from "./components/Signup/Signup";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllLinks from "./components/AllLinks/AllLinks";
import Concert from "./components/Concerts/Concerts";
import Spectacle from "./components/Spectacle/Spectacle";
import Movies from "./components/Movies/Movies";
import Seminar from "./components/Seminar/Seminar";
import Children from "./components/Сhildren/Children";
import Tourism from "./components/Tourism/Tourism";
import Exhibition from "./components/Exhibition/Exhibition";
import Sport from "./components/Sport/Sport";
import Various from "./components/Various/Various";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Offer from "./components/Offer/Offer";
import TicketRefund from "./components/TicketRefund/TicketRefund";
import AuthContextProvider from "./context/authContext";
import ProductsContextProvider from "./context/productsContext";

// import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <ProductsContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="products" element={<Layout />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct />} />
            </Route>
            <Route path="/" element={<Layout />}>
              <Route path="/buy" element={<Buy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cash-register" element={<CashRegister />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/alllinks" element={<AllLinks />} />
              <Route path="/concert" element={<Concert />} />
              <Route path="/spectacle" element={<Spectacle />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/seminar" element={<Seminar />} />
              <Route path="/children" element={<Children />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/exhibition" element={<Exhibition />} />
              <Route path="/sport" element={<Sport />} />
              <Route path="/various" element={<Various />} />
              <Route path="/" element={<Footer />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/ticket-refund" element={<TicketRefund />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
