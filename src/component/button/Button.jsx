import dog from "../../assests/dog.webp";

export const Button = () => {
  return <button>download my dog image</button>;
};

const Heading = () => {

  const design={ backgroundColor: "red", fontSize: "40px" ,textTransform:"capitalize"}
  return (
    <div>
      <h1 style={design}>
        this is my dog
      </h1>
      <img src={dog} alt="" style={{height:"200px"}} />
      <Button />
    </div>
  );
};

export default Heading;
