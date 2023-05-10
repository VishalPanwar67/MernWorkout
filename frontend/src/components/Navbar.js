import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="nav_container">
                <Link to="/"></Link>
                <nav className="navbar">
                    <div className="left">
                        <h1>Navbar</h1>
                    </div>
                    <div className="right">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="checkBtn">
                            <i className="fa-solid fa-bars"></i>
                        </label>
                        <ul className="list">
                            <li><a hrtf="/">Home</a></li>
                            <li><a hrtf="/">Gallery</a></li>
                            <li><a hrtf="/" >Services</a></li>
                            <li><a hrtf="/">About Us</a></li>
                            <li><a hrtf="/">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Navbar;