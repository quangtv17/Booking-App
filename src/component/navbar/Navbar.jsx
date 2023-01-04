{/*import css*/}
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
            <div className="navContainer">
                <span className="logo">Booking Website</span> {/*Logo của website */}

                <div className="navItems"> {/*2 nút button login và register */}
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
		</div>
	)
};

export default Navbar;