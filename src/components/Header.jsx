import "./Header.css";
import Button from "../components/Button";
import logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo de la tienda" className="logo-img" />
            <div className="nombre-tienda">Huellas Felices</div>
            <nav>
                <ul>
                    <li><Button text="Inicio" onClick={() => window.location.href = "/"} style="secondary" /></li>
                    <li><Button text="Conócenos" onClick={() => window.location.href = "/otherpage"} style="secondary" /></li>
                    <li><Button text=":D" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")} style="secondary" /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;