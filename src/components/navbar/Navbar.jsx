import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(){
    return (
        <div className="navbar">
            <div className="navContainer">
               <Link to="/">
                <span className="logo">#VANLIFE</span>
               </Link>
                <div className="navItems">
                    <Link to="/about" className="navLink">About</Link>
                    <Link to="/" className="navLink">Vans</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;