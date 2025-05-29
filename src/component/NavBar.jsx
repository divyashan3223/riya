import { memo } from "react";
import Dog from "../assests/dog.webp";

const NavBar = () => {
  console.log("navbar running");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <img src={Dog} alt="" style={{ height: "50px", borderRadius: "30px" }} />
      <ul
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-between",
          listStyleType: "none",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Context</li>
      </ul>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        style={{ height: "20px" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </nav>
  );
};

export default memo(NavBar);
