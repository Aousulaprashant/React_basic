import React from "react";
import charecter from "../images/business-solution/Character.png";
import bars from "../images/Bars.png";
const Home = () => {
  return (
    <div className="home-main">
      <div className="left-cont">
        <div className="heading">
          <h2>
            Empower Your Business with <span>UCB</span>
          </h2>
        </div>

        <div className="paragraphn">
          <p>
            Discover the power of UCB's cutting-edge solutions. Explore our
            platform's revolutionary features designed to elevate your business
            to new heights.
          </p>
        </div>
        <div className="starbnt">
          <button className="btn">Get Started</button>
          <button className="bbnt">Learn More</button>
        </div>
      </div>

      <div className="imge">
        <img src={charecter}></img>
        <img src={bars}></img>
      </div>
    </div>
  );
};

export default Home;
