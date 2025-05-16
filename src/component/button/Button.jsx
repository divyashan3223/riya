import { Fragment } from "react/jsx-runtime";
import dog from "../../assests/dog.webp";
import "./button.css";
export const Button = () => {
  return <button>download my dog image</button>;
};

const Heading = () => {
  return (
    <div className="container">
      <h1 id="head" className="head">this is my dog</h1>
      <img src={dog} alt="" />
      <Button />
    </div>
  );
};

export default Heading;
