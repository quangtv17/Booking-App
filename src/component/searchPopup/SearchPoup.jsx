{/*import css */}
import "./searchPopup.css";

const SearchPopup = () => {
    return (
        <div className="searchPopup">
            <h1 className="srcTitle">Search</h1>

            <div className="srcItem">
                <label>Destination</label>
                <input type="text" />
            </div>

            <div className="srcItem">
                <label>Check-in Date</label>
                <span>06/24/2022 to 06/24/2022</span>
            </div>

            <div className="srcItem">
                <label>Option</label>

                <div className="srcOptions">
                    <div className="srcOptionItem">
                        <span className="srcOptionText">
                            Min price <small>per night</small>
                        </span>
                        <input type="number" className="srcOptionInput"/>
                    </div>

                    <div className="srcOptionItem">
                        <span className="srcOptionText">
                            Max price <small>per night</small>
                        </span>
                        <input type="number" className="srcOptionInput"/>
                    </div>

                    <div className="srcOptionItem">
                        <span className="srcOptionText">
                            Adult
                        </span>
                        <input type="number" className="srcOptionInput" placeholder="1"/>
                    </div>

                    <div className="srcOptionItem">
                        <span className="srcOptionText">
                            Children
                        </span>
                        <input type="number" className="srcOptionInput" placeholder="0"/>
                    </div>

                    <div className="srcOptionItem">
                        <span className="srcOptionText">
                            Room
                        </span>
                        <input type="number" className="srcOptionInput" placeholder="1"/>
                    </div>
                </div>
            </div>
            <button>Search</button>
        </div>
    );
  };
  
  export default SearchPopup;
  