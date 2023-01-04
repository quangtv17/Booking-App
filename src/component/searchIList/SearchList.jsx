{/*import css và dữ liệu data json */}
import "./searchList.css";
import searchData from "../../data/search.json";

const SearchItem = () => {
    return (
      <div className="searchItem">
        {/*Truy cập json và render ra value có sẵn */}
        {searchData.map(x => (
            <div className="srcList">
              <img src={x.image_url} alt="" className="srcImg" />

              <div className="srcDesc">
                <h1 className="srcTitle">{x.name}</h1>
                <span className="srcDistance">{x.distance}</span>
                <span className="srcTaxi">{x.tag}</span>
                <span className="srcType">{x.type}</span>
                <span className="srcDescription">{x.description}</span>

                {/*Nếu free_cancel = true thì render ra "Free cancellation"  và ngược lại render ra "" */}
                <span className="srcCancel">
                  {x.free_cancel ? "Free cancellation" : ""} 
                </span>

        {/*Nếu free_cancel = true thì render ra "You can cancel later, so lock in this great price today!"  và ngược lại render ra "" */}
                <span className="srcCancelItem">
                  {x.free_cancel ? "You can cancel later, so lock in this great price today!" : ""}
                </span>
              </div>

              <div className="srcDetails">
                <div className="srcRating">
                  <span className="srcRate_text">{x.rate_text}</span>
                  <button className="srcRate">{x.rate}</button>
                </div>

                <div className="srcDetailTexts">
                  <span className="srcPrice">${x.price}</span>
                  <span className="srcTaxOp">Includes taxes and fess</span>
                  <button className="srcButton">See availability</button>
                </div>  
              </div>
            </div>
        ))}
      </div>
    );
  };
  
export default SearchItem;