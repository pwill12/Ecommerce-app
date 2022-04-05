import React from "react";

// eslint-disable-next-line

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

import Mynavbar from "../components/Mynavbar";
import Announcement from "../components/Announcement";
import Slider from '../components/Slider'
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


function Home() {
  return (
    <div className="contain">
      <Announcement />
      <Mynavbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />

      {/* <h1>hello</h1> */}
    </div>
  )
}

export default Home;

