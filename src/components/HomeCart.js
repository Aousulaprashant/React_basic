import React from "react";

const HomeCart = ({ prop }) => {
  return (
    <div
      style={{
        backgroundColor: "#9BB0C1",
        width: "60%",
        height: "250px",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
      }}
    >
      Im {prop} HomeCart
    </div>
  );
};

export default HomeCart;
