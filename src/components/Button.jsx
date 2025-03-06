import "./Button.css";

const Button = ({ text, onClick, style }) => {
  return (
    <button className={`custom-button ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
