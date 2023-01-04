{/*import css và dữ liệu data json */}
import "./hotelProperties.css";
import hotelListData from "../../data/hotel_list.json";

const HotelProperties = () => {
    return (
        <div className="hotelProperties">
            {/*Truy cập data json và render dữ liệu */}
            {hotelListData.map((a, index) => (
                <div className="hotelPropertiesContainer" key={index}>
                    <div className="hotelPropertiesItem">
                        <img  src={a.image_url} alt="" className="hotelImg"/>
                        <span className="hotelName">{a.name}</span>
                        <span className="hotelCity">{a.city}</span>
                        <span className="hotelPrice">Starting from ${a.price}</span>

                        <div className="hotelRating">
                            <button>{a.rate}</button>
                            <span>{a.type}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default HotelProperties;