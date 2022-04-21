// import React from "react"
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import SinglePage from "./Pages/SinglePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

import { BrowserRouter as Router, Routes, Route,Navigate,useParams } from "react-router-dom";
import Redirect from 'react-router-dom'

function App() {

    const user = true
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/ProductList/:products/" element={<ProductList/>} />
        <Route path="/product/:userid" element={<SinglePage/>} />
        <Route path="/Register" element={user ? <Navigate to="/" replace /> : <Register/>} />
        <Route path="/Login"  element={user ? <Navigate to="/" replace /> : <Login/>}/>
        <Route path="/Cart" element={<Cart/>} />


      </Routes>
    </Router>
  );
}

export default App;
