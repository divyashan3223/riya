import { memo } from "react";

const Footer = () => {
  console.log("footer is working");

  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p> Number:9349829834</p>
      <p>2/334 A,skdf</p>
      <p>helo@gmail.com</p>
    </div>
  );
};

export default memo(Footer);
