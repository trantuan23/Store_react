import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componets/layout/home";
import Footer from "./componets/home/footer";
import Copy from "./componets/home/copy";
import Shop from "./componets/layout/shop";
import Product from "./componets/layout/product";
import Cart from "./componets/shoppingcart/cart";
import Order from "./componets/order/order";
import Login from "./componets/auth/login";
import Register from "./componets/auth/register";
import Forgot from "./componets/auth/forgot";
import Contact from "./componets/layout/contact";
import Navbar from "./componets/home/navbar"
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from "./redux/store";
import ResetPassword from "./componets/auth/reset-password";
import Odersuccess from "./componets/order/odersuccess";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Toaster /> 
        <div className="flex flex-1">
          <div className="flex-1 flex flex-col bg-gray-100 w-full">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route exact path="/product/:id" element={<Product/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/checkout" element={<Order/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/forgot-password" element={<Forgot/>}/>
              <Route exact path="/reset-password" element={<ResetPassword/>}/>
              <Route exact path="/contact" element={<Contact/>}/>
              <Route exact path="/oder-success" element={<Odersuccess/>}/>
            </Routes>
          </div>
        </div>
        <Footer />
        <Copy />
      </div>
    </Router>
    </Provider>
  );
}

export default App;
