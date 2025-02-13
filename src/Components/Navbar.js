import { Component } from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import "./Navbarstyles.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">TripEase</h1>
                <ul className="nav-menu">
                    <li>
                        <Link>
                            <i className="fa-solid fa-house"></i> Home
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
