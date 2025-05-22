import "./button.css";

const Button = ({ content, bgRadius }) => {
  return (
    <button style={{ borderRadius: bgRadius != null ? bgRadius : "" }}>
      {content}
    </button>
  );
};

export default Button;
