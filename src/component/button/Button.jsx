const style = {
  backgroundColor: "red",
  color: "white",
  padding: "10px",
  outline: "none",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "10px",
};
const Button = ({ data }) => {
  return <button style={style}>{data}</button>;
};

export default Button;
