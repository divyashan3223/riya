// const style = {
//   backgroundColor: "red",
//   color: "white",
//   padding: "10px",
//   outline: "none",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   marginLeft: "10px",
// };
const Button = (prop) => {
  return <button style={{ backgroundColor:prop.bgClor,color:prop.clr}}>{prop.data}</button>;
};

export default Button;
