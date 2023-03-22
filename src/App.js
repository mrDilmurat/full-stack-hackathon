import Layout from "./components/Layout/Layout";
import { Routes, Route, } from "react-router-dom";
import Buy from "./components/Buy/Buy";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import CashRegister from "./components/CashRegister/CashRegister";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Signup from "./components/Signup/Signup";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AllLinks from "./components/AllLinks/AllLinks";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Offer from "./components/Offer/Offer";
import TicketRefund from "./components/TicketRefund/TicketRefund";

// import PopularMovie from "./components/PopularMovie/PopularMovie";



function App() {

  return (
    <>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<AllLinks />} />
          <Route path=':productId' element={<SingleProduct />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cash-register" element={<CashRegister />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Footer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/ticket-refund" element={<TicketRefund />} />
          {/* <Route path="/movie" element={<PopularMovie />} /> */}
        </Route>





      </Routes>
    </>
  );
}

export default App;
