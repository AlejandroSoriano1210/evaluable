import "./Button.css";

const Button = ({ texto, onClick, estilo }) => {
  return (
    <button className={`boton-personalizado ${estilo}`} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Button;
