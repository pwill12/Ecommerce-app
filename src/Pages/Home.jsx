import React from "react";

// eslint-disable-next-line

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

import Mynavbar from "../components/Mynavbar";
import Announcement from "../components/Announcement";
import Slider from '../components/Slider'
import Categories from "../components/Categories";

function Home() {
  return (
    <div className="contain">
      <Announcement />
      <Mynavbar />
      <Slider />
      <Categories />
      {/* <h1>hello</h1> */}
    </div>
  )
}

export default Home;

