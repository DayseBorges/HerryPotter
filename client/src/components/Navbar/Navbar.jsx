import { useLocation, useNavigate } from "react-router-dom";
import style from "./styles/Navbar.module.css"
import img from "../../assets/images/harry-potter-logo-transparent-background-21.png"

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return ( 
        <>
        <img className={style.logo} src={img} alt="logo" />
        <div className={style.containerHeader}>
            
            <ul className={style.navLinks}>
                <li onClick={() => navigate("/")}  className={`${style.link} ${location.pathname === "/" && style.linkActive}`}>Home</li>
                <li onClick={() => navigate("/contact")} className={`${style.link} ${location.pathname === "/contact" && style.linkActive}`}>Contact</li>
                <li onClick={() => navigate("/about")} className={`${style.link} ${location.pathname === "/about" && style.linkActive}`}>About</li>
            </ul>
        </div>
        </>
    );
}
 
export default Navbar;