import "./Header.css";
import Button from "../components/Button";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="encabezado">
            <img src={logo} alt="Logo de la tienda" className="logo-img" />
            <div className="nombre-tienda">Huellas Felices</div>
            <nav>
                <ul>
                    <li><Button texto="Inicio" onClick={() => window.location.href = "/"} estilo="secundario" /></li>
                    <li><Button texto="Conócenos" onClick={() => window.location.href = "/otherpage"} estilo="secundario" /></li>
                    <li><Button texto=":D" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")} estilo="secundario" /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;