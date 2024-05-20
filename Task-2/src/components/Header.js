import React from "react";

const Header = () => {
  return (
    <div>
      <div
        style={{
          border: "solid gray 3px",
          width: "100%",
          height: "60px",
          textAlign: "center",
          backgroundColor: "yellow",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-between",
            height: "inherit",
            alignItems: "center",
            marginLeft: "68%",
            fontWeight: "bolder",
          }}
        >
          <div>Home</div>
          <div>About</div>
          <div>Contact Us</div>
          <div>Gallery</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
