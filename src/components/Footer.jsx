import Button from "./Button";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="pie-de-pagina">
            <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
            <div className="enlaces-sociales">
                <Button texto="Facebook" onClick={() => window.open("https://facebook.com", "_blank")} estilo="redes-sociales" />
                <Button texto="Twitter/X" onClick={() => window.open("https://x.com", "_blank")} estilo="redes-sociales" />
                <Button texto="Instagram" onClick={() => window.open("https://instagram.com", "_blank")} estilo="redes-sociales" />
            </div>
        </footer>
    );
};

export default Footer;