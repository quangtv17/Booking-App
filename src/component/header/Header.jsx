{/*import css và thư viện icon */}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
    {/*Hàm điều hướng cho nút button search*/}
    function handleClick() {
        window.location.replace('./search');
    }
    
	return (
		<div className="header">
            <div className="headerList">
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>

                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or more with a free acount
                </p>

                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="where are you going?"
                            className="headerSearchInput"
                        />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText">date to date</span>
                    </div>
                    
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtnSearch" onClick={() => handleClick()}>Search</button>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Header;