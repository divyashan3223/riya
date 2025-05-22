const Button = (prop) => {
  let design = {
    backgroundColor: prop.bgClr,
    padding: prop.padding,
    border: prop.border,
    color: prop.clr,
  };
  return (
    <div>
      <button onClick={prop.clk} style={design}>
        {content}
      </button>
    </div>
  );
};

export default Button;
