import dog from "../../assests/dog.webp";

const Heading = () => {
  return (
    <div>
      <h1>my dog image</h1>
      <img src={dog} alt="" />
    </div>
  );
};

export default Heading;
