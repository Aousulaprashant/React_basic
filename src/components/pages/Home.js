import React from "react";
import HomeCart from "../HomeCart";

const Home = () => {
  return (
    <div>
      <h3>Wellcome to Home Page</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {/*-------------  Send props -------------*/}

        <HomeCart prop={"First"} />
        <HomeCart prop={"second"} />
        <HomeCart prop={"Third"} />
      </div>
    </div>
  );
};

export default Home;
