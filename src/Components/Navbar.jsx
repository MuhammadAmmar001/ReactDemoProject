import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand text-white col-3 col-sm-4 col-md-5" to="/">Website</NavLink>
                    <div className="collapse navbar-collapse justify-content-end col-8 col-sm-8 col-md-7" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/features">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to='/about' >About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}