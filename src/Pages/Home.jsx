import React from "react";

// eslint-disable-next-line

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

import Mynavbar from "../components/Mynavbar";
import Announcement from "../components/Announcement";
import Slider from '../components/Slider'
import Mycart from "../components/Mycart";
// import CategoriesItem from "../components/CategoriesItem";

function Home() {
  return (
    <div className="contain">
      <Announcement />
      <Mynavbar />
      <Slider />
      <Mycart />

      {/* <CategoriesItem /> */}
      {/* <h1>hello</h1> */}
    </div>
  )
}

export default Home;

