import React from "react";

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

import Mynavbar from "../components/Mynavbar";
import Announcement from "../components/Announcement";
import Slider from '../components/Slider'

function Home() {
  return (
    <div className="contain">
      <Announcement />
      <Mynavbar />
      <Slider />
    </div>
  )
}

export default Home;

