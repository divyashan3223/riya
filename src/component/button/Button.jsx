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
const Button = ({ data,bgClor,clr }) => {
  return <button style={{ backgroundColor:bgClor,color:clr}}>{data}</button>;
};

export default Button;
