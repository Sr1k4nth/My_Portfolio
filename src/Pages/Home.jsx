import React from "react";
import { PiDownloadSimple } from "react-icons/pi";
import img from '../assests/images/home.png'
function Home() {

  return (
    <div>
      <div className="home-container">
        <div className="home-myself">
          <span>HI, I'M SRIKANTH.G!</span>
          <span>CREATIVE  <span id="spin"></span></span>
          <br />
          <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences.
            With a strong foundation in design principles and a keen eye for detail,I specialize in translating complex
            ideas into user-friendly interfaces that captivate and engage.</p>
          <br />
          <div>
            <button> Download Resume <PiDownloadSimple size={20} /></button>
          </div>
        </div>
        <div className="home-imge">
          <img src={img} alt="" className="home-back" />
        </div>
      </div>
    </div>
  );
}

export default Home;
