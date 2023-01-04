{/*import css và dữ liệu data json */}
import navBarData from "../../data/navBar.json";
import "./navbarItem.css";

const NavbarItem = () => {
	return(
		<div className="navbarItem">
			<div className="navbarContainer">
				<div className="navbarList">
					{/*Truy cập data json và render dữ liệu */}
					{navBarData.map(a => (
						<div key={a.type} className={`${"navbarListItem"} ${a.active ? "active" : ""}`}>
							<i className={a.icon} />
							<span>{a.type}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default NavbarItem;
